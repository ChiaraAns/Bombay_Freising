---
name: Bombay – Indische Spezialitäten, Freising
description: Ein indisches Streichholzetikett, aufgeklebt auf glutige Kohle – warm, flach gedruckt, mit Rani-Pink aus dem Logo.
colors:
  tinte: "#1b1714"
  russ: "#120f0d"
  kohle: "#26201b"
  kohle-hell: "#352c25"
  creme: "#f6efe4"
  papier: "#ede2cf"
  papier-dunkel: "#e2d4bc"
  rani: "#be036c"
  rani-tief: "#8f0251"
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
    fontSize: "clamp(2.45rem, 1.35rem + 4.1vw, 4.85rem)"
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
    fontSize: "0.875rem"
    fontWeight: 600
    letterSpacing: "0.08em"
  preis:
    fontFamily: "Mukta, Mukta Ersatz, system-ui, sans-serif"
    fontWeight: 700
    fontFeature: "'tnum' 1, 'lnum' 1"
rounded:
  druck: "2px"
  knopf: "3px"
  chip: "999px"
spacing:
  rand-mobil: "1rem"
  rand-tablet: "1.75rem"
  rand-desktop: "2.5rem"
  sektion-mobil: "5rem"
  sektion-desktop: "7rem"
  inhalt-max: "78rem"
components:
  button-primary:
    backgroundColor: "{colors.glut}"
    textColor: "{colors.creme}"
    rounded: "{rounded.knopf}"
    padding: "0.55rem 1.25rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.glut-tief}"
  button-outline:
    textColor: "{colors.tinte}"
    rounded: "{rounded.knopf}"
    padding: "0.55rem 1.25rem"
    height: "3.25rem"
  button-outline-hover:
    backgroundColor: "{colors.tinte}"
    textColor: "{colors.creme}"
  button-creme:
    backgroundColor: "{colors.creme}"
    textColor: "{colors.tinte}"
    rounded: "{rounded.knopf}"
  etikett:
    backgroundColor: "{colors.creme}"
    textColor: "{colors.tinte}"
    rounded: "0"
  filter-chip:
    backgroundColor: "{colors.creme}"
    textColor: "{colors.tinte}"
    rounded: "{rounded.chip}"
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
    textColor: "{colors.tinte}"
    rounded: "{rounded.druck}"
---

# Design System: Bombay – Indische Spezialitäten, Freising

## Overview

**Creative North Star: „Das Streichholzetikett“**

Die Seite ist gebaut wie eine Serie indischer Streichholzetiketten aus der Druckstadt Sivakasi: jede wichtige Einheit (Hero, Gericht, Öffnungszeiten, Logo) ist ein cremefarbenes Etikett mit Doppelrahmen und Blockdruck-Bordüre, aufgeklebt auf einen kohleschwarzen, fein gekörnten Grund. Farben sind flach gedruckt; Verläufe gibt es nur dort, wo Hitze gemeint ist (Chili-Regler, Glut-Schein, Platzhalter-Fotos). Das Feuer des Lehmofens steckt im Grund und in der Glutrot-Reibefläche; die Marke steckt im Rani-Pink des Logos.

Die Dichte wechselt bewusst: großzügige, ruhige dunkle Strecken (Das Besondere, Curry-Kompass) wechseln mit hellen Papierflächen zum Lesen (Signature-Gerichte, Besuch, Speisekarte). Die Speisekarte ist ein gedruckter Bogen mit Punktlinien zwischen Name und Preis.

Abgelehnt laut Auftraggeber: Taj-Mahal-Clipart, Kitsch, Gold-auf-Rot, Template- und Lieferdienst-Optik, Stock-Icon-Sammlungen.

**Key Characteristics:**
- Creme-Etiketten mit Doppelrahmen (`border` + `outline` mit negativem Offset) auf Kohle-Grund mit Körnung
- Eigene Blockdruck-Bordüre (`public/ornament/band.svg`) als Maske, Farbe frei wählbar
- Rozha One für alles mit Stimme, Mukta für alles zum Lesen; Preise tabellarisch
- Gerichtsnummern als gerahmte Seriennummer, weil Gäste per Nummer bestellen
- Mobil eine feste „Reibefläche“ unten: Anrufen · Bestellen · Speisekarte

## Colors

Eine warme Gewürzpalette auf Kohle und Creme, verankert vom Rani-Pink des Logos und dem Glutrot des Ofens.

