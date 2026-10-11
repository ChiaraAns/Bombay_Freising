---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/speisekarte.astro","src/pages/bestellen.astro"]
---

# Surface: Startseite, Speisekarte, Online-Bestellung (Bombay Freising)

Scope: `/` (Persuade), `/speisekarte` (Read/Operate), `/bestellen` (Operate), `/impressum`, `/datenschutz` – eine gemeinsame Welt.
Audience: Gäste auf dem Handy via Google Maps; Reisende nahe Flughafen; Telefonbesteller per Nummer; Liefer-/Abholbesteller.
Action: Anrufen zum Reservieren, online bestellen (eigener Ablauf), Karte lesen.
Proof on hand: echte Karte mit Preisen, 8 eigene Food-Fotos, Logo (Vektor-Nachbau). Keine Bewertungen, keine Jahreszahlen.
Constraints: DSGVO (selbst gehostete Fonts, kein Maps-Embed ohne Klick), Lighthouse ≥95 mobil, Daten zentral, kein Backend (Bestellung per E-Mail oder konfigurierbarem Endpunkt).
Memorable moment: Curry-Kompass – Ergebnis gleitet wie eine Schublade heraus, Chili-Regler heizt sich von Safran zu Glut auf; „Diese Kombination bestellen“ legt Gericht + Beilage in den Warenkorb.
Unresolved: Montagabend, Buffet/Catering, Feiertags-Dienstag, Domain, Rechtstexte, Bestell-Empfangsweg, Lieferkosten/Mindestbestellwert/Gebiet, Fotos für 58/104/128/96/159.
History: Erste Fassung „Sivakasi-Streichholzetikett“ (Seed 0bdab163, Roll degraded). Auf Wunsch der Auftraggeberin (Hero-Kasten und Logo-Etikett wirkten „draufgeklatscht“) zur Welt „Glut und Papier“ weiterentwickelt; Etiketten bleiben nur auf dem Papier.

## Direction contract

THESIS: Glut und Papier – Gerichte tauchen weich aus kohleschwarzer Glut auf, helle Papierbögen mit gerissenem Rand tragen Karte und kleine Blockdruck-Etiketten. Verweigert den Kategorie-Standard: vollflächiges Foodfoto mit zentrierter Headline im Kasten und drei Icon-Karten darunter.

OWN-WORLD: Grund Tinte #1B1714 mit Körnung; Fotos ohne harte Kanten (Masken-Verlauf, runde ausgeblendete Teller); Papier #EDE2CF/Creme #F6EFE4 mit gerissenem Rand; Gericht-Etiketten mit Doppelrahmen und Rani-Bordüre; Logo frei stehend (Negativ: Creme + Rani hell #E04A92). Rozha One + Mukta, Preise tabellarisch. Glutrot nur für Aktionen, Preise, Schärfe. Mobil: Reibefläche (Anrufen · Bestellen · Karte), auf /bestellen die Warenkorb-Leiste.

STORY: Gast sieht das Garnelen-Curry aus dem Dunkel leuchten, liest „Aus Glut und Gewürz.“, sieht ob offen ist, tippt Reservieren oder Bestellen. Scrollt zu den Tellern und den vier Gründen, sechs Signature-Etiketten, Kompass, Bestellen, Zeiten und Adresse. Bestellen: Auswahl → Angaben → Fertig.

FIRST VIEWPORT: Desktop 1440: Header mit freiem Negativ-Logo; Foto in den rechten zwei Dritteln, nach links und unten in Kohle auslaufend; links Rani-Ornament, Headline Creme ~88px, Unterzeile, Glutrot „Tisch reservieren“ + Kontur „Online bestellen“, darunter Live-Status und Adresse. Mobil 375: Foto 4:3 läuft nach unten aus, Text direkt darunter auf Kohle, CTAs und Live-Status ohne Scrollen sichtbar, Reibefläche unten.

FORM: Glut und Papier (Weiterentwicklung des Sivakasi-Etiketts, Kandidat 7 von 7, Seed 0bdab163).

MOTION: Fokus = Hero-Auftritt (Foto atmet einmal, Ornament/Unterzeile/Knöpfe folgen) und Kompass-Schublade. Unterstützend: Überschriften steigen Wort für Wort auf (Wunsch der Auftraggeberin, Staffel gedeckelt), Absätze gleiten kurz herein, Teller mit leichter Parallaxe. Reduced Motion: alles sofort sichtbar.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
