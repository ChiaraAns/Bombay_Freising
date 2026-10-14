/**
 * Selbsttest für Live-Status und Curry-Kompass.
 * Ausführen: npm test
 */
import { berechneStatus, istFeiertagBayern } from '../src/lib/status';
import { empfehle, kompassPool, type Wunsch } from '../src/lib/kompass';
import { speisekarte } from '../src/data/speisekarte';
import type { Geschmack } from '../src/data/speisekarte';

let fehler = 0;
const pruefe = (bedingung: boolean, text: string) => {
  if (!bedingung) {
    fehler++;
    console.error('✗', text);
  }
};

// Hilfsfunktion: Berliner Ortszeit → Date (Oktober 2026 = MESZ, UTC+2; Januar = MEZ, UTC+1)
const berlin = (iso: string) => new Date(iso);

// --- Live-Status ---
// Di 13.10.2026 = Ruhetag
pruefe(berechneStatus(berlin('2026-10-13T12:00:00+02:00')).text.startsWith('Heute Ruhetag'), 'Dienstag → Ruhetag');
// Mi 14.10.2026
pruefe(berechneStatus(berlin('2026-10-14T10:00:00+02:00')).text === 'Öffnet heute um 11:30', 'Mi 10:00 → öffnet 11:30');
pruefe(berechneStatus(berlin('2026-10-14T12:15:00+02:00')).text === 'Jetzt geöffnet – Küche bis 14:00', 'Mi 12:15 → offen bis 14:00');
pruefe(berechneStatus(berlin('2026-10-14T14:00:00+02:00')).text === 'Öffnet heute um 17:30', 'Mi 14:00 → öffnet 17:30');
pruefe(berechneStatus(berlin('2026-10-14T16:59:00+02:00')).text === 'Öffnet heute um 17:30', 'Mi 16:59 → öffnet 17:30');
pruefe(berechneStatus(berlin('2026-10-14T19:00:00+02:00')).text === 'Jetzt geöffnet – Küche bis 22:00', 'Mi 19:00 → offen bis 22:00');
pruefe(berechneStatus(berlin('2026-10-14T22:30:00+02:00')).text.startsWith('Heute geschlossen · Morgen ab 11:30'), 'Mi 22:30 → morgen');
// Mo 12.10.2026: nur mittags (TODO Montagabend)
pruefe(berechneStatus(berlin('2026-10-12T12:00:00+02:00')).offen, 'Mo 12:00 → offen');
pruefe(berechneStatus(berlin('2026-10-12T15:00:00+02:00')).text === 'Heute geschlossen · Wieder Mittwoch ab 11:30', 'Mo 15:00 → Wieder Mittwoch (Di Ruhetag)');
// Mo abends: nächste Öffnung ist Mittwoch
pruefe(berechneStatus(berlin('2026-10-12T20:00:00+02:00')).text === 'Heute geschlossen · Wieder Mittwoch ab 11:30', 'Mo 20:00 → Wieder Mittwoch');
// So 18.10. abends → morgen (Mo) ab 11:30
pruefe(berechneStatus(berlin('2026-10-18T23:00:00+02:00')).text === 'Heute geschlossen · Morgen ab 11:30', 'So 23:00 → Morgen ab 11:30');
// Zeitzone: 10:00 UTC = 12:00 Berlin (Sommerzeit) → offen
pruefe(berechneStatus(new Date('2026-10-14T10:00:00Z')).offen, 'UTC→Berlin Umrechnung');
// Winterzeit: Mi 13.1.2027 11:00 UTC = 12:00 MEZ → offen
pruefe(berechneStatus(new Date('2027-01-13T11:00:00Z')).offen, 'Winterzeit');
// Feiertage
pruefe(istFeiertagBayern(2026, 4, 6), 'Ostermontag 2026');
pruefe(istFeiertagBayern(2026, 6, 4), 'Fronleichnam 2026');
pruefe(!istFeiertagBayern(2026, 10, 13), 'Kein Feiertag 13.10.');
// Feiertag am Dienstag (Tag der Deutschen Einheit 3.10.2028 ist Dienstag) → geöffnet
pruefe(berechneStatus(berlin('2028-10-03T12:00:00+02:00')).offen, 'Feiertag am Dienstag → geöffnet');

