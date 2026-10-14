---
name: Bombay – Indische Spezialitäten, Freising
description: Glut bei Nacht, Fassung 3 in Gold – eine durchgehend dunkle, warm gekörnte Website, aus der die Gerichte auftauchen; Glutkanten statt Kästen, Pillen statt Ecken; Logo, Bordüren und Ornamente in Gold-Glanz; auch Speisekarte und Bestellung dunkel.
colors:
  tinte: "#1b1714"
  russ: "#120f0d"
  kohle: "#26201b"
  kohle-hell: "#352c25"
  creme: "#f6efe4"
  creme-fest: "#f6efe4"
  knopf-grund: "#150f0c"
  knopf-glut: "#2a160e"
  glanzlicht: "#fff6de"
  papier: "#ede2cf"
  papier-dunkel: "#e2d4bc"
  rani: "#be036c"
  rani-tief: "#8f0251"
  rani-hell: "#e04a92"
  glut: "#b63a1e"
  glut-tief: "#8f2b14"
  safran: "#e8a33d"
  kurkuma: "#d98e04"
  kardamom: "#5e6b48"
  kardamom-hell: "#a9b48d"
  braun: "#5b4636"
  braun-hell: "#7a6250"
  rauch: "#cdbfad"
  rauch-dunkel: "#a8998a"
  creme-hell: "#fbf6ee"
  glut-hell: "#f07a52"
  offen: "#6f9a3e"
  holz: "#d7b98c"
  holz-kopf: "#6a5446"
  hinweis-grund: "#fff5d6"
  hinweis-text: "#5a3b00"
  druck-schwarz: "#000"
  druck-weiss: "#fff"
typography:
  display:
    fontFamily: "Rozha One, Rozha Ersatz, Georgia, serif"
    fontSize: "clamp(2.65rem, 1.55rem + 4.6vw, 5.6rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.015em"
  display-hero:
    fontFamily: "Rozha One, Rozha Ersatz, Georgia, serif"
    fontSize: "clamp(2.7rem, 1.35rem + 5vw, 5.6rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Rozha One, Rozha Ersatz, Georgia, serif"
    fontSize: "clamp(2.15rem, 1.45rem + 2.9vw, 3.9rem)"
    fontWeight: 400
    lineHeight: 1.02
  title:
    fontFamily: "Rozha One, Rozha Ersatz, Georgia, serif"
    fontSize: "clamp(1.55rem, 1.25rem + 1.1vw, 2.15rem)"
    fontWeight: 400
    lineHeight: 1.08
  body:
    fontFamily: "Mukta, Mukta Ersatz, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  zwischen:
    fontFamily: "Rozha One, Rozha Ersatz, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.1
  gericht:
    fontFamily: "Rozha One, Rozha Ersatz, Georgia, serif"
    fontSize: "1.32rem"
    fontWeight: 400
    lineHeight: 1.15
  lead:
    fontFamily: "Mukta, Mukta Ersatz, system-ui, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 400
    lineHeight: 1.6
  fein:
    fontFamily: "Mukta, Mukta Ersatz, system-ui, sans-serif"
    fontSize: "0.97rem"
    fontWeight: 400
    lineHeight: 1.5
  klein:
    fontFamily: "Mukta, Mukta Ersatz, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
  mini:
    fontFamily: "Mukta, Mukta Ersatz, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.04em"
  label:
    fontFamily: "Mukta, Mukta Ersatz, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.16em"
  knopf:
    fontFamily: "Mukta, Mukta Ersatz, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 600
    letterSpacing: "0.14em"
  fakt:
    fontFamily: "Mukta, Mukta Ersatz, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.5vw, 1.5rem)"
    fontWeight: 500
    lineHeight: 1.15
  wertung:
    fontFamily: "Rozha One, Rozha Ersatz, Georgia, serif"
    fontSize: "clamp(3.4rem, 2.6rem + 3vw, 5rem)"
    fontWeight: 400
    lineHeight: 0.9
  zitat:
    fontFamily: "Rozha One, Rozha Ersatz, Georgia, serif"
    fontSize: "clamp(1.45rem, 1.15rem + 1.1vw, 2.05rem)"
    fontWeight: 400
    lineHeight: 1.25
  anfuehrung:
    fontFamily: "Rozha One, Rozha Ersatz, Georgia, serif"
    fontSize: "5rem"
    fontWeight: 400
    lineHeight: 1
  preis:
    fontFamily: "Mukta, Mukta Ersatz, system-ui, sans-serif"
    fontWeight: 700
    fontFeature: "'tnum' 1, 'lnum' 1"
