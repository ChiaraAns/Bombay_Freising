/**
 * Gemeinsamer Warenkorb im Browser (localStorage) – genutzt von /speisekarte und /bestellen.
 * Ohne Speicher (Privatmodus o. ä.) gilt der Warenkorb nur für die aktuelle Seite.
 */
import { findeArtikel, schluessel, type Position } from './warenkorb';

export const SPEICHER = 'bombay-warenkorb';

export function ladeKorb(): Position[] {
  try {
    const roh = JSON.parse(localStorage.getItem(SPEICHER) || '[]');
    return Array.isArray(roh) ? roh.filter((p: Position) => findeArtikel(p.id) && p.menge > 0) : [];
  } catch {
    return [];
  }
}

/** Ist localStorage nutzbar? (Privatmodus o. ä.: nein – dann gilt der Korb nur im Speicher der Seite) */
export function speicherVerfuegbar() {
  try {
    localStorage.setItem(`${SPEICHER}-test`, '1');
    localStorage.removeItem(`${SPEICHER}-test`);
    return true;
  } catch {
    return false;
  }
}

export function speichereKorb(korb: Position[]) {
  try {
    localStorage.setItem(SPEICHER, JSON.stringify(korb));
  } catch {
    /* Privatmodus o. ä. */
  }
}

/** Menge einer Position ändern (−/+), höchstens 99; gibt den neuen Warenkorb zurück. */
export function aendereKorb(korb: Position[], p: Pick<Position, 'id' | 'variante'>, delta: number): Position[] {
  const k = schluessel(p);
  const neu = korb.map((x) => ({ ...x }));
  const vorhanden = neu.find((x) => schluessel(x) === k);
  if (vorhanden) vorhanden.menge = Math.max(0, Math.min(99, vorhanden.menge + delta));
  else if (delta > 0) neu.push({ id: p.id, variante: p.variante, menge: Math.min(99, delta) });
  return neu.filter((x) => x.menge > 0);
}

/** Menge eines Artikels über alle Sorten. */
export const mengeArtikel = (korb: Position[], id: string) =>
  korb.filter((x) => x.id === id).reduce((n, x) => n + x.menge, 0);
