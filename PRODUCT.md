# Product

<!-- impeccable:product-schema 1 -->

> Quelle: `Briefing.md` (vom Auftraggeber geliefert). Es gab keine Interview-Runde; der Auftraggeber hat ausdrücklich angewiesen, ohne Freigabe umzusetzen. Alles hier stammt aus dem Briefing. Abgeleitete Annahmen sind mit *(Annahme)* markiert.

## Platform

web

## Stack

Astro (statisch) + Tailwind CSS, interaktive Teile als kleine Inseln mit Vanilla-TypeScript. Vom Briefing vorgegeben („Astro + Tailwind CSS oder vergleichbar schlanker statischer Stack“), deploybar auf Netlify oder Vercel.

## Users

- **Hauptnutzer:** Gäste aus Freising und Umgebung, die meist über Google Maps auf dem Handy kommen und schnell wissen wollen: Hat es jetzt offen? Wie reserviere ich? Was gibt es? Wo bestelle ich?
- **Reisende und Hotelgäste** in der Nähe des Flughafens München.
- **Stammgäste**, die am Telefon per Gerichtsnummer bestellen und die Karte nachschlagen.
- **Unsichere Gäste**, die indische Gerichtsnamen („Khumb Wala“, „Rogan Josh“, „Badam Pasanda“) nicht kennen.

## Product Purpose

Die eine Website des Restaurants „Bombay – Indische Spezialitäten“ in der Freisinger Altstadt, auf die alle bisherigen Domains zeigen. Ziele in dieser Reihenfolge:
1. Lust machen, sodass man das Essen fast riechen kann.
2. In 5 Sekunden zu finden: Öffnungszeiten, Telefon für Reservierung, Adresse, Speisekarte, Online-Bestellung.
3. Vertrauen und Charakter: echte indische Küche, Holzkohle-Lehmofen, hausgemachter Käse, große vegetarische Auswahl.
4. Mobile first.

Erfolg: Ein Gast öffnet die Seite und denkt „Da will ich heute Abend essen“.

## Positioning

Tandoori-Gerichte und Brote aus einem original Holzkohle-Lehmofen aus Indien, hausgemachter Paneer, Thalis auf original indischen Platten als Spezialität des Chefkochs, Basmati-Reis aus Nordindien und eine große vegetarische Auswahl, viele Gerichte auch vegan erhältlich. Mitten in der Freisinger Altstadt, nahe am Flughafen München.

## Operating Context

- Reservierung ausschließlich telefonisch: 08161 / 49 65 102.
- Lieferung und Abholung über eine externe Bestellplattform plus iOS-App.
- Gäste bestellen am Telefon oft per Gerichtsnummer, deshalb sind die Nummern sichtbar.
- Mittagsöffnung und Abendöffnung, dienstags Ruhetag, an Feiertagen geöffnet.

## Capabilities and Constraints

- Zentrale Datendateien für Speisekarte, Öffnungszeiten und Kontakt; von Nicht-Entwicklern pflegbar.
- Kein Backend. Live-Status, Speisekarten-Filter und Curry-Kompass laufen rein clientseitig.
- DSGVO: keine externen Fonts, kein Tracking, Karten nur per Zwei-Klick bzw. als Link.
- Offen, vom Restaurant zu bestätigen: Montagabend-Öffnung, Mittagsbuffet, Partyservice/Catering, Getränkegrößen, Allergenkennzeichnung, Impressum/Datenschutz-Inhalte, Duck Vindaloo (Ente vs. Lamm).

## Brand Commitments

- Name: „Bombay – Indische Spezialitäten“.
- **Logo (vom Restaurant geliefert):** magentafarbener Schriftzug „Bombay“ in kontrastreicher Serif unter einem Kuppelbogen mit Spitze. Farbe `#BE036C`. Es ist das einzige verbindliche Markenzeichen und wird nicht verändert; die Kuppel bleibt Teil des Logos und wird nicht als Deko-Motiv wiederholt.
- Stimmung laut Briefing: warm, sinnlich, modern; Kontrast dunkler, glutiger Flächen mit hellem Creme; Tandoor-Glut, Safran, Kurkuma, Kupfergeschirr, Gewürzmärkte. Gegenwärtig und edel, aber nicht steif.
- Ausdrücklich zu vermeiden: Taj-Mahal-Clipart, Kitsch, Gold-auf-Rot-Klischees, Template-Optik, Stock-Icon-Sammlungen.
- Palette (Vorschlag, verfeinerbar): Tinte `#1B1714`, Creme `#F6EFE4`, Safran `#E8A33D`, Kurkuma `#D98E04`, Glutrot `#B63A1E`, Kardamom-Grün `#5E6B48` (vegetarisch).
- Serif-Display mit Charakter plus klare Sans; selbst gehostet.
- Ein eigenes, dezentes Ornament nach indischem Blockdruck (SVG, sparsam).

## Evidence on Hand

- Vollständige Speisekarte mit Preisen (Briefing Abschnitt 8).
- Acht eigene Food-Fotos des Restaurants (`public/images/`), alle quadratisch; vier in 1485 px, vier nur in 400 px. Keine Ambiente-, Tandoor- oder Team-Fotos.
- Logo als Screenshot (`assets/logo/logo-original-screenshot.jpeg`); Vektor-Nachbau in `public/logo/`.
- **Nicht vorhanden und nicht zu erfinden:** Gründungsjahr, Namen, Auszeichnungen, Bewertungen, Testimonials.

## Product Principles

1. Das Essen zuerst: Bild, Duft und Wärme vor Floskeln.
2. Die fünf Fakten (offen?, Telefon, Adresse, Karte, Bestellen) sind auf jedem Bildschirm in Reichweite.
3. Ehrlich statt geschönt: Lücken werden als TODO markiert, nicht gefüllt.
4. Fremde Gerichtsnamen werden übersetzt und erklärt, nicht vorausgesetzt.

## Accessibility & Inclusion

WCAG-AA-Kontraste (Safran auf Creme ausdrücklich prüfen), volle Tastaturbedienung inklusive Curry-Kompass, `prefers-reduced-motion` respektieren, druckbare Speisekarte.
