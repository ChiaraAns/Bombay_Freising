# Bilder für die Bombay-Website

Alle Fotos liegen in **`public/images/`**. Die Website erkennt sie am **Dateinamen**. Ein neues Foto wird so eingesetzt:

1. Foto mit dem passenden Dateinamen (siehe Tabellen unten) in `public/images/` legen. Erlaubt sind `.jpg`, `.jpeg`, `.png`, `.webp` und `.avif`. Die Endung ist egal, nur der Name davor zählt.
2. `npm run build` ausführen (läuft beim Deploy auf Netlify/Vercel automatisch).
   Das Skript `scripts/bilder.mjs` erzeugt daraus verkleinerte AVIF- und WebP-Varianten in `public/images/opt/`.
3. Fertig. Solange ein Foto fehlt, zeigt die Seite an dieser Stelle einen gestalteten Platzhalter (Farbverlauf, Blockdruck-Muster, Gerichtname).

**Regel für Gerichtsfotos:** `gericht-<Nummer>-<name>.jpg`, z. B. `gericht-104-palak-paneer.jpg`.
Jedes Gericht mit Foto erscheint dann automatisch mit Bild auf der Startseite (falls Signature-Gericht) und in den Ergebnissen des Curry-Kompasses.

**Allgemein:** Bitte Originale in voller Auflösung liefern (keine WhatsApp- oder Instagram-Kopien), hell genug belichtet, ohne Text oder Logos im Bild. Natürliches Licht, warme Töne und ein dunkler Holztisch passen am besten zur Seite.

---

## Bereits vorhanden (eigene Fotos des Restaurants)

Die ursprünglichen Dateien `IMG_9581` bis `IMG_9591` wurden nach Motiv umbenannt. Die Zuordnung zu den Gerichtsnummern ist anhand des Bildes geschätzt. **Bitte bestätigen** (TODO), welches Gericht jeweils zu sehen ist; falls nötig, nur die Datei umbenennen.

| Datei | Ursprung | Größe | Motiv | Wo verwendet |
|---|---|---|---|---|
| `gericht-93-jheenga-masala.webp` | IMG_9591 | 1485 × 1485 | Riesengarnelen in Masala-Soße, Karahi von oben, Reis und Chilis | **Hero** (bis `hero.*` existiert), OG-Bild, Kompass |
| `gericht-57-butter-chicken.webp` | IMG_9581 | 1485 × 1485 | Butter Chicken in Karahi, Sahnehaube, dunkler Holztisch | Signature-Karte Nr. 57, Kompass |
| `gericht-39-chicken-tikka.webp` | IMG_9582 | 1485 × 1485 | Chicken Tikka am Spieß, Minz-Joghurt, Zwiebeln, Limette (heller Hintergrund) | Kompass |
| `gericht-116-paneer-butter-masala.webp` | IMG_9583 | 1485 × 1485 | Paneer-Würfel in orangefarbener Soße, Karahi von oben | Kompass; freigestellt als großer Teller (siehe unten) |
| `gericht-89-fisch-curry.webp` | IMG_9584 | **400 × 400** | Fischfilet in Curry mit Gemüse, blaue Schale | Kompass; freigestellt als kleiner Teller |
| `gericht-66-lamm-curry.webp` | IMG_9586 | **400 × 400** | Lammcurry in Kupferschale mit Koriander | Kompass; freigestellt als mittlerer Teller |
| `gericht-69-bhuna-gosht.webp` | IMG_9587 | **400 × 400** | Gebratenes Fleisch in kräftiger Soße, schwarzer Teller | Kompass |
| `gericht-63-chicken-ananas.webp` | IMG_9588 | **400 × 400** | Hühnchen mit Ananas, Tontopf, Naan | Kompass |

**TODO:** Die vier Fotos mit 400 × 400 Pixeln sind zu klein für große Darstellungen. Bitte in mindestens 1200 × 1200 nachliefern.

---

## Gesucht: Stimmungsbilder

