import { oeffnungszeiten, wochentagNamen } from '../data/oeffnungszeiten';

const kurz: Record<number, string> = { 1: 'Mo', 2: 'Di', 3: 'Mi', 4: 'Do', 5: 'Fr', 6: 'Sa', 7: 'So' };

export const fensterText = (tag: number) => {
  const f = oeffnungszeiten[tag] ?? [];
  return f.length ? f.map((x) => `${x.von}–${x.bis}`).join(' · ') : 'Ruhetag';
};

/** Fasst gleiche, aufeinanderfolgende Tage zusammen: „Mi–So 11:30–14:00 · 17:30–22:00“ */
export function zeitenKompakt() {
  const gruppen: { von: number; bis: number; text: string }[] = [];
  for (let t = 1; t <= 7; t++) {
    const text = fensterText(t);
    const letzte = gruppen[gruppen.length - 1];
    if (letzte && letzte.text === text && letzte.bis === t - 1) letzte.bis = t;
    else gruppen.push({ von: t, bis: t, text });
  }
  return gruppen.map((g) => ({
    tage: g.von === g.bis ? kurz[g.von] : `${kurz[g.von]}–${kurz[g.bis]}`,
    tageLang: g.von === g.bis ? wochentagNamen[g.von] : `${wochentagNamen[g.von]} bis ${wochentagNamen[g.bis]}`,
    text: g.text,
  }));
}
