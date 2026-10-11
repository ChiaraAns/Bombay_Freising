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
.foto{position:absolute;inset:0;background:url('/images/opt/gericht-93-jheenga-masala-1280.webp') 70% 45%/cover}
.foto::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(18,15,13,.85),rgba(18,15,13,.1) 60%,transparent)}
.etikett{position:absolute;left:64px;top:50%;transform:translateY(-50%);width:580px;background:#f6efe4;border:1px solid rgba(27,23,20,.55);outline:1px solid rgba(27,23,20,.3);outline-offset:-8px;padding:0 0 34px;box-shadow:0 30px 60px -20px rgba(0,0,0,.7)}
.band{height:16px;background:#be036c;-webkit-mask:url('/ornament/band.svg') repeat-x left center/auto 100%}
h1{font:400 64px/0.98 'Rozha One';color:#1b1714;margin:22px 40px 0;letter-spacing:-.01em}
p{font:600 26px/1.3 'Mukta';color:#5b4636;margin:18px 40px 0}
.logo{display:block;width:250px;height:auto;margin:26px 40px 0}
</style></head><body><div class="foto"></div>
<div class="etikett"><div class="band"></div><img class="logo" src="/logo/bombay-logo.svg" alt=""><h1>Aus Glut und Gewürz.</h1><p>Obere Hauptstraße 67 · 08161 / 49 65 102</p></div></body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.route('http://localhost:4321/og', (r) => r.fulfill({ contentType: 'text/html', body: html }));
await page.goto('http://localhost:4321/og', { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
const png = await page.screenshot();
await browser.close();
await sharp(png).jpeg({ quality: 84, mozjpeg: true }).toFile('public/og.jpg');
console.log('✓ public/og.jpg geschrieben');
