/**
 * Erzeugt public/og.jpg (1200×630) für Vorschauen in WhatsApp, Facebook & Co.
 * Voraussetzung: `npm run build && npm run preview` läuft auf Port 4321 und Playwright ist installiert.
 * Aufruf: node scripts/og-bild.mjs
 */
import { chromium } from 'playwright';
import sharp from 'sharp';

const html = `<!doctype html><html lang="de"><head><meta charset="utf-8"><style>
@font-face{font-family:'Rozha One';src:url('/fonts/rozha-one-latin-400-normal.woff2') format('woff2')}
@font-face{font-family:'Mukta';font-weight:600;src:url('/fonts/mukta-latin-600-normal.woff2') format('woff2')}
html,body{margin:0;width:1200px;height:630px;background:#1b1714;overflow:hidden}
.foto{position:absolute;inset:0 0 0 38%;background:url('/images/opt/gericht-93-jheenga-masala-1280.webp') 50% 45%/cover;
  -webkit-mask:linear-gradient(90deg,transparent 0%,#000 42%)}
.text{position:absolute;left:72px;top:0;bottom:0;width:560px;display:flex;flex-direction:column;justify-content:center}
.logo{width:230px;height:auto}
.band{width:120px;height:12px;margin-top:34px;background:#e04a92;-webkit-mask:url('/ornament/band.svg') repeat-x left center/auto 100%}
h1{font:400 78px/0.98 'Rozha One';color:#f6efe4;margin:18px 0 0;letter-spacing:-.01em}
p{font:600 25px/1.3 'Mukta';color:#cdbfad;margin:22px 0 0}
</style></head><body><div class="foto"></div>
<div class="text"><img class="logo" src="/logo/bombay-logo-negativ.svg" alt=""><span class="band"></span><h1>Aus Glut und Gewürz.</h1><p>Obere Hauptstraße 67 · Freising · 08161 / 49 65 102</p></div></body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.route('http://127.0.0.1:4321/og', (r) => r.fulfill({ contentType: 'text/html', body: html }));
await page.goto('http://127.0.0.1:4321/og', { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
const png = await page.screenshot();
await browser.close();
await sharp(png).jpeg({ quality: 84, mozjpeg: true }).toFile('public/og.jpg');
console.log('✓ public/og.jpg geschrieben');