### Primary
- **Rani-Pink** (#be036c): die Logofarbe, gemessen aus dem Original-Logo. Logo, Blockdruck-Bordüren auf hellen Etiketten (Hero, Öffnungszeiten, Kategorien der Speisekarte, Rechtstexte). Nur auf hellem Grund (5,3 : 1 auf Creme).
- **Glutrot** (#b63a1e): Handlungsfarbe. Primärknöpfe (Reservieren, Bestellen), Preise, Chili-Kennzeichnung, das Bestellen-Band und die mobile Reibefläche. Hover: **Glut tief** (#8f2b14).

### Secondary
- **Safran** (#e8a33d): Akzent auf Dunkel – Fokusring, Links auf Kohle, aktive Kategorie, „Beliebt“-Marke, Platzhalter-Verläufe. Auf Creme nie als Text (Kontrast nur ca. 2 : 1).
- **Kurkuma** (#d98e04): Zwischenstufe der Hitze-Skala, Platzhalter-Variante Fisch, „öffnet bald“-Punkt.

### Tertiary
- **Kardamom** (#5e6b48): ausschließlich vegetarisch/vegan (Blatt-Symbole, Feiertagshinweis). **Kardamom hell** (#a9b48d) für dieselbe Rolle auf Dunkel.

### Neutral
- **Tinte** (#1b1714): Grund der dunklen Flächen, Text auf Creme, Seriennummern.
- **Ruß** (#120f0d) und **Kohle** (#26201b / #352c25): Footer, Kompass-Schublade, Scrollbar.
- **Creme** (#f6efe4): Etiketten, Text auf Dunkel. **Papier** (#ede2cf) und **Papier dunkel** (#e2d4bc): Lese-Flächen der Startseite und der Speisekarte, „Dazu passt“-Kasten.
- **Braun** (#5b4636) / **Braun hell** (#7a6250): Sekundärtext auf Creme und Papier.
- **Rauch** (#cdbfad) / **Rauch dunkel** (#a8998a): Sekundärtext auf Dunkel; Rauch auch für ausgeschaltete Chilis im Kompass.
- **Funktionsfarben:** Creme hell (#fbf6ee, Kompass-Optionen), Glut hell (#f07a52, Chili auf dunklem Chip), Offen-Grün (#6f9a3e, nur der Live-Status-Punkt), Holz / Holzkopf (#d7b98c / #6a5446, Streichhölzer der Kompass-Fortschrittsanzeige), Hinweis-Gelb (#fff5d6 / #5a3b00, nur TODO-Kästen der Rechtstexte), Druck-Schwarz/-Weiß (nur Print-Stylesheet).

### Named Rules
**Die Logo-braucht-Licht-Regel.** Rani-Pink steht nie direkt auf Kohle. Auf dunklen Flächen bekommt das Logo ein Creme-Etikett oder erscheint in Creme.

**Die Feuer-ist-Handlung-Regel.** Glutrot bedeutet „tu etwas“ (anrufen, bestellen, Preis) oder „scharf“. Für Dekoration wird es nicht verwendet.

**Die Grün-heißt-Gemüse-Regel.** Kardamom-Grün kennzeichnet nur vegetarisch/vegan und nichts sonst.

## Typography

**Display Font:** Rozha One (Indian Type Foundry), Ersatz: metrisch angepasstes Georgia
**Body Font:** Mukta (Ek Type), Ersatz: metrisch angepasstes Arial/Roboto

**Character:** Rozha One ist eine schwere, kontrastreiche Didone mit Kugel-Endungen aus einer indischen Schriftgießerei – nah am Schriftzug des Logos, laut wie ein Etikettendruck. Mukta ist eine ruhige, offene Grotesk derselben Herkunft mit echten Tabellenziffern.

### Hierarchy
- **Display** (400, clamp 2.65–5.6rem, 0.98): Seitentitel (z. B. „Speisekarte“). **Display-Hero** (clamp 2.45–4.85rem): die Headline im Hero-Etikett („Aus Glut und Gewürz.“).
- **Headline** (400, clamp 2.15–3.9rem, 1.02): Abschnittsüberschriften, Kategorien der Speisekarte.
- **Title** (400, clamp 1.55–2.15rem, 1.08): Gerichtnamen auf Etiketten, USP-Titel, Kompass-Fragen.
- **Body** (Mukta 400, 1.0625rem, 1.6): Fließtext, max. ca. 36rem Breite.
- **Zwischen** (Rozha 400, 1.5rem) und **Gericht** (Rozha 400, 1.32rem): kleine Überschriften im Fuß, Gerichtnamen in Listen und Kompass-Optionen.
- **Lead** (Mukta, 1.15rem), **Fein** (0.97rem), **Klein** (0.875rem), **Mini** (0.75rem): Einleitungen, Sekundärtext, Bildunterschriften, Marken. Als Tailwind-Klassen `text-lead`, `text-fein`, `text-klein`, `text-mini`; keine freien Pixel- oder rem-Werte.
- **Label** (Mukta 600, 0.875rem, 0.08em, Versalien): Zusatz neben dem Logo, Fußzeilen-Feinsatz. Nie als Dachzeile über einer Überschrift.
- **Preis** (Mukta 700, `tnum`): rechtsbündig, in Glutrot; auf Etiketten in Rozha One.

### Named Rules
**Die Keine-Dachzeile-Regel.** Überschriften tragen sich selbst; keine Kicker oder Eyebrows darüber.

## Layout

Ein Rahmen von max. 78rem mit 1rem / 1.75rem / 2.5rem Seitenrand (mobil / ab 40rem / ab 64rem). Ab 64rem ein 12-Spalten-Raster mit asymmetrischen Aufteilungen (5/6, 4/8, 7/5) statt gleich breiter Spalten. Sektionen 5rem (mobil) bzw. 7rem (desktop) vertikal. Mobile first: der Hero stapelt Foto über Etikett (Etikett überlappt die Fotokante um 3.25rem), die Signature-Etiketten werden mobil zur horizontal scrollbaren Reihe (84 % Breite mit Anschnitt), Filter-Chips und Kategorien ebenso. Die Speisekarte setzt ab 64rem zwei Spalten. Die Kategorie-Navigation ist sticky.

## Elevation & Depth

Etiketten liegen auf dem Grund wie aufgeklebt: weiche, versetzte Schatten (`0 24px 48px -18px rgb(0 0 0 / .65), 0 6px 14px -6px rgb(0 0 0 / .45)`), keine harten Offset-Schatten. Tiefe entsteht sonst durch Tonwechsel (Tinte → Kohle → Ruß) und die Körnung (feTurbulence-Rauschen, `soft-light`, 16 %).

### Shadow Vocabulary
- **etikett** (`0 24px 48px -18px rgb(0 0 0 / .65), 0 6px 14px -6px rgb(0 0 0 / .45)`): Hero-Etikett, Kompass-Hülle, Fotos auf Dunkel.
- **knopf-glut** (`0 10px 22px -12px rgb(182 58 30 / .9)`): Primärknopf.
- **schublade** (`0 30px 60px -30px rgb(0 0 0 / .8)`): Kompass-Ergebnis.

## Shapes

Gedruckte, fast eckige Formen: Etiketten 0 Radius mit Doppelrahmen (1px Rand, 1px Linie 6–7px innen), Knöpfe 3px, Marken 2px. Einzige runde Form: Filter-Chips (Pille) und Live-Status-Punkt. Ornamente kommen aus zwei eigenen SVGs (Bordüre 48×16, Rapport 56×56), immer als Maske eingefärbt.

## Components

- **Etikett** (`.etikett`): Creme, Doppelrahmen, oben optional die Bordüre (`.bordure`). Träger für Hero-Text, Gerichte, Öffnungszeiten, Logo, Rechtstexte.
- **Logo-Etikett** (`LogoEtikett.astro`): Magenta-Logo-SVG auf kleinem Creme-Etikett; Kopf 5.6–6.9rem breit, Fuß 12rem.
- **Gericht-Etikett** (`GerichtEtikett.astro`): Foto oder Platzhalter 4:3, Seriennummer-Kachel überlappt die Bildkante, Name, Beschreibung, Kennzeichen, Preis.
- **Platzhalter** (`.platzhalter--glut|kardamom|kurkuma|tinte|safran`): Verlauf + Rapport + Name auf Mini-Etikett, Farbe nach Gerichtsart.
- **Knöpfe** (`.knopf` + `-glut`, `-kontur`, `-kontur-hell`, `-creme`): mind. 3.25rem hoch, Icon links.
- **Reibefläche** (`Reibeflaeche.astro`): mobile Aktionsleiste, Glut tief mit Sandpapier-Rauschen.
- **Curry-Kompass**: Hülle (Etikett mit drei Streichhölzern als Fortschritt) und Schublade (Kohle, gleitet heraus); Optionen als Kacheln mit `aria-pressed`; Chili-Regler mit Hitzeverlauf Safran → Glut.
- **Speisekarten-Zeile**: Nummernkachel · Name · Punktlinie · Preis, darunter Beschreibung und Kennzeichen.

## Do's and Don'ts

**Do**
- Neue Inhaltseinheiten als Etikett auf Kohle oder als Zeile auf Papier bauen.
- Die Bordüre sparsam setzen: höchstens eine pro Etikett, oben.
- Gerichtsnummern überall zeigen, wo ein Gericht erscheint.
- Neue Farben aus der Gewürzpalette ableiten; Rani-Pink bleibt für Logo und Bordüren.

**Don't**
- Keine Kuppeln, Bögen oder Paläste als Deko – die Kuppel gehört nur ins Logo.
- Kein Gold auf Rot, keine Stock-Icons, keine Emoji als Symbole.
- Safran nie als Text auf Creme.
- Keine Dachzeilen über Überschriften, keine Abschnittsnummern.
