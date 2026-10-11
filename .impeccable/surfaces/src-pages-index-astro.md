---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/speisekarte.astro"]
---

# Surface: Startseite + Speisekarte (Bombay Freising)

Scope: `/` (Persuade), `/speisekarte` (Read/Operate innerhalb derselben Welt), `/impressum`, `/datenschutz`.
Audience: Gäste auf dem Handy via Google Maps; Reisende nahe Flughafen; Telefonbesteller per Nummer.
Action: Anrufen zum Reservieren, Online bestellen, Karte lesen.
Proof on hand: echte Karte mit Preisen, 8 eigene Food-Fotos. Keine Bewertungen, keine Jahreszahlen.
Constraints: DSGVO (selbst gehostete Fonts, kein Maps-Embed), Lighthouse ≥95 mobil, Daten zentral.
Memorable moment: Curry-Kompass – Ergebnis gleitet wie die Schublade einer Streichholzschachtel heraus; Chili-Regler heizt sich von Safran zu Glut auf.
Unresolved: Montagabend, Buffet/Catering, Feiertags-Dienstag, Domain, Rechtstexte.
Roll: degraded (impeccable.style per Netzwerk-Policy gesperrt), keine Challenger; Auftraggeber hat Umsetzung ohne Freigaberunde angewiesen.

## Direction contract

THESIS: Bombay als Sivakasi-Streichholzetikett: jede Kerneinheit (Hero, Gericht, Öffnungszeiten) ist ein flach gedrucktes Etikett mit eigener Blockdruck-Bordüre, aufgeklebt auf einen kohleschwarzen, glutkörnigen Grund. Verweigert den Kategorie-Standard: vollflächiges Foodfoto unter zentrierter Serif-Headline mit drei Icon-Karten darunter.

OWN-WORLD: Grund Kohle-Tinte #1B1714 mit feiner Körnung; Etiketten auf Creme #F6EFE4 mit Doppelrahmen und Safran/Glut-Blockdruckband; Farben flach gedruckt, Verlauf nur auf der Chili-Hitzeskala; Glutrot für Aktionen, Safran auf Dunkel, Kardamom markiert vegetarisch. Rozha One (Indian Type Foundry) für Marke und Überschriften, Mukta für Text, Preise tabellarisch rechtsbündig. Gerichtsnummern als gerahmte Serien-Nummer. Mobil: untere „Reibefläche“ (Anrufen · Bestellen · Karte) mit Sandpapier-Glutrot.

STORY: Gast sieht das Essen glühen, Namen, Ort und ob jetzt offen ist; tippt Anrufen oder Bestellen. Scrollt zu Lehmofen/Paneer/Thali, sechs Signature-Etiketten, Kompass bei Unsicherheit, dann Zeiten und Adresse.

FIRST VIEWPORT: Desktop 1440: vollflächiges dunkles Karahi-Foto als „Schachtel“, unten links ein großes Creme-Etikett (≈600px) mit Blockdruckband oben, Headline Rozha ~88px, ein Satz, zwei Buttons (Glutrot „Tisch reservieren“, Kontur „Online bestellen“), Fußzeile mit Live-Status und Adresse. Mobil 375: Header 56px, Foto 4:3, Etikett überlappt Fotounterkante; CTAs ohne Scrollen sichtbar.

FORM: Indisches Streichholzetikett (Sivakasi-Druck), Kandidat 7 von 7, Seed 0bdab163.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
