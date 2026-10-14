---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/speisekarte.astro"]
---

# Surface: Startseite, Speisekarte, Online-Bestellung (Bombay Freising)

Scope: `/` (Persuade), `/speisekarte` (Read/Operate), `/impressum`, `/datenschutz` – eine gemeinsame Welt.
Audience: Gäste auf dem Handy via Google Maps; Reisende nahe Flughafen; Telefonbesteller per Nummer; Liefer-/Abholbesteller.
Action: Anrufen zum Reservieren, online bestellen (Weiterleitung zum Smart-App-Bestellportal des Restaurants, kein eigener Warenkorb), Karte lesen.
Proof on hand: echte Karte mit Preisen, 8 eigene Food-Fotos, 4 freigestellte Restaurantfotos (Schalen 57/109/108/92), Logo (Vektor-Nachbau), Google-Bewertungen seit Fassung 5 (4,5 Sterne, 417, drei Auszüge). Keine Jahreszahlen, keine KI-Bilder.
Constraints: DSGVO (selbst gehostete Fonts, kein Maps-Embed ohne Klick), Lighthouse ≥95 mobil, Daten zentral, kein Backend; Online-Bestellung ausschließlich im Bestellportal des Restaurants (Smart App), Link zentral in src/data/bestellung.ts.
Memorable moment: der Logo-Vorhang (Gold-Logo öffnet sich aus der Mitte, Glanzlicht läuft hindurch) und der Curry-Kompass – Ergebnis gleitet wie eine Schublade heraus, Chili-Regler heizt sich von Safran zu Glut auf; „Online bestellen“ führt von dort zum Bestellportal.
Unresolved: Montagabend, Buffet/Catering, Feiertags-Dienstag, Domain, Rechtstexte (u. a. Anbieter des Bestellportals im Datenschutz). Bestell-Empfang, Lieferkosten, Mindestbestellwert und Gebiet regelt das Bestellportal, nicht die Website.
History: Erste Fassung „Sivakasi-Streichholzetikett“ (Seed 0bdab163, Roll degraded). Auf Wunsch der Auftraggeberin zur Welt „Glut und Papier“ weiterentwickelt (Fassung 1, gesichert als Branch und /fassung-1/). Fassung 2 „Glut bei Nacht“ nach Referenz der Auftraggeberin (irmonhair „Fenster“: warm-schwarz, LED-Kanten, Pillen): keine Bühnenwechsel und Reißkanten mehr, Pillen mit Glutkante, große Hero-Fakten; Hero und Inhalte bleiben. Fassung 3 (Wunsch der Auftraggeberin): Logo-Vorhang beim Öffnen wie die Schleife bei „Fenster“, Logo und Bordüren in Gold-Glanz statt Pink, Speisekarte und Bestellung dunkel, Gerichte direkt aus der Speisekarte in den Warenkorb, neuer Abschnitt Google-Bewertungen. Fassung 6 (Wunsch des Inhabers): Bestellen nur noch über das bestehende Smart-App-Bestellportal; eigener Warenkorb, /bestellen und Plus/Minus auf der Speisekarte entfallen. Fassung 7 (Wunsch der Auftraggeberin): Abschnitt „Was man bei uns schmeckt“ entfällt, statt sechs KI-Bildern vier echte, freigestellte Restaurantfotos („Vier Gründe, heute indisch zu essen.“).

## Direction contract

THESIS: Glut bei Nacht – ein durchgehender, warm gekörnter dunkler Raum, aus dem die Gerichte leuchten; Licht kommt nur von der Glut (Kanten, Schein, Goldfaden). Verweigert den Kategorie-Standard (vollflächiges Foodfoto mit Kasten-Headline und Icon-Karten) und ausdrücklich den Folienwechsel zwischen hellen und dunklen Abschnitten.