rounded:
  bild: "9px"
  feld: "10px"
  karte: "14px"
  tafel: "1.75rem"
  blatt: "1.5rem"
  blatt-desktop: "2.5rem"
  pille: "999px"
spacing:
  rand-mobil: "1rem"
  rand-tablet: "1.75rem"
  rand-desktop: "2.5rem"
  sektion-mobil: "5rem"
  sektion-desktop: "7rem"
  inhalt-max: "78rem"
components:
  button-primary:
    backgroundColor: "{colors.russ}"
    textColor: "{colors.creme}"
    typography: "{typography.knopf}"
    rounded: "{rounded.pille}"
    padding: "0.6rem 1.6rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.kohle}"
  button-outline:
    textColor: "{colors.creme}"
    typography: "{typography.knopf}"
    rounded: "{rounded.pille}"
    padding: "0.6rem 1.6rem"
    height: "3.25rem"
  button-outline-hover:
    textColor: "{colors.creme}"
  button-primary-papier:
    backgroundColor: "{colors.glut}"
    textColor: "{colors.creme}"
    rounded: "{rounded.pille}"
  etikett:
    backgroundColor: "{colors.kohle}"
    textColor: "{colors.creme}"
    rounded: "{rounded.karte}"
  filter-chip:
    backgroundColor: "{colors.creme}"
    textColor: "{colors.tinte}"
    rounded: "{rounded.pille}"
    height: "2.75rem"
  filter-chip-aktiv:
    backgroundColor: "{colors.tinte}"
    textColor: "{colors.creme}"
  serien-nummer:
    backgroundColor: "{colors.tinte}"
    textColor: "{colors.creme}"
    typography: "{typography.title}"
  beliebt-marke:
    backgroundColor: "{colors.safran}"
    textColor: "{colors.russ}"
    rounded: "{rounded.pille}"
---

# Design System: Bombay – Indische Spezialitäten, Freising

## Overview

**Creative North Star: „Glut bei Nacht“**

Die Startseite ist ein einziger dunkler Raum, wie ein Restaurant am Abend: warm-schwarzer, fein gekörnter Grund (Tinte, Kohle, Ruß), aus dem die Gerichte auftauchen. Abschnitte wechseln nie die Bühne; sie heben sich nur durch leise Tonstufen, die nach oben und unten weich in die Tinte zurücklaufen, und durch auslaufende Haarlinien (`.naht`) voneinander ab. Licht kommt von der Glut: Primärknöpfe tragen eine leuchtende Kante von Glutrot zu Safran, unter Überschriften liegt ein kurzer Goldfaden in Safran, hinter den Tellern und in der Bestell-Tafel glimmt ein warmer Schein. Alles Bedienbare ist rund (Pillen), Karten haben weiche Ecken.

Beim ersten Öffnen hebt sich ein kurzer Vorhang: das Bombay-Logo in Gold öffnet sich aus der Mitte, ein Glanzlicht läuft darüber. Logo, Bordüren und Ornamente glänzen in Gold-Orange statt Pink. Im Hero steht die Headline frei auf dem Foto, das links, oben und unten in die Kohle ausläuft; darunter die drei Fakten groß wie auf einem Schild: Zustand („Jetzt geöffnet“), Reservierungsnummer, Adresse – jeweils kleine Safran-Beschriftung, großer Wert. Die Gerichte stehen als dunkle Etiketten mit feiner Safran-Kante und goldener Blockdruck-Bordüre (die Herkunft aus den Sivakasi-Streichholzetiketten bleibt in der Bordüre und der Seriennummer).