// --- Curry-Kompass: jede Kombination liefert 3 sinnvolle Treffer ---
const wuensche: Wunsch[] = ['huhn', 'lamm', 'ente', 'fisch', 'vegetarisch', 'vegan'];
const geschmaecker: Geschmack[] = ['cremig', 'nussig', 'fruchtig', 'wuerzig', 'gruen'];
let kombinationen = 0;
for (const w of wuensche)
  for (const g of geschmaecker)
    for (const c of [1, 2, 3, 4]) {
      kombinationen++;
      const e = empfehle(w, g, c);
      const alle = [e.top, ...e.alternativen];
      pruefe(alle.length === 3, `${w}/${g}/${c}: 3 Treffer`);
      pruefe(new Set(alle.map((x) => x.gericht.nr)).size === 3, `${w}/${g}/${c}: keine Doppelten`);
      for (const x of alle) {
        const ok =
          w === 'vegan' ? x.gericht.veganMoeglich : w === 'vegetarisch' ? x.gericht.vegetarisch : x.gericht.protein?.includes(w);
        pruefe(Boolean(ok), `${w}/${g}/${c}: ${x.gericht.name} passt nicht zum Wunsch`);
        pruefe(Math.abs(x.summe - (x.gericht.preis + x.dazu.preis)) < 0.001, `${w}/${g}/${c}: Summe`);
        if (w === 'vegetarisch' || w === 'vegan') pruefe(Boolean(x.dazu.vegetarisch), `${w}: Beilage vegetarisch`);
      }
    }

// --- Preise: Stichproben gegen das Briefing ---
const preis = (nr: number) => speisekarte.flatMap((k) => k.gerichte).find((g) => g.nr === nr)?.preis;
const erwartet: [number, number][] = [
  [1, 4.9], [10, 5.5], [20, 8.9], [22, 13.5], [30, 9.5], [37, 16.9], [45, 19.9], [46, 19.9], [57, 14.9], [66, 15.9],
  [81, 16.5], [88, 16.5], [89, 14.9], [92, 17.9], [96, 17.9], [97, 12.9], [117, 12.9], [118, 13.9], [121, 16.9],
  [122, 19.9], [123, 17.9], [127, 15.9], [128, 16.9], [129, 18.9], [130, 29.9], [131, 32.9], [137, 2.2], [139, 3.5],
  [144, 4.5], [157, 2.5], [158, 2.9], [159, 3.5], [163, 3.0], [177, 4.9], [178, 5.2], [179, 4.9],
];
for (const [nr, p] of erwartet) pruefe(preis(nr) === p, `Preis Nr. ${nr}: ${preis(nr)} ≠ ${p}`);
const nummern = speisekarte.flatMap((k) => k.gerichte).map((g) => g.nr).filter(Boolean);
pruefe(new Set(nummern).size === nummern.length, 'Gerichtsnummern eindeutig');

console.log(`${kombinationen} Kompass-Kombinationen, ${kompassPool.length} Gerichte im Pool, ${nummern.length} nummerierte Gerichte.`);
if (fehler) {
  console.error(`${fehler} Fehler`);
  process.exit(1);
}
console.log('✓ Alle Prüfungen bestanden');

// --- Online-Bestellung: kein eigener Warenkorb, alle Knöpfe führen zum Bestellportal des Restaurants ---
import { bestellung } from '../src/data/bestellung';
pruefe(/^https:\/\/restaurant-bombayfreising\.de\//.test(bestellung.url), 'Bestellung: Link zum Bestellportal');
if (fehler) {
  console.error(`${fehler} Fehler (Bestellung)`);
  process.exit(1);
}
console.log('✓ Bestell-Link geprüft');
