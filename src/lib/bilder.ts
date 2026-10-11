/**
 * Bild-System (nur zur Build-Zeit).
 * Liest src/data/bilder-manifest.json (erzeugt von scripts/bilder.mjs).
 * Fehlt ein Foto, liefern die Funktionen `undefined` → die Seite zeigt einen gestalteten Platzhalter.
 */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

export interface BildInfo {
  basis: string;
  breite: number;
  hoehe: number;
  breiten: number[];
  farbe: string;
}

let cache: Record<string, Omit<BildInfo, 'basis'>> | undefined;

function manifest() {
  if (cache) return cache;
  try {
    const pfad = join(process.cwd(), 'src/data/bilder-manifest.json');
    cache = JSON.parse(readFileSync(pfad, 'utf8'));
  } catch {
    // Kein Manifest (Bild-Skript nicht gelaufen) → überall Platzhalter
    cache = {};
  }
  return cache!;
}

export function bild(basis: string): BildInfo | undefined {
  const eintrag = manifest()[basis];
  return eintrag ? { basis, ...eintrag } : undefined;
}

/** Foto eines Gerichts: Datei `gericht-<nr>-<name>.(jpg|webp|…)` in public/images/ */
export function gerichtBild(nr: number | undefined): BildInfo | undefined {
  if (nr == null) return undefined;
  const basis = Object.keys(manifest()).find((k) => k.startsWith(`gericht-${nr}-`));
  return basis ? bild(basis) : undefined;
}

export const srcset = (b: BildInfo, format: 'avif' | 'webp') =>
  b.breiten.map((w) => `/images/opt/${b.basis}-${w}.${format} ${w}w`).join(', ');

export const fallbackSrc = (b: BildInfo) => {
  const w = b.breiten.find((x) => x >= 640) ?? b.breiten[b.breiten.length - 1];
  return `/images/opt/${b.basis}-${w}.webp`;
};