Auch die Unterseiten sind dunkel: Speisekarte und Rechtstexte liegen als dunkle, rundum gerundete Tafel auf dem Grund. Bestellt wird im Bestellportal des Restaurants; jeder Bestellknopf führt dorthin. Das Logo steht frei, ohne Kasten, in Gold.

Bewegung ist ruhig: Überschriften steigen Wort für Wort aus einer Linie auf, Absätze gleiten weich nach oben (nie Überschrift und umgebender Block doppelt), Teller bewegen sich beim Scrollen minimal in die Tiefe, das Hero-Foto „atmet“ einmal beim Laden. Im Hero sind Knöpfe und Fakten nach spätestens 0,35 s unterwegs und nach knapp einer Sekunde vollständig da (0,6 s).

Abgelehnt laut Auftraggeber: Taj-Mahal-Clipart, Kitsch, Gold-auf-Rot, Template- und Lieferdienst-Optik, Stock-Icon-Sammlungen; ausdrücklich auch harte Bühnenwechsel zwischen Abschnitten („wie PowerPoint“) und eckige Knöpfe.

Fassung 1 („Glut und Papier“ mit gerissenen Papierbögen) ist auf dem Branch `fassung-1` und unter `/fassung-1/` der Vorschau gesichert.

**Key Characteristics:**
- Ein durchgehender dunkler Grund auf der Startseite; Tonstufen (z. B. `#201a16` für die Signature-Gerichte) laufen per Verlauf weich ein und aus, „Besuchen Sie uns“ läuft in den Ruß des Footers aus; alle Abschnitte tragen dieselbe Körnung (`koernung` + eigener Grund, sonst entsteht eine hellere Fläche)
- Fotos ohne harte Kanten: Hero mit Masken-Verlauf und weichem Schatten hinter dem Text, Teller als echte Freisteller mit Alpha-Kanal (`teller-<nr>-*.webp`, `scripts/teller-freistellen.mjs`) und Kontaktschatten
- Primärknopf = dunkle Pille mit Glutkante (Verlauf Glut hell → Safran) und engem Schein; Sekundär = Haarlinien-Pille; Beschriftung gesperrte Versalien
- Goldfaden (`.goldfaden`) unter jeder Abschnittsüberschrift der Startseite
- Bestellen als Tafel (`Bestellen.astro`): gerundete dunkle Fläche, Glutschein unten rechts, großer Blockdruck-Rapport (`kachel-glut.svg`) läuft aus
- Gericht-Etiketten, Öffnungszeiten und Kompass-Hülle als dunkle Karten über `.nacht` (siehe Components)
- Eigene Blockdruck-Bordüre (`public/ornament/band.svg`) als Maske, Farbe frei wählbar
- Rozha One für alles mit Stimme, Mukta für alles zum Lesen; Preise tabellarisch
- Gerichtsnummern als gerahmte Seriennummer, weil Gäste per Nummer bestellen
- Mobil eine feste dunkle Leiste unten: Anrufen · Bestellen (Safran) · Speisekarte

## Colors

Eine warme Gewürzpalette auf Kohle, verankert vom Gold-Glanz des Logos und dem Glutrot des Ofens.

