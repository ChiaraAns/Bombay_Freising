import {
  speisekarte,
  gerichtNr,
  type Geschmack,
  type Gericht,
  type Protein,
} from '../data/speisekarte';

export type Wunsch = Protein | 'vegan';

export interface KompassGericht extends Gericht {
  nr: number;
  kategorie: string;
}

export interface Empfehlung {
  gericht: KompassGericht;
  dazu: KompassGericht;
  summe: number;
}

export interface KompassErgebnis {
  top: Empfehlung;
  alternativen: Empfehlung[];
  /** ehrlicher Hinweis, wenn es keine exakte Übereinstimmung gibt */
  hinweis?: string;
}

export const wunschLabel: Record<Wunsch, string> = {
  huhn: 'Hühnchen',
  lamm: 'Lamm',
  ente: 'Ente',
  fisch: 'Fisch & Garnelen',
  vegetarisch: 'Vegetarisch',
  vegan: 'Vegan',
};

export const geschmackLabel: Record<Geschmack, string> = {
  cremig: 'Cremig & mild',
  nussig: 'Nussig',
  fruchtig: 'Fruchtig',
  wuerzig: 'Kräftig & würzig',
  gruen: 'Grün & frisch',
};

/** Der Kompass-Pool: alle Gerichte aus Kompass-Kategorien mit Tags. */
export const kompassPool: KompassGericht[] = speisekarte
  .filter((k) => k.kompass)
  .flatMap((k) =>
    k.gerichte
      .filter((g) => g.nr && g.protein && g.geschmack)
      .map((g) => ({ ...g, nr: g.nr as number, kategorie: k.id })),
  );

function passtZumWunsch(g: KompassGericht, w: Wunsch): number {
  if (w === 'vegan') return g.veganMoeglich ? 1 : 0;
  if (w === 'vegetarisch') return g.vegetarisch ? 1 : 0;
  const p = g.protein ?? [];
  if (!p.includes(w)) return 0;
  return p.length === 1 ? 1 : 0.6; // gemischte Teller zählen etwas weniger
}

/** Slider 1–4 Chilis → Schärfe 0–3 */
export const chiliZuSchaerfe = (chilis: number) => Math.max(0, Math.min(3, chilis - 1));

function punkte(g: KompassGericht, w: Wunsch, gs: Geschmack, schaerfe: number) {
  const wunsch = passtZumWunsch(g, w);
  if (!wunsch) return -Infinity;
  const geschmack = g.geschmack ?? [];
  // Geschmack wiegt schwerer als Schärfe: wer „cremig“ wählt, bekommt Cremiges.
  let p = wunsch * 30;
  if (geschmack[0] === gs) p += 30;
  else if (geschmack.includes(gs)) p += 18;
  p -= Math.abs((g.schaerfe ?? 1) - schaerfe) * 7;
  if (g.beliebt) p += 3;
  // Thalis und Biryanis sind Komplettgerichte – leicht nach hinten, damit Currys vorne stehen
  if (g.kategorie === 'thalis' || g.kategorie === 'biryani') p -= 2;
  return p;
}

const N = (nr: number) => gerichtNr(nr) as KompassGericht;

/** „Dazu passt“: Kandidaten je Gericht, der erste noch nicht verwendete gewinnt. */
function dazuKandidaten(g: KompassGericht, w: Wunsch): number[] {
  if (w === 'vegan') return [144]; // Basmati-Reis
  if (g.kategorie === 'tandoori') return (g.schaerfe ?? 0) >= 2 ? [139, 138] : [139, 138, 159]; // Naan & Reis sind dabei
  if (g.kategorie === 'biryani') return [139, 138];
  if (g.kategorie === 'thalis') return [139, 159];
  if ((g.schaerfe ?? 0) >= 2) return [139, 138, 144];
  const gs = g.geschmack?.[0];
  if (gs === 'cremig') return [159, 158, 144];
  if (gs === 'nussig') return [158, 159, 144];
  if (gs === 'fruchtig') return [144, 158, 159];
  if (gs === 'gruen') return [159, g.vegetarisch ? 165 : 162, 144];
  return [159, 139, 144];
}

export function empfehle(w: Wunsch, gs: Geschmack, chilis: number): KompassErgebnis {
  const schaerfe = chiliZuSchaerfe(chilis);
  const sortiert = kompassPool
    .map((g) => ({ g, p: punkte(g, w, gs, schaerfe) }))
    .filter((x) => x.p > -Infinity)
    .sort((a, b) => b.p - a.p || (a.g.nr - b.g.nr));

  const drei = sortiert.slice(0, 3).map((x) => x.g);
  const benutzt = new Set<number>();
  const mitDazu: Empfehlung[] = drei.map((g) => {
    const kandidaten = dazuKandidaten(g, w);
    const nr = kandidaten.find((k) => !benutzt.has(k)) ?? kandidaten[0];
    benutzt.add(nr);
    const dazu = N(nr);
    return { gericht: g, dazu, summe: Math.round((g.preis + dazu.preis) * 100) / 100 };
  });

  const top = drei[0];
  const hinweise: string[] = [];
  if (top && !(top.geschmack ?? []).includes(gs)) {
    const wer = w === 'vegan' || w === 'vegetarisch' ? wunschLabel[w].toLowerCase() : `mit ${wunschLabel[w]}`;
    hinweise.push(`„${geschmackLabel[gs]}“ und ${wer} gibt unsere Karte nicht her – das hier kommt am nächsten.`);
  }
  if (top && Math.abs((top.schaerfe ?? 1) - schaerfe) >= 2) {
    hinweise.push(
      schaerfe > (top.schaerfe ?? 1)
        ? 'So viel Schärfe ist bei dieser Auswahl auf unserer Karte nicht gekennzeichnet – diese Gerichte passen sonst am besten.'
        : 'Ganz mild ist bei dieser Auswahl nichts – diese Gerichte passen sonst am besten.',
    );
  }

  return {
    top: mitDazu[0],
    alternativen: mitDazu.slice(1),
    hinweis: hinweise.join(' ') || undefined,
  };
}