| Datei | Seitenverhältnis | Mindestgröße | Motiv |
|---|---|---|---|
| `hero.jpg` | 16:10 quer (wird mobil auf 16:11 zugeschnitten) | 2400 × 1500 | Der Tandoor in Aktion: Glut im Lehmofen, Naan an der Ofenwand oder Spieße über der Kohle. Dunkel, warm, Funken oder Rauch willkommen. Wichtiges Motiv rechts der Bildmitte, links unten liegt das Text-Etikett. |
| `tandoor.jpg` | 4:5 hoch | 1200 × 1500 | Der Holzkohle-Lehmofen aus Indien: Öffnung von oben oder schräg, glühende Kohle, Hände des Kochs mit Spieß oder Naan. |
| `ambiente-1.jpg` | 16:9 quer | 1600 × 900 | Gastraum am Abend: gedeckte Tische, warmes Licht, Blick in den Raum. Ohne erkennbare Gäste (Datenschutz). Liegt hinter dem Kartenhinweis im Abschnitt „Besuchen Sie uns“. |

## Teller („Was man bei uns schmeckt“)

Dort stehen die Schüsseln **freigestellt** (transparenter Hintergrund) auf dem dunklen Grund und werfen einen Schatten. Dafür gibt es zu jedem Teller eine eigene Datei `teller-<Nummer>-<name>.webp` neben dem Originalfoto. Ohne freigestellte Datei bleibt der Platz leer.

| Datei | Aus | Werte für `scripts/teller-freistellen.mjs` |
|---|---|---|
| `teller-116-paneer-butter-masala.webp` | `gericht-116-…` (IMG_9583) | `FORM='[{"k":"e","cx":740,"cy":771,"rx":528,"ry":528},{"k":"r","x0":92,"x1":265,"y0":535,"y1":915},{"k":"r","x0":1215,"x1":1380,"y0":625,"y1":1015}]'`, Schwellen `0.45 0.45 0.25 2` |
| `teller-66-lamm-curry.webp` | `gericht-66-…` (IMG_9586) | `FORM='[{"k":"e","cx":209,"cy":188,"rx":189,"ry":139},{"k":"e","cx":209,"cy":226,"rx":189,"ry":232,"abY":188}]' FUELLEN=1 UNTEN=0.3`, Schwellen `0.40 0.40 0.22 1.5` |
| `teller-89-fisch-curry.webp` | `gericht-89-…` (IMG_9584) | `FORM='[{"k":"e","cx":201,"cy":200,"rx":156.5,"ry":156.5}]' FUELLEN=1`, Schwellen `0.62 0.45 0.25 1.5` |

Neuer Teller: `FORM='…' node scripts/teller-freistellen.mjs public/images/gericht-…webp teller.png <Schwellen>`, Ergebnis auf dunklem Grund prüfen und als `public/images/teller-<nr>-<name>.webp` speichern (WebP mit Alpha, Qualität 90). Am besten eignen sich **Fotos von oben auf dunklem Holz oder Stein**, das Gericht mittig und ganz im Bild. Am einfachsten ist ein Freisteller aus einem Bildprogramm (z. B. „Hintergrund entfernen“ in Photoshop oder Pixelmator), als PNG oder WebP mit transparentem Hintergrund.

## Signature-Gerichte (Startseite)

Für 58, 104, 128, 96 und 159 hat die Auftraggeberin am 12.10.2026 Bilder geschickt (je 1254 × 1254, Garlic Naan 1390 × 1132). Sie liegen als WebP in `public/images/`; die Herkunft steht jeweils im Sidecar `*.webp.json`.

**TODO:** Quelle und Nutzungsrechte dieser Bilder vor dem Livegang klären, oder sie durch eigene Fotos des Restaurants ersetzen (gleicher Dateiname, beliebige Endung). Das Thali-Bild zeigt eine allgemeine Thali-Platte (u. a. Linsen und eine Süßspeise), nicht exakt die Zusammenstellung des Bombay Thali (Lamm, Huhn, Ente, Raita, Salat, Pappad, Naan, Reis).

