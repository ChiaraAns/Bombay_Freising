import type { Gericht } from '../data/speisekarte';

/** Farbvariante des gestalteten Platzhalters – bringt Abwechslung, solange Fotos fehlen. */
export function platzhalterVariante(g: Pick<Gericht, 'vegetarisch' | 'protein' | 'nr'> & { kategorie?: string }) {
  if (g.kategorie === 'thalis' || (g.protein?.length ?? 0) > 1) return 'tinte';
  if (g.kategorie === 'brot' || g.kategorie === 'beilagen') return 'safran';
  if (g.vegetarisch) return 'kardamom';
  if (g.protein?.includes('fisch')) return 'kurkuma';
  return 'glut';
}
