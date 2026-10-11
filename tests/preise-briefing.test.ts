/**
 * Vergleicht jede Gerichtsnummer und jeden Preis aus Briefing.md (Abschnitt 8) mit src/data/speisekarte.ts.
 * Ausführen: npx tsx tests/preise-briefing.test.ts
 */
import { readFileSync } from 'node:fs';
import { speisekarte } from '../src/data/speisekarte';

const md = readFileSync(new URL('../Briefing.md', import.meta.url), 'utf8');
const abschnitt = md.slice(md.indexOf('## 8. Speisekarte'), md.indexOf('## 9.'));
const zeilen = abschnitt.split('\n').filter((z) => /^- \d+ /.test(z));
const daten = new Map(speisekarte.flatMap((k) => k.gerichte).filter((g) => g.nr).map((g) => [g.nr!, g]));
let fehler = 0;
for (const z of zeilen) {
  const nr = Number(z.match(/^- (\d+) /)![1]);
  const preise = [...z.matchAll(/(\d+),(\d{2}) €/g)];
  const preis = Number(`${preise[preise.length - 1][1]}.${preise[preise.length - 1][2]}`);
  const g = daten.get(nr);
  if (!g) { console.error('✗ fehlt:', nr, z); fehler++; continue; }
  if (Math.abs(g.preis - preis) > 0.001) { console.error(`✗ Preis Nr. ${nr}: Daten ${g.preis} ≠ Briefing ${preis}`); fehler++; }
  const scharf = (z.match(/🌶/g) || []).length;
  const erwartet = scharf === 2 ? 3 : scharf === 1 ? 2 : -1;
  if (erwartet > 0 && g.schaerfe !== erwartet) { console.error(`✗ Schärfe Nr. ${nr}`); fehler++; }
  if (scharf === 0 && (g.schaerfe ?? 0) >= 2) { console.error(`✗ Nr. ${nr} als scharf markiert, im Briefing nicht`); fehler++; }
  if (/\(V\+\)/.test(z) !== Boolean(g.veganMoeglich)) { console.error(`✗ Vegan-Kennzeichnung Nr. ${nr}`); fehler++; }
  if (/★ Beliebt/.test(z) !== Boolean(g.beliebt)) { console.error(`✗ Beliebt Nr. ${nr}`); fehler++; }
}
const imBriefing = new Set(zeilen.map((z) => Number(z.match(/^- (\d+) /)![1])));
for (const nr of daten.keys()) if (!imBriefing.has(nr)) { console.error('✗ zusätzlich in Daten:', nr); fehler++; }
console.log(`${zeilen.length} Gerichte aus dem Briefing geprüft (Preis, Schärfe, vegan, beliebt).`);
if (fehler) { console.error(`${fehler} Abweichungen`); process.exit(1); }
console.log('✓ Alle Preise und Kennzeichnungen stimmen mit dem Briefing überein');
