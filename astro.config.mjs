// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// TODO: Endgültige Domain eintragen (wird für Canonical-Links, Sitemap und Open Graph genutzt).
export default defineConfig({
  site: 'https://restaurant-bombay-freising.de',
  // Basis-Pfad: auf der echten Domain „/“; für die GitHub-Pages-Vorschau per BASE_PATH=/Bombay_Freising
  base: process.env.BASE_PATH || '/',
  // CSS direkt ins HTML: kein render-blockierender Request (Lighthouse mobil)
  build: { inlineStylesheets: 'always' },
  vite: { plugins: [tailwindcss()] },
});
