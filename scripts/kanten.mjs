/**
 * Gerissene Papierkanten erzeugen (public/ornament/riss-<n>-maske.svg und riss-<n>-farbe.svg).
 *
 *   node scripts/kanten.mjs
 *
 * Drei verschiedene Risse, je 1920 × 44 px und nahtlos kachelbar. Papier liegt unten, der Riss oben.
 * Beide Dateien sind farbneutral, die Papierfarbe kommt aus CSS (`background-color: inherit`):
 * - maske: Papierfläche deckend, darüber ein weicher Schatten nach außen (Papier liegt auf der Kohle)
 * - farbe: dunkle Fläche für den Schatten außerhalb, innen am Riss helle Papierfasern
 * Verwendet in src/styles/global.css (.papier).
 */
import { writeFile } from 'node:fs/promises';
import path from 'node:path';

const ZIEL = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../public/ornament');
const B = 1920;
const H = 44;
const MITTE = 25;

// kleiner deterministischer Zufall, damit die Risse bei jedem Lauf gleich bleiben
const zufall = (saat) => () => ((saat = (saat * 1664525 + 1013904223) % 4294967296) / 4294967296);

function riss(saat) {
  const r = zufall(saat);
  // periodische Grundwelle (ganzzahlige Perioden → nahtlos)
  const wellen = [1, 2, 3, 5, 8, 13].map((p, i) => ({ p, a: [3.2, 2.4, 1.6, 1.3, 0.9, 0.6][i] * (0.6 + r() * 0.8), ph: r() * Math.PI * 2 }));
  const welle = (x) => wellen.reduce((s, w) => s + w.a * Math.sin((x / B) * Math.PI * 2 * w.p + w.ph), 0);
  // Ausrisse: ein paar tiefere Bisse ins Papier
  const bisse = Array.from({ length: 6 }, () => ({ x: r() * B, b: 45 + r() * 90, t: 2 + r() * 3 }));
  const biss = (x) =>
    bisse.reduce((s, k) => {
      const d = Math.min(Math.abs(x - k.x), B - Math.abs(x - k.x)) / k.b;
      return s + (d < 1 ? k.t * (1 - d * d) : 0);
    }, 0);
  const punkte = [];
  for (let x = 0; x < B; ) {
    punkte.push([x, MITTE + welle(x) + biss(x) + (r() - 0.5) * 2.6]);
    x += 3 + r() * 6;
  }
  // nahtlos: Endpunkt = Startpunkt
  return punkte;
}

const fmt = (n) => Math.round(n * 10) / 10;
// Kontur mit etwas Überstand links und rechts (aus der Nachbarkachel), damit Unschärfe keine Naht erzeugt
const RAND = 40;
function kontur(punkte, dy = 0) {
  const alle = [
    ...punkte.filter(([x]) => x > B - RAND).map(([x, y]) => [x - B, y]),
    ...punkte,
    ...punkte.filter(([x]) => x < RAND).map(([x, y]) => [x + B, y]),
  ];
  return alle.map(([x, y], i) => `${i ? 'L' : 'M'}${fmt(x)} ${fmt(y + dy)}`).join('');
}
const papier = (punkte, dy = 0) => `${kontur(punkte, dy)}L${B + RAND} ${H + 20}L${-RAND} ${H + 20}Z`;
const aussen = (punkte, dy = 0) => `${kontur(punkte, dy)}L${B + RAND} -20L${-RAND} -20Z`;

const kopf = (titel) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${B} ${H}" width="${B}" height="${H}" preserveAspectRatio="none"><!-- ${titel} -->`;

for (const [n, saat] of [
  [1, 7],
  [2, 1931],
  [3, 40417],
]) {
  const p = riss(saat);
  const maske =
    kopf(`Gerissener Papierrand ${n}, Maske: Papier deckend, Schatten nach außen. Erzeugt mit scripts/kanten.mjs`) +
    `<filter id="s" x="-5%" y="-100%" width="110%" height="300%"><feGaussianBlur stdDeviation="2.8"/></filter>` +
    `<path d="${papier(p, -2.2)}" opacity=".62" filter="url(#s)"/>` +
    `<path d="${papier(p, -0.6)}" opacity=".5"/>` +
    `<path d="${papier(p)}"/></svg>\n`;
  const farbe =
    kopf(`Gerissener Papierrand ${n}, Farbe: Schatten außen, helle Fasern am Riss. Erzeugt mit scripts/kanten.mjs`) +
    `<path d="${aussen(p, -0.4)}" fill="#120f0d"/>` +
    `<g fill="none" stroke="#fff" stroke-linejoin="round">` +
    `<path d="${kontur(p, 1)}" stroke-width="1.7" stroke-opacity=".5"/>` +
    `<path d="${kontur(p, 2.3)}" stroke-width="1.1" stroke-opacity=".28" stroke-dasharray="7 3 2 4 11 2 3 5"/>` +
    `</g></svg>\n`;
  await writeFile(path.join(ZIEL, `riss-${n}-maske.svg`), maske);
  await writeFile(path.join(ZIEL, `riss-${n}-farbe.svg`), farbe);
}
console.log('✓ 3 Papierrisse → public/ornament/riss-*.svg');
