/**
 * Warenkorb-Logik für /bestellen – rein, ohne DOM, damit sie testbar ist.
 */
import { speisekarte } from '../data/speisekarte';
import { bestellung } from '../data/bestellung';
import { berlinZeit, addiereTage, zeitenFuer, berechneStatus, type BerlinZeit } from './status';
import { wochentagNamen } from '../data/oeffnungszeiten';

export interface Artikel {
  id: string; // Gerichtsnummer oder Name (Getränke)
  nr?: number;
  name: string;
  beschreibung?: string;
  preis: number;
  kategorie: string;
  varianten?: string[];
  vegetarisch?: boolean;
  veganMoeglich?: boolean;
  schaerfe?: number;
}

export interface Position {
  id: string;
  variante?: string;
  menge: number;
}

/** Alle bestellbaren Artikel aus der zentralen Speisekarte. */
export const artikel: Artikel[] = speisekarte.flatMap((k) =>
  k.gerichte.map((g) => ({
    id: g.nr ? String(g.nr) : g.name,
    nr: g.nr,
    name: g.name,
    beschreibung: g.beschreibung,
    preis: g.preis,
    kategorie: k.id,
    // Gruppen wie „Säfte – je 4,00 €“: Sorte wählbar
    varianten: g.preisZusatz === 'je' && g.beschreibung ? g.beschreibung.split(/,\s*/) : undefined,
    vegetarisch: g.vegetarisch,
    veganMoeglich: g.veganMoeglich,
    schaerfe: g.schaerfe,
  })),
);

const nachId = new Map(artikel.map((a) => [a.id, a]));
export const findeArtikel = (id: string) => nachId.get(id);

export const schluessel = (p: Pick<Position, 'id' | 'variante'>) => (p.variante ? `${p.id}|${p.variante}` : p.id);

export function zwischensumme(positionen: Position[]) {
  const s = positionen.reduce((summe, p) => summe + (findeArtikel(p.id)?.preis ?? 0) * p.menge, 0);
  return Math.round(s * 100) / 100;
}

export function gesamt(positionen: Position[], art: 'lieferung' | 'abholung') {
  const gebuehr = art === 'lieferung' && bestellung.lieferung.gebuehr ? bestellung.lieferung.gebuehr : 0;
  return Math.round((zwischensumme(positionen) + gebuehr) * 100) / 100;
}

export const anzahl = (positionen: Position[]) => positionen.reduce((n, p) => n + p.menge, 0);

const euro = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });
export const preis = (n: number) => euro.format(n);

// ---------- Wunschzeiten ----------

export interface Zeitoption {
  wert: string; // 'jetzt' oder 'YYYY-MM-DD HH:MM'
  label: string;
  gruppe: string;
}

const hhmm = (min: number) => `${String(Math.floor(min / 60)).padStart(2, '0')}:${String(min % 60).padStart(2, '0')}`;
const zuMin = (s: string) => {
  const [h, m] = s.split(':').map(Number);
  return h * 60 + m;
};
const datum = (z: BerlinZeit) => `${z.jahr}-${String(z.monat).padStart(2, '0')}-${String(z.tag).padStart(2, '0')}`;

function slotsFuer(tag: BerlinZeit, abMinute: number) {
  const raster = bestellung.rasterMinuten;
  const slots: number[] = [];
  for (const f of zeitenFuer(tag)) {
    const von = zuMin(f.von);
    const bis = zuMin(f.bis);
    let t = Math.max(von, Math.ceil(abMinute / raster) * raster);
    for (; t <= bis - raster; t += raster) slots.push(t);
  }
  return slots;
}

/** Wählbare Zeiten: heute (ab jetzt + Vorlauf) und der nächste Öffnungstag. */
export function zeitoptionen(jetzt: Date = new Date()): Zeitoption[] {
  const z = berlinZeit(jetzt);
  const optionen: Zeitoption[] = [];
  if (berechneStatus(jetzt).offen) optionen.push({ wert: 'jetzt', label: 'So bald wie möglich', gruppe: 'Heute' });

  for (const s of slotsFuer(z, z.minuten + bestellung.vorlaufMinuten)) {
    optionen.push({ wert: `${datum(z)} ${hhmm(s)}`, label: `Heute, ${hhmm(s)} Uhr`, gruppe: 'Heute' });
  }
  for (let n = 1; n <= 7; n++) {
    const tag = addiereTage(z, n);
    const slots = slotsFuer(tag, 0);
    if (!slots.length) continue;
    const name = n === 1 ? 'Morgen' : wochentagNamen[tag.wochentag];
    const gruppe = `${name}, ${String(tag.tag).padStart(2, '0')}.${String(tag.monat).padStart(2, '0')}.`;
    for (const s of slots) optionen.push({ wert: `${datum(tag)} ${hhmm(s)}`, label: `${name}, ${hhmm(s)} Uhr`, gruppe });
    break;
  }
  return optionen;
}

// ---------- Bestelltext ----------

export interface Kunde {
  name: string;
  telefon: string;
  email?: string;
  strasse?: string;
  plz?: string;
  ort?: string;
}

export interface Bestellung {
  nummer: string;
  art: 'lieferung' | 'abholung';
  zeit: Zeitoption;
  kunde: Kunde;
  positionen: Position[];
  anmerkung?: string;
}

export function bestellnummer(jetzt: Date = new Date()) {
  const z = berlinZeit(jetzt);
  const zeichen = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 3; i++) code += zeichen[Math.floor(Math.random() * zeichen.length)];
  return `B-${String(z.tag).padStart(2, '0')}${String(z.monat).padStart(2, '0')}-${code}`;
}

export function positionText(p: Position) {
  const a = findeArtikel(p.id);
  if (!a) return '';
  const name = `${a.nr ? `Nr. ${a.nr} ` : ''}${a.name}${p.variante ? ` (${p.variante})` : ''}`;
  return `${p.menge} × ${name} – ${preis(a.preis * p.menge)}`;
}

export function bestelltext(b: Bestellung) {
  const k = b.kunde;
  const zeilen = [
    `Bestellung ${b.nummer} über die Website`,
    '',
    `Art: ${b.art === 'lieferung' ? 'Lieferung' : 'Abholung'}`,
    `Wunschzeit: ${b.zeit.label}`,
    `Name: ${k.name}`,
    `Telefon: ${k.telefon}`,
    ...(k.email ? [`E-Mail: ${k.email}`] : []),
    ...(b.art === 'lieferung' ? [`Adresse: ${k.strasse}, ${k.plz} ${k.ort}`] : []),
    '',
    'Bestellung:',
    ...b.positionen.map(positionText),
    '',
    `Summe: ${preis(zwischensumme(b.positionen))}`,
    ...(b.art === 'lieferung' && bestellung.lieferung.gebuehr
      ? [`Liefergebühr: ${preis(bestellung.lieferung.gebuehr)}`, `Gesamt: ${preis(gesamt(b.positionen, b.art))}`]
      : []),
    ...(b.anmerkung ? ['', `Anmerkungen: ${b.anmerkung}`] : []),
  ];
  return zeilen.join('\n');
}
