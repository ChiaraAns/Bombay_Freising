// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// TODO: Endgültige Domain eintragen (wird für Canonical-Links, Sitemap und Open Graph genutzt).
export default defineConfig({
  site: 'https://restaurant-bombay-freising.de',
  // CSS direkt ins HTML: kein render-blockierender Request (Lighthouse mobil)
  build: { inlineStylesheets: 'always' },
  vite: { plugins: [tailwindcss()] },
});
