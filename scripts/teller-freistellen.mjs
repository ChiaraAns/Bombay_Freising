/**
 * Teller/Schüssel aus einem Foto freistellen (für „Was man bei uns schmeckt“ auf der Startseite).
 *
 *   node scripts/teller-freistellen.mjs <quelle> <ziel.png> [hell] [satt] [minHell] [glatt]
 *
 * Vordergrund = hell (V > hell) oder farbig (S > satt und V > minHell), dann Lücken schließen,
 * Sprenkel entfernen, größte Fläche behalten, Löcher füllen und die Kante weich zeichnen.
 * Umgebungsvariablen:
 *   FORM='[{"k":"e","cx":..,"cy":..,"rx":..,"ry":..,"abY":..},{"k":"r","x0":..,"x1":..,"y0":..,"y1":..}]'
 *        grobe Form der Schüssel in Pixeln des Originals (Ellipsen/Rechtecke). Alles außerhalb fällt weg.
 *   FUELLEN=1  die Form komplett übernehmen (für Schüsseln mit dunklem Rand auf dunklem Grund)
 *   UNTEN=0.3  untere 30 % weich ausblenden (wenn die Schüssel unten vom Bildrand angeschnitten ist)
 * Die verwendeten Werte für die vorhandenen Teller stehen in BILDER.md.
 */
import sharp from 'sharp';
const [,, quelle, ziel, vSchwelle = '0.42', sSchwelle = '0.35', vMin = '0.22', glatt = '2'] = process.argv;
const { data, info } = await sharp(quelle).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const W = info.width, H = info.height;
const fg = new Uint8Array(W * H);
for (let i = 0; i < W * H; i++) {
  const r = data[i * 3] / 255, g = data[i * 3 + 1] / 255, b = data[i * 3 + 2] / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const v = max, s = max ? (max - min) / max : 0;
  fg[i] = v > +vSchwelle || (s > +sSchwelle && v > +vMin) ? 1 : 0;
}
// Formvorgabe (optional, Umgebungsvariable FORM als JSON): nur Pixel innerhalb von Ellipsen/Rechtecken behalten
const form = process.env.FORM ? JSON.parse(process.env.FORM) : null;
const innen = (x, y) => form.some((f) => {
  if (f.abY != null && y < f.abY) return false;
  if (f.k === 'e') return ((x - f.cx) / f.rx) ** 2 + ((y - f.cy) / f.ry) ** 2 <= 1;
  return x >= f.x0 && x <= f.x1 && y >= f.y0 && y <= f.y1;
});
if (form) for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) if (!innen(x, y)) fg[y * W + x] = 0;
const FUELLEN = process.env.FUELLEN === '1';
if (form && FUELLEN) for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) if (innen(x, y)) fg[y * W + x] = 1;
// Morphologie: erst schließen (Lücken), dann öffnen (Sprenkel)
const morph = (src, r, erodieren) => {
  const out = new Uint8Array(W * H);
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    let wert = erodieren ? 1 : 0;
    for (let dy = -r; dy <= r && (erodieren ? wert : !wert); dy++) for (let dx = -r; dx <= r; dx++) {
      if (dx * dx + dy * dy > r * r) continue;
      const xx = Math.min(W - 1, Math.max(0, x + dx)), yy = Math.min(H - 1, Math.max(0, y + dy));
      const p = src[yy * W + xx];
      if (erodieren && !p) { wert = 0; break; }
      if (!erodieren && p) { wert = 1; break; }
    }
    out[y * W + x] = wert;
  }
  return out;
};
const R = Math.max(2, Math.round(W / 220));
let m = morph(morph(fg, R, false), R, true); // schließen
m = morph(morph(m, R, true), R, false);       // öffnen
// größte Komponente
const lab = new Int32Array(W * H); let best = 0, bestN = 0, n = 0;
for (let p = 0; p < W * H; p++) {
  if (!m[p] || lab[p]) continue;
  n++; let cnt = 0; const st = [p]; lab[p] = n;
  while (st.length) { const q = st.pop(); cnt++; const x = q % W;
    for (const r of [q - 1, q + 1, q - W, q + W]) if (r >= 0 && r < W * H && m[r] && !lab[r] && Math.abs((r % W) - x) <= 1) { lab[r] = n; st.push(r); } }
  if (cnt > bestN) { bestN = cnt; best = n; }
}
// Löcher füllen: Hintergrund = vom Rand erreichbar
const aussen = new Uint8Array(W * H); const st = [];
for (let x = 0; x < W; x++) st.push(x, (H - 1) * W + x);
for (let y = 0; y < H; y++) st.push(y * W, y * W + W - 1);
while (st.length) { const q = st.pop(); if (aussen[q] || lab[q] === best) continue; aussen[q] = 1; const x = q % W;
  for (const r of [q - 1, q + 1, q - W, q + W]) if (r >= 0 && r < W * H && Math.abs((r % W) - x) <= 1 && !aussen[r]) st.push(r); }
const alpha = Buffer.alloc(W * H);
for (let p = 0; p < W * H; p++) alpha[p] = aussen[p] ? 0 : 255;
const weich = await sharp(alpha, { raw: { width: W, height: H, channels: 1 } }).blur(+glatt * W / 1000 + 0.6).extractChannel(0).raw().toBuffer();
// Unten weich ausblenden (wenn die Schüssel vom Bildrand angeschnitten ist), Anteil der Höhe in UNTEN
const unten = +(process.env.UNTEN || 0);
if (unten) for (let y = 0; y < H; y++) { const t = (y - H * (1 - unten)) / (H * unten); if (t <= 0) continue;
  const f = Math.max(0, 1 - t) ** 1.6; for (let x = 0; x < W; x++) weich[y * W + x] = Math.round(weich[y * W + x] * f); }
const rgba = Buffer.alloc(W * H * 4);
for (let p = 0; p < W * H; p++) { rgba[p * 4] = data[p * 3]; rgba[p * 4 + 1] = data[p * 3 + 1]; rgba[p * 4 + 2] = data[p * 3 + 2]; rgba[p * 4 + 3] = weich[p]; }
// auf Inhalt zuschneiden (+ Rand)
let x0 = W, y0 = H, x1 = 0, y1 = 0;
for (let p = 0; p < W * H; p++) if (weich[p] > 20) { const x = p % W, y = (p / W) | 0; if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
const pad = Math.round(W * 0.02);
x0 = Math.max(0, x0 - pad); y0 = Math.max(0, y0 - pad); x1 = Math.min(W - 1, x1 + pad); y1 = Math.min(H - 1, y1 + pad);
await sharp(rgba, { raw: { width: W, height: H, channels: 4 } }).extract({ left: x0, top: y0, width: x1 - x0 + 1, height: y1 - y0 + 1 }).png().toFile(ziel);
console.log(ziel, 'Anteil Vordergrund', (bestN / (W * H)).toFixed(2), 'Box', x1 - x0 + 1, y1 - y0 + 1);