| Datei | Motiv | Wo verwendet |
|---|---|---|
| `gericht-58-chicken-tikka-masala.webp` | Gegrillte Hühnerstücke in orangefarbener Soße mit Sahne, Karahi mit Messinggriffen, Naan und Reis | Signature-Karte Nr. 58, Kompass |
| `gericht-104-palak-paneer.webp` | Paneer-Würfel in Spinat mit Sahne und Ingwerstreifen, dunkle Schale | Signature-Karte Nr. 104, Kompass |
| `gericht-128-bombay-thali.webp` | Thali-Platte mit Schälchen, Reis, Naan, Pappad und gegrilltem Hähnchen | Signature-Karte Nr. 128, Kompass |
| `gericht-96-jheenga-mango.webp` | Riesengarnelen mit Mango und Paprika in goldgelber Soße, Karahi | Signature-Karte Nr. 96, Kompass |
| `gericht-159-garlic-naan.webp` | Garlic Naan mit Knoblauchbutter im Korb | Signature-Karte Nr. 159 |

Eigene Fotos ersetzen sie am besten im selben Look: Seitenverhältnis 4:3 oder 1:1, mindestens 1600 px breit, dunkler Holztisch, Kupfer- oder Karahi-Geschirr, Licht von der Seite.

## Optional: weitere Gerichte

Jedes Foto nach der Regel `gericht-<Nummer>-<name>.jpg` (4:3 oder 1:1, mindestens 1200 px breit) erscheint automatisch im Curry-Kompass. Besonders wertvoll sind die beliebten Gerichte: 51 Chicken Curry, 103 Shahi Paneer, 105 Shahi Baingan, 107 Chana Masala, 110 Bhindi Masala.

## Logo

Vorlage war ein Screenshot (`assets/logo/logo-original-screenshot.jpeg`, ursprünglich `IMG_9594.jpeg`, 1461 × 635, JPEG, weich und mit Kompressionsspuren). Für ein scharfes Logo in jeder Größe reichte die Qualität nicht. Deshalb gibt es zwei Fassungen:

| Datei | Was |
|---|---|
| `public/logo/bombay-logo.svg` | **Hauptlogo.** Vektor-Nachbau: Kuppel und Bogen nachgezeichnet, Schriftzug aus Rozha One Buchstabe für Buchstabe an die Original-Positionen gesetzt (Flächenübereinstimmung mit dem Original ca. 81–86 %). Farbe Magenta `#BE036C` (aus dem Original gemessen). |
| `public/logo/bombay-logo-gold.svg` | **Website-Fassung (seit Fassung 3):** dieselbe Form in Gold mit Glanzverlauf (Glut hell → Safran → Lichtkante). Header, Footer, Vorschaubild |
| `public/logo/bombay-logo-gold-kuppel.svg`, `-schriftzug.svg` | Kuppel und Schriftzug der Goldfassung einzeln, für das Logo-Intro (Vorhang) auf der Startseite |
| `public/logo/bombay-logo-negativ.svg` | Fassung für dunklen Grund (bis Fassung 2): Schriftzug Creme, Kuppel und Bogen in hellem Rani `#E04A92` |
| `public/logo/bombay-logo-creme.svg` | Dieselbe Form komplett in Creme `#F6EFE4` |
| `public/logo/bombay-logo.png` | Hauptlogo als PNG (1600 px, transparent) für Drucksachen und Plattformen |
| `public/logo/bombay-logo-original-freigestellt.png` | Der Original-Screenshot, sauber zugeschnitten, Hintergrund transparent, Farbe vereinheitlicht. Kanten bleiben so weich wie die Vorlage. |

**Regel:** Das Logo steht immer frei, ohne Kasten. Auf der Website die Goldfassung; das Magenta-Original für hellen Druck und Plattformen (Kontrast auf Creme 5,3 : 1).

**TODO:** Falls es das Logo als Originaldatei gibt (AI, EPS, PDF oder SVG von der Druckerei bzw. vom Gestalter), bitte nachliefern. Dann ersetzen wir den Nachbau 1 : 1.

## Weitere Grafiken

| Datei | Zweck |
|---|---|
| `public/og.jpg` (1200 × 630) | Vorschaubild beim Teilen (WhatsApp, Facebook) mit Logo. Neu erzeugen mit `node scripts/og-bild.mjs`, siehe README. |
| `public/favicon.svg`, `public/apple-touch-icon.png` | Browser- und Homescreen-Symbol: das B aus dem Logo in Gold auf Tinte |
| `public/ornament/band.svg`, `kachel.svg` (+ `kachel-glut.svg`) | Eigenes Blockdruck-Ornament (Bordüre und Rapport), eingefärbter Rapport für die Bestell-Tafel |
