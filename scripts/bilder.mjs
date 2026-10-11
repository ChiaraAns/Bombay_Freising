/**
 * Bild-Optimierung (läuft automatisch vor `npm run dev` und `npm run build`).
 *
 * Liest alle Fotos aus public/images/ (jpg, jpeg, png, webp, avif) und erzeugt
 * daraus verkleinerte AVIF- und WebP-Varianten in public/images/opt/.
 * Außerdem entsteht src/data/bilder-manifest.json, aus dem die Seite weiß,
 * welche Fotos vorhanden sind. Fehlt ein Foto, zeigt die Seite einen gestalteten Platzhalter.
 */
import { readdir, mkdir, stat, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const QUELLE = path.join(ROOT, 'public/images');
const ZIEL = path.join(QUELLE, 'opt');
const MANIFEST = path.join(ROOT, 'src/data/bilder-manifest.json');
const BREITEN = [320, 480, 640, 960, 1280, 1600];
const ENDUNGEN = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

await mkdir(ZIEL, { recursive: true });
const dateien = (await readdir(QUELLE)).filter((d) => ENDUNGEN.has(path.extname(d).toLowerCase()));
const manifest = {};

const istAktuell = async (ziel, quelleMtime) => existsSync(ziel) && (await stat(ziel)).mtimeMs >= quelleMtime;

for (const datei of dateien) {
  const basis = path.basename(datei, path.extname(datei));
  if (manifest[basis]) {
    console.warn(`⚠ Doppelter Bildname „${basis}“ – nur die erste Datei wird verwendet.`);
    continue;
  }
  const quelle = path.join(QUELLE, datei);
  const quelleMtime = (await stat(quelle)).mtimeMs;
  const bild = sharp(quelle);
  const meta = await bild.metadata();
  const breiten = BREITEN.filter((b) => b < meta.width);
  breiten.push(Math.min(meta.width, 1600));
  const eindeutig = [...new Set(breiten)].sort((a, b) => a - b);

  for (const b of eindeutig) {
    const avif = path.join(ZIEL, `${basis}-${b}.avif`);
    const webp = path.join(ZIEL, `${basis}-${b}.webp`);
    if (!(await istAktuell(avif, quelleMtime))) {
      await sharp(quelle).resize({ width: b }).avif({ quality: 52, effort: 4 }).toFile(avif);
    }
    if (!(await istAktuell(webp, quelleMtime))) {
      await sharp(quelle).resize({ width: b }).webp({ quality: 74 }).toFile(webp);
    }
  }

  const { dominant } = await sharp(quelle).stats();
  manifest[basis] = {
    breite: meta.width,
    hoehe: meta.height,
    breiten: eindeutig,
    farbe: `rgb(${dominant.r} ${dominant.g} ${dominant.b})`,
  };
}

await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + '\n');
console.log(`✓ ${Object.keys(manifest).length} Bilder optimiert → public/images/opt/`);