### Primary
- **Gold-Glanz** (`--glanz`: Glut hell → Safran → Lichtkante #fbe6b0 → Safran → Glut hell): seit Fassung 3 die Farbe des Logos auf der Website (`bombay-logo-gold.svg`), aller Blockdruck-Bordüren, des Ornaments über der Hero-Headline und der Fußlinie. Wunsch der Auftraggeberin: Gold statt Pink, wie die Glutkanten der Knöpfe.
- **Rani-Pink** (#be036c) / **Rani hell** (#e04a92): die Original-Logofarbe; auf der Website nicht mehr sichtbar, bleibt für Drucksachen, Plattformen und das Original-Logo (`bombay-logo.svg`).
- **Glutrot** (#b63a1e) / **Glut hell** (#f07a52): Handlungsfarbe. Auf Dunkel als leuchtende Kante der Primärknöpfe (Glut hell → Safran) und als Preis auf dunklen Etiketten (Glut hell, 6 : 1); auf Papier als gefüllter Primärknopf und Preis (Glutrot). Chili-Kennzeichnung. Hover auf Papier: **Glut tief** (#8f2b14).

### Secondary
- **Safran** (#e8a33d): das „Gold“ der Seite, nur auf Dunkel – Goldfaden, Fakten-Beschriftungen, Reservieren-Pille, Innenlinie der Etiketten, gewählte Kompass-Option, Fokusring, „Beliebt“-Marke, Platzhalter-Verläufe. Auf Creme nie als Text (Kontrast nur ca. 2 : 1).
- **Kurkuma** (#d98e04): Zwischenstufe der Hitze-Skala, Platzhalter-Variante Fisch, „öffnet bald“-Punkt.

### Tertiary
- **Kardamom** (#5e6b48): ausschließlich vegetarisch/vegan (Blatt-Symbole, Feiertagshinweis). **Kardamom hell** (#a9b48d) für dieselbe Rolle auf Dunkel.

### Neutral
- **Tinte** (#1b1714): Grund der dunklen Flächen, Text auf Creme, Seriennummern.
- **Ruß** (#120f0d) und **Kohle** (#26201b / #352c25): Footer, Kompass-Schublade, Scrollbar.
- **Creme** (#f6efe4): Text auf Dunkel, Etiketten auf Papier. **Papier** (#ede2cf) und **Papier dunkel** (#e2d4bc): nur noch im Druck der Speisekarte und für Papier-Bausteine außerhalb von `.nacht`/`.blatt`. **Creme fest** (#f6efe4): wie Creme, wird aber in `.nacht` nicht umgebunden.
- **Braun** (#5b4636) / **Braun hell** (#7a6250): Sekundärtext auf Creme und Papier.
- **Rauch** (#cdbfad) / **Rauch dunkel** (#a8998a): Sekundärtext auf Dunkel; Rauch auch für ausgeschaltete Chilis im Kompass.
- **Funktionsfarben:** Creme hell (#fbf6ee, Kompass-Optionen), Glut hell (#f07a52, Chili auf dunklem Chip), Offen-Grün (#6f9a3e, nur der Live-Status-Punkt), Holz / Holzkopf (#d7b98c / #6a5446, Streichhölzer der Kompass-Fortschrittsanzeige), Hinweis-Gelb (#fff5d6 / #5a3b00, nur TODO-Kästen der Rechtstexte), Druck-Schwarz/-Weiß (nur Print-Stylesheet).

### Named Rules
**Die Logo-steht-frei-Regel.** Das Logo bekommt nie einen Kasten. Auf der (dunklen) Website immer die Goldfassung (`bombay-logo-gold.svg`), auf hellem Druck das Original in Magenta.

**Die Gold-statt-Pink-Regel.** Ornamente, Bordüren und Logo glänzen in Gold-Orange (`--glanz`); kein Pink auf der Website. Glanz bleibt Ornament: keine Verlaufsschrift in Überschriften oder Fließtext.

**Die Feuer-ist-Handlung-Regel.** Glut bedeutet „tu etwas“ (anrufen, bestellen, Preis) oder „scharf“. Auf Dunkel leuchtet sie als Kante der Primärknöpfe, nicht als Fläche; als Dekoration nur der Schein hinter Tellern und Bestell-Tafel.

**Die Keine-Bühnenwechsel-Regel.** Abschnitte der Startseite wechseln nie hart die Hintergrundfarbe. Tonstufen laufen per Verlauf ein und aus; Trennung entsteht durch Abstand, Haarlinien und den Goldfaden.

**Die Rund-ist-bedienbar-Regel.** Alles Klickbare ist eine Pille (999px); Karten 14px, Bilder in Karten 9px, große Tafeln 1.75rem.

**Die Grün-heißt-Gemüse-Regel.** Kardamom-Grün kennzeichnet nur vegetarisch/vegan und nichts sonst.

## Typography

**Display Font:** Rozha One (Indian Type Foundry), Ersatz: metrisch angepasstes Georgia
**Body Font:** Mukta (Ek Type), Ersatz: metrisch angepasstes Arial/Roboto

**Character:** Rozha One ist eine schwere, kontrastreiche Didone mit Kugel-Endungen aus einer indischen Schriftgießerei – nah am Schriftzug des Logos, laut wie ein Etikettendruck. Mukta ist eine ruhige, offene Grotesk derselben Herkunft mit echten Tabellenziffern.

### Hierarchy
- **Display** (400, clamp 2.65–5.6rem, 0.98): Seitentitel (z. B. „Speisekarte“). **Display-Hero** (clamp 2.7–5.6rem): die Headline im Hero, Creme direkt auf dem dunklen Foto („Aus Glut und Gewürz.“).
- **Headline** (400, clamp 2.15–3.9rem, 1.02): Abschnittsüberschriften, Kategorien der Speisekarte.
- **Title** (400, clamp 1.55–2.15rem, 1.08): Gerichtnamen auf Etiketten, USP-Titel, Kompass-Fragen.
- **Body** (Mukta 400, 1.0625rem, 1.6): Fließtext, max. ca. 36rem Breite.
- **Zwischen** (Rozha 400, 1.5rem) und **Gericht** (Rozha 400, 1.32rem): kleine Überschriften im Fuß, Gerichtnamen in Listen und Kompass-Optionen.
- **Lead** (Mukta, 1.15rem), **Fein** (0.97rem), **Klein** (0.875rem), **Mini** (0.75rem): Einleitungen, Sekundärtext, Bildunterschriften, Marken. Als Tailwind-Klassen `text-lead`, `text-fein`, `text-klein`, `text-mini`; keine freien Pixel- oder rem-Werte.
- **Label** (Mukta 600, 0.75rem, 0.16em, Versalien): Navigation, Beschriftung der Hero-Fakten („Heute“, „Tisch reservieren“), Zusatz neben dem Logo. Nie als Dachzeile über einer Überschrift.
- **Knopf** (Mukta 600, 0.75–0.8rem, 0.14em, Versalien): alle `.knopf`-Pillen; eine zweite Zeile (Nummer, „Liefern · Abholen“) normal gesetzt.
- **Fakt** (Mukta 500, clamp 1.25–1.5rem): die großen Werte der Hero-Fakten (Zustand, Nummer, Straße).
- **Preis** (Mukta 700, `tnum`): rechtsbündig, in Glutrot; auf Etiketten in Rozha One.

### Named Rules
**Die Keine-Dachzeile-Regel.** Überschriften tragen sich selbst; keine Kicker oder Eyebrows darüber.

## Layout

Ein Rahmen von max. 78rem mit 1rem / 1.75rem / 2.5rem Seitenrand (mobil / ab 40rem / ab 64rem). Ab 64rem ein 12-Spalten-Raster mit asymmetrischen Aufteilungen (5/6, 4/8, 7/5) statt gleich breiter Spalten. Sektionen 5rem (mobil) bzw. 7rem (desktop) vertikal. Mobile first: der Hero stapelt Foto (16:11, läuft unten aus) über Text, Knöpfen und Fakten (Text überlappt die Fotokante um 5.5rem; Zustand und Straße stehen bei 375×740 über der Leiste), die Signature-Etiketten werden mobil zur horizontal scrollbaren Reihe (84 % Breite mit Anschnitt), Filter-Chips und Kategorien ebenso. Die Speisekarte setzt ab 64rem zwei Spalten. Die Kategorie-Navigation ist sticky.

## Elevation & Depth

Tiefe entsteht durch Licht, nicht durch Kästen: Fotos laufen über Masken-Verläufe in den Grund aus, Teller liegen in drei Größen und bewegen sich beim Scrollen unterschiedlich schnell (Parallaxe 0,05 / 0,12 / 0,18). Glut leuchtet als Kante und Schein (Knöpfe, gewählte Kompass-Option, Reservieren-Pille, Bestell-Tafel). Dunkle Karten liegen mit weichen, versetzten Schatten auf dem Grund. Sonst entsteht Tiefe durch Tonstufen (Tinte → #201a16 → Kohle → Ruß) und die Körnung (feTurbulence-Rauschen, `soft-light`, 16 %).

### Shadow Vocabulary
- **etikett** (`0 24px 48px -18px rgb(0 0 0 / .65), 0 6px 14px -6px rgb(0 0 0 / .45)`): Kompass-Hülle, Karten auf Dunkel.
- **glutkante** (`0 0 16px -3px rgb(240 122 82 / .5)` + innen `0 0 14px -8px`): Primärknopf; Hover stärker.
- **safranschein** (`0 0 14px -4px rgb(232 163 61 / .45)`): Reservieren-Pille, gewählte Kompass-Option.
- **tafel** (`0 40px 80px -40px rgb(18 15 13 / .9)`): Bestell-Tafel; **blatt** (`0 30px 60px -30px`): Papierbogen über dem Footer.

## Shapes

Weiche, gefasste Formen: Knöpfe, Marken, Chips und Kategorie-Links als Pille (999px), Eingabefelder 10px, Karten und Auswahlkarten 14px mit feiner Innenlinie 6–7px innen (Doppelrahmen als Erbe des Etiketts), Bilder in Karten 9px, Bestell-Tafel 1.75rem, Papierbogen unten 1.5rem / 2.5rem. Ornamente kommen aus zwei eigenen SVGs (Bordüre 48×16, Rapport 56×56), als Maske eingefärbt oder als eingefärbte Datei (`kachel-glut.svg`).

## Components

- **Etikett** (`.etikett`): Karte mit Doppelrahmen (14px), oben optional die Bordüre (`.bordure`). Auf Papier Creme mit Tinte-Rahmen (Rechtstexte, leerer Zustand der Karte); in `.nacht` dunkel mit einer feinen Safran-Außenlinie, ohne zweite Innenlinie (Gerichte, Öffnungszeiten, Kompass).
- **Nacht** (`.nacht`): bindet innerhalb die Papier-Rollen auf dunkle Gegenstücke um (`tinte` → Creme-Schrift, `creme`/`papier` → Kohle-Kartenflächen, `braun` → Rauch, `glut` → Glut hell, `rani` → Rani hell, `kardamom` → Kardamom hell). So erscheinen Papier-Bausteine ohne eigene Dunkel-Variante auf der Nacht-Seite. Achtung: `creme` heißt darin Kartenfläche; feste Creme-Schrift auf festen dunklen Flächen über `--color-creme-fest`.
- **Goldfaden** (`.goldfaden`): 3.25rem × 1px Safran, nach rechts auslaufend, 1.15rem unter der Abschnittsüberschrift.
- **Hero-Fakten** (`Hero.astro`): `dl` unter einer Haarlinie, drei Spalten mit feinen Trennern (Desktop) bzw. Zustand und Adresse übereinander (Handy, die Nummer steht dort im Knopf); Label Safran, Wert groß (Fakt), Zusatz in Rauch. Zustand über `LiveStatus gross` (Titel und Zusatz getrennt).
- **Logo** (`Logo.astro`): frei stehend, Goldfassung mit Glanzverlauf (`bombay-logo-gold.svg`: Kuppel Glut hell → Safran → Lichtkante, Schriftzug diagonal Gold); Kopf 6.4–7.6rem breit, Fuß bis 16rem zentriert über einer Ornamentlinie. Favicon/Touch-Icon: goldenes B auf Tinte.
- **Vorhang** (`Basis.astro` mit `vorhang` nur auf der Startseite, `.vorhang`): Logo-Intro einmal pro Besuch (sessionStorage), nicht bei reduzierter Bewegung, ohne Skript gar nicht. Tinte mit Glutschein; die Kuppel zeichnet sich als Goldlinie (vereinfachte Kontur, 0–0,7 s), dann erscheinen Kuppel (0,45–0,8 s) und Schriftzug (0,3–0,8 s, `bombay-logo-gold-kuppel.svg` / `-schriftzug.svg`), ein Glanzstreif läuft maskiert über die Logoform (0,6–1,2 s), ab 1,2 s hebt sich der Vorhang (0,45 s), nach 2 s wird er entfernt. Animiert werden nur Deckkraft, Verschiebung und ein kleiner Linienpfad (Lighthouse mobil 96–97 mit Vorhang). Der Hero-Auftritt beginnt danach (+1,25 s unter `.vorhang-an`).
- **Hero**: Foto rechts ab 40 % (Desktop) bzw. oben (Handy), läuft weich in Kohle aus; davor Ornament, Headline in Creme, Unterzeile in Rauch, Knöpfe, Hero-Fakten. Kein Kasten; ein weicher radialer Tinte-Schatten hinter dem Text.
- **Teller** (`Besonderes.astro`): freigestellte Schüsseln (`teller-<nr>-<name>.webp`, transparent) mit doppeltem `drop-shadow` (weit und weich + kurz und dicht), darunter ein Glutschein (`radial-gradient` Glutrot 30 %, Kurkuma 14 %). Bildunterschrift „Nr. … Name“ unter dem Teller, leichte Parallaxe. Ohne Freisteller bleibt der Platz leer.
- **Blatt** (`.blatt`): dunkle Tafel der Unterseiten (Speisekarte, Bestellen, Rechtstexte) unter dem Seitenkopf und der Kategorie-Leiste – seit Fassung 3 nicht mehr hell (Wunsch der Auftraggeberin). Bindet innen die Papier-Rollen wie `.nacht` um; Verlauf #211b17 → #1c1714 mit Glutschein oben rechts, rundum gerundet (1.5rem / 2.5rem), ab 64rem mit Rand links und rechts, Safran-Haarlinie und Schatten. Druck: Tokens zurück auf Papier/Tinte, weißer Grund. Der Grund darum läuft unten in den Ton des Footers aus (`main:has(.blatt)`, `display: flow-root`). Rechtstexte stehen direkt auf dem Bogen (Bordüre + Überschrift, keine Karte in der Karte).
- **Naht** (`.naht`): Haarlinie Creme 13 % am oberen Rand der Abschnitte Signature, Kompass und Besuch, innerhalb des Rahmens, an den Enden auslaufend.
- **Platzhalter** (`.platzhalter--…`): dunkle Kachel, von unten in der Farbe des Gerichts angeglüht, Rapport in Safran 10 %, Name in Rozha Creme mit kurzem Safranstrich – kein Farbfeld, kein Namenskasten.
- **Helle Bereiche** (`.hell`): `color-scheme: light`, damit native Radios, Checkboxen und Auswahllisten hell gezeichnet werden.
- **Online bestellen** (`src/data/bestellung.ts`): kein eigener Warenkorb. Jeder Bestellknopf (Kopf, Hero, Bestell-Tafel, Curry-Kompass, Speisekarte, Fuß, Mobilleiste) führt im selben Tab zum Bestellportal des Restaurants (Smart App). Auf der Speisekarte sitzt ab 64rem eine Pille „Online bestellen“ mit Glutkante rechts in der mitlaufenden Kategorie-Leiste; darunter trägt die Mobilleiste den Weg. Gerichtszeilen ohne Plus/Minus: Nummer, Name, Punktlinie, Preis.
- **Stimmen** (`Stimmen.astro`, Daten `src/data/bewertungen.ts`): „Was unsere Gäste sagen.“ – Google-Sterne als große Zahl (Rozha) neben Sternen (`Sterne.astro`, Teilsterne) und Anzahl, Link zu Google; ausgewählte Bewertungen als großes Zitat mit Safran-Anführungszeichen plus kleine dunkle Karten; Unterzeile „Vorname · Monat · Google“ und Sterne je Zitat nur, wenn sie vorliegen, sonst „Google-Rezension“. Sterne erst live, wenn `geprueft: true` (in der Vorschau vorläufig mit Marke „Vorläufig – im Google-Profil prüfen“), mit „Stand Monat Jahr“. Ohne Zitate live: Überschrift „Unsere Google-Bewertungen.“, Sterne links, Google-Link rechts über die ganze Breite; in der Vorschau gestrichelte, beschriftete Platzhalter. Ohne geprüfte Sterne und ohne Zitate erscheint der Abschnitt live gar nicht. Nie erfundene Bewertungen.
- **Gericht-Etikett** (`GerichtEtikett.astro`): Foto oder Platzhalter 4:3, Seriennummer-Kachel überlappt die Bildkante, Name, Beschreibung, Kennzeichen, Preis.
- **Knöpfe** (`.knopf` + `-glut`, `-kontur`, `-kontur-hell`, `-creme`): Pillen, mind. 3.25rem hoch, Icon links, gesperrte Versalien. `-glut` überall mit Glutkante auf `knopf-grund` (#150f0c, Hover `knopf-glut` #2a160e), Schrift Creme fest. `-kontur-hell` Haarlinie Creme 30 %, Hover Safran.
- **Kopfzeile** (`Kopf.astro`): Navigation ab 80rem (gesperrte Versalien, Safran-Unterstrich wächst beim Hover), darunter Menü-Knopf; Reservieren-Pille mit Safran-Beschriftung und Nummer.
- **Reibefläche** (`Reibeflaeche.astro`): mobile Aktionsleiste, Ruß 94 % mit Weichzeichner und Safran-Haarlinie; „Bestellen“ in Safran.
- **Curry-Kompass**: Hülle (dunkles Etikett in `.nacht` mit drei Streichhölzern als Fortschritt) und Schublade (Kohle, gleitet heraus); Optionen als runde Kacheln (14px) mit `aria-pressed`, gewählt mit Safran-Kante und Schein; Chili-Regler mit Hitzeverlauf Safran → Glut auf dunkler Spur.
- **Speisekarten-Zeile**: Nummernkachel · Name · Punktlinie · Preis, darunter Beschreibung und Kennzeichen.

## Do's and Don'ts

**Do**
- Neue Abschnitte der Startseite auf dunklem Grund mit `koernung` und eigenem (Verlaufs-)Hintergrund bauen; Inhaltseinheiten als dunkles Etikett (`.nacht`) oder als Zeile auf der dunklen Tafel (`.blatt`).
- Die Bordüre sparsam setzen: höchstens eine pro Etikett, oben.
- Gerichtsnummern überall zeigen, wo ein Gericht erscheint.
- Neue Farben aus der Gewürzpalette ableiten; Gold-Glanz (`--glanz`) für Logo, Bordüren und Ornamente.

**Don't**
- Keine weißen oder cremefarbenen Kästen hinter Logo oder Hero-Text, keine hellen Abschnitte auf der Startseite.
- Keine eckigen Knöpfe, keine harten Farbwechsel zwischen Abschnitten, keine Reißkanten.
- Fotos auf dunklem Grund nie als harte Rechtecke – auslaufen lassen oder als Teller zeigen.
- Keine Kuppeln, Bögen oder Paläste als Deko – die Kuppel gehört nur ins Logo.
- Kein Gold auf Rot, keine Stock-Icons, keine Emoji als Symbole.
- Safran nie als Text auf Creme.
- Keine Dachzeilen über Überschriften, keine Abschnittsnummern.
