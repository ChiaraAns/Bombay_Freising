# Bombay – Indische Spezialitäten, Freising

Website des indischen Restaurants Bombay in der Freisinger Altstadt.
Statische Seite mit [Astro](https://astro.build) und Tailwind CSS, ohne Backend, ohne Tracking und ohne externe Schriften.

- **Startseite** `/`: Hero mit Live-Öffnungsstatus, vier Gerichte („Vier Gründe, heute indisch zu essen“), Curry-Kompass, Bestellen, Öffnungszeiten & Anfahrt
- **Speisekarte** `/speisekarte`: komplette Karte mit Nummern, Kategorie-Navigation, Filtern, Suche, Glossar und Druckansicht
- **Impressum** `/impressum` und **Datenschutz** `/datenschutz`: Platzhalter, müssen noch ausgefüllt werden

---

## Inhalte ändern (ohne Programmierkenntnisse)

Alle Inhalte stehen in wenigen Dateien im Ordner `src/data/`. Jede Datei ist oben kommentiert.

| Was | Datei | Hinweis |
|---|---|---|
| **Preise, Gerichte, Kategorien** | `src/data/speisekarte.ts` | Preise mit Punkt schreiben: `14.90` für 14,90 €. |
| **Signature-Gerichte (Startseite)** | `src/data/speisekarte.ts`, ganz unten `signatureNummern` | Liste der vier Gerichtsnummern (je mit freigestellter Schale `schale-<nr>-*.webp`) |
| **Öffnungszeiten** | `src/data/oeffnungszeiten.ts` | `[]` bedeutet Ruhetag. Wirkt auf Live-Status, Tabelle, Footer und Google-Daten. |
| **Telefon, Adresse, E-Mail, Links** | `src/data/kontakt.ts` | |
| **Online-Bestellung** | `src/data/bestellung.ts` | Übermittlung (E-Mail oder eigener Empfang), Vorlaufzeit, Lieferung/Abholung, Mindestbestellwert, Liefergebühr |
| **Mittagsbuffet / Catering** | `src/data/angebote.ts` | erscheint erst mit `aktiv: true` |
| **Google-Bewertungen** | `src/data/bewertungen.ts` | Sterne, Anzahl und ausgewählte Bewertungen (wörtlich, nichts erfinden) |
| **Glossar „Was ist eigentlich …?“** | `src/data/glossar.ts` | |
| **Fotos** | `public/images/` | siehe [BILDER.md](BILDER.md) |
| **Logo** | `public/logo/` | siehe [BILDER.md](BILDER.md#logo) |

### Beispiel: Preis ändern

In `src/data/speisekarte.ts` das Gericht suchen (z. B. nach `nr: 57`) und die Zahl ändern:

```ts
{ nr: 57, name: 'Butter Chicken', beschreibung: '…', preis: 15.50, beliebt: true, … },
```

### Beispiel: Gericht hinzufügen

Eine vorhandene Zeile in der passenden Kategorie kopieren und anpassen. Kennzeichnungen:

- `vegetarisch: true` → grünes Blatt
- `veganMoeglich: true` → „auch vegan“
- `schaerfe: 2` → eine Chili (scharf), `schaerfe: 3` → zwei Chilis (sehr scharf); `0` oder `1` = keine Chili
- `beliebt: true` → „Beliebt“-Marke
- `protein` und `geschmack` steuern nur den Curry-Kompass (siehe Kommentar in der Datei)

### Online-Bestellung

Bestellt wird über das bestehende Bestellportal des Restaurants (laut Auftraggeberin ein Vertrag mit der Smart App GmbH): Lieferung und Abholung. Die Website hat keinen eigenen Warenkorb, weil sich ein Warenkorb nicht an das Portal übergeben lässt. Alle „Online bestellen“-Knöpfe (Kopfzeile, Startseite, Curry-Kompass, Speisekarte, Fußzeile, Leiste unten auf dem Handy) führen zur Adresse in `src/data/bestellung.ts`:

```ts
export const bestellung = {
  url: 'https://restaurant-bombayfreising.de/bombay-freising/delivery',
};
```

Ändert sich der Bestell-Link, genügt diese eine Zeile.

### Live-Status

Der Satz unter dem Hero („Jetzt geöffnet – Küche bis 14:00“ / „Öffnet heute um 17:30“ / „Heute Ruhetag“) wird im Browser aus `oeffnungszeiten.ts` berechnet, immer in der Zeitzone Europe/Berlin. Bayerische Feiertage werden erkannt: Ein Feiertag am Ruhetag gilt als geöffnet, siehe `feiertagsZeitenAmRuhetag`.

---

## Entwicklung

Voraussetzung: Node.js 22 (siehe `.nvmrc`).

```bash
npm install
npm run dev       # lokale Vorschau auf http://localhost:4321 (erzeugt vorher die Bildvarianten)
npm run build     # fertige Seite in dist/
npm run preview   # gebaute Seite lokal ansehen
npm test          # prüft Live-Status, alle 120 Curry-Kompass-Kombinationen und alle Preise gegen Briefing.md
```

Beim ersten Build erzeugt `scripts/bilder.mjs` die Bildvarianten. Das dauert etwa eine Minute, danach wird nur noch neu gerechnet, was sich geändert hat.

### Vorschau auf GitHub Pages (Fassungen)

Jede Überarbeitung wird als eigene Fassung veröffentlicht; ältere Fassungen bleiben erreichbar.

```bash
BASE_PATH=/Bombay_Freising/fassung-2 VORSCHAU=1 npx astro build   # Basis-Pfad der Fassung, noindex
```

Den Inhalt von `dist/` in den Ordner `fassung-2/` auf dem Branch `gh-pages` legen (andere Ordner nicht anfassen). Adresse: https://chiaraans.github.io/Bombay_Freising/fassung-2/ – der Quellstand jeder Fassung liegt zusätzlich als Branch `fassung-N`.

### Vorschaubild (og.jpg) neu erzeugen

```bash
npm run build && npm run preview                          # in einem Terminal laufen lassen
npm i --no-save playwright && npx playwright install chromium   # einmalig
node scripts/og-bild.mjs                                  # schreibt public/og.jpg
```

---

## Deploy

Die Seite ist komplett statisch.

- **Netlify:** Repository verbinden – fertig. Einstellungen kommen aus `netlify.toml` (Build `npm run build`, Ordner `dist`).
- **Vercel:** Repository importieren – Astro wird erkannt, Einstellungen in `vercel.json`.

Danach alle bisherigen Domains per 301-Weiterleitung auf die neue Domain zeigen lassen und die endgültige Domain in `astro.config.mjs` (`site`), `src/data/kontakt.ts` (`website`) und `public/robots.txt` eintragen.

---

## Technik & Qualität

- **Stack:** Astro 7 (statisch), Tailwind CSS 4, kleine Inseln in TypeScript für Live-Status, Speisekarten-Filter und Curry-Kompass. Kein Framework-Runtime im Browser.
- **Logo:** Vektor-Nachbau des Original-Logos (Magenta `#BE036C`); auf der Website in Gold mit Glanz (`bombay-logo-gold.svg`), beim ersten Öffnen ein kurzes Logo-Intro, siehe [BILDER.md](BILDER.md#logo).
- **Schriften:** Rozha One (Indian Type Foundry) für Überschriften, Mukta (Ek Type) für Text. Beide liegen selbst gehostet in `public/fonts/` (SIL Open Font License).
- **Bilder:** AVIF + WebP in mehreren Breiten, `srcset`, Lazy Loading unterhalb des Folds, feste Seitenverhältnisse.
- **DSGVO:** keine Cookies, kein Tracking, keine externen Schriften. Google Maps nur per Zwei-Klick-Lösung.
- **SEO:** Title/Description je Seite, Open Graph, `schema.org/Restaurant` (JSON-LD) mit Öffnungszeiten, `sitemap.xml`.
- **Barrierefreiheit:** semantisches HTML, sichtbare Fokus-Stile, alles per Tastatur bedienbar, `prefers-reduced-motion` wird respektiert.
- **Design:** Konzept und Designentscheidungen stehen in `PRODUCT.md` und `DESIGN.md`.