OWN-WORLD: Grund Tinte #1B1714 mit Körnung, Tonstufen per Verlauf (#201a16), Footer Ruß; Fotos ohne harte Kanten (Hero-Maske, Gerichte als freigestellte Schalen mit Kontaktschatten über Glutschein); dunkle Etiketten mit Safran-Innenlinie und Rani-Bordüre (.nacht); Pillen mit Glutkante (Glut hell → Safran) und Haarlinien-Pillen; Goldfaden unter Überschriften; Bestell-Tafel mit Glutschein und großem Blockdruck; Logo frei stehend in Gold mit Glanz; Bordüren, Hero-Ornament und Fußlinie im Gold-Glanz (`--glanz`), kein Pink. Unterseiten als dunkle Tafel (.blatt); Speisekarte mit „Online bestellen“-Pille in der mitlaufenden Kategorie-Leiste (ab 64rem); Abschnitt „Was unsere Gäste sagen“ mit Google-Sternen (nie erfundene Bewertungen). Rozha One + Mukta, Labels und Knöpfe in gesperrten Versalien, Preise tabellarisch. Papier nur noch im Druck. Mobil: dunkle Leiste (Anrufen · Bestellen · Karte); „Bestellen“ führt zum Bestellportal.

STORY: Gast sieht das Garnelen-Curry aus dem Dunkel leuchten, liest „Aus Glut und Gewürz.“, sieht groß „Jetzt geöffnet“, die Nummer und die Straße, tippt Reservieren oder Bestellen. Sieht beim ersten Öffnen kurz das goldene Logo, dann den Hero. Scrollt ohne Bruch zu den vier Gerichten (echte Restaurantfotos, freigestellt), dem Kompass, den Google-Sternen, der Bestell-Tafel, Zeiten und Anfahrt; der Abschnitt läuft in den Footer aus. Auf der Speisekarte sucht er sein Gericht nach Nummer, Name oder Schärfe; sobald die Kategorie-Leiste oben klebt, glimmt in ihr „Online bestellen“ auf (auf dem Handy trägt die Leiste unten den Weg) und führt ihn ins Bestellportal des Restaurants. Der Curry-Kompass endet mit dem Satz, was er dort wählt, und demselben Weg.

FIRST VIEWPORT: Desktop 1440: Kopfzeile mit freiem Negativ-Logo, gesperrter Navigation und Reservieren-Pille; Foto ab 40 % rechts, nach links/oben/unten in Kohle auslaufend, weicher Schatten hinter dem Text; links Rani-Ornament, Headline Creme ~88px, Unterzeile, Glutkanten-Pille „Tisch reservieren“ + Haarlinien-Pille „Online bestellen“, darunter unter einer Haarlinie drei Fakten (Heute · Tisch reservieren · Freisinger Altstadt) groß. Mobil 375/390: Foto 4:3 läuft aus, Text darunter, zwei Pillen mit zweiter Zeile (Nummer / Liefern · Abholen), Zustand groß, Adresse groß, dunkle Leiste unten.

FORM: Glut bei Nacht in Gold (Fassung 3; davor Fassung 2, Weiterentwicklung von „Glut und Papier“, Seed 0bdab163; Referenz der Auftraggeberin: irmonhair „Fenster“).

MOTION: Fokus = Logo-Vorhang einmal pro Besuch auf der Startseite (Kuppel zeichnet sich als Goldlinie, 0–1,65 s, nur Compositor-Eigenschaften, nicht bei Reduced Motion, ohne JS gar nicht), danach Hero-Auftritt (Foto atmet einmal, Headline Wort für Wort, Unterzeile/Knöpfe/Fakten folgen ab 0,22–0,35 s in 0,6 s) und Kompass-Schublade. Unterstützend: Überschriften steigen Wort für Wort auf (Wunsch der Auftraggeberin, Staffel gedeckelt), Absätze gleiten kurz herein (nie Überschrift und Block doppelt). Reduced Motion: alles sofort sichtbar.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
