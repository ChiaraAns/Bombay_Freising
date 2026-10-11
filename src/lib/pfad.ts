/**
 * Pfade mit Basis-Pfad. Auf der echten Domain ist die Basis „/“,
 * in der GitHub-Pages-Vorschau „/Bombay_Freising/“ (siehe astro.config.mjs).
 */
export const BASIS = import.meta.env.BASE_URL.replace(/\/$/, '');

export const pfad = (p: string) => `${BASIS}${p.startsWith('/') ? p : `/${p}`}`;
