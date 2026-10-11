# Briefing: Neue Website für Restaurant Bombay, Freising

Du bist ein erstklassiger Webdesigner und Frontend-Entwickler. Baue die Website für das indische Restaurant **Bombay** in Freising **komplett neu und von Grund auf**. Die Seite soll aussehen wie von einer guten Designagentur: hochwertig, warm, modern und eigenständig. Sie soll nicht wie ein Template und nicht wie ein typischer Lieferdienst-Shop wirken.

Lies dieses Briefing vollständig, bevor du anfängst. Mach erst einen kurzen Plan (Designrichtung, Seitenstruktur, Tech-Stack) und setze ihn dann um.

---

## 1. Ausgangslage

Das Restaurant hat aktuell drei schwache Webauftritte:
- eine veraltete Seite von 2019, die „im Umbau“ ist,
- eine generische Bestellplattform-Seite (app smart),
- eine dritte Domain ohne eigenen Charakter.

Keine davon vermittelt Atmosphäre, Qualität oder das Besondere des Hauses. Die neue Seite soll **die eine** Seite werden, auf die alle Domains zeigen.

## 2. Ziele (in dieser Reihenfolge)

1. Lust machen: Man soll das Essen fast riechen.
2. In 5 Sekunden findet man: Öffnungszeiten, Telefon für Reservierung, Adresse, Speisekarte, Online-Bestellung.
3. Vertrauen und Charakter: echte indische Küche, Holzkohle-Lehmofen, hausgemachter Käse, große vegetarische Auswahl.
4. Mobile first: Die meisten Besucher kommen über Google Maps auf dem Handy.

## 3. Fakten zum Restaurant

- **Name:** Bombay – Indische Spezialitäten
- **Adresse:** Obere Hauptstraße 67, 85354 Freising (Altstadt)
- **Telefon / Reservierung:** 08161 / 49 65 102 (Link `tel:+4981614965102`)
- **E-Mail:** info@restaurant-bombay-freising.de
- **Online-Bestellung (Lieferung & Abholung):** https://restaurant-bombayfreising.de/bombay-freising/delivery
- **iOS-App:** https://apps.apple.com/de/app/bombay-freising/id1463946559
- **Öffnungszeiten:**
  - Montag: 11:30–14:00 *(Hinweis: Die Quellen widersprechen sich, ob montags auch abends 17:30–22:00 geöffnet ist. Lege die Zeiten zentral in einer Datei ab und markiere Montag mit einem TODO-Kommentar zur Bestätigung.)*
  - Dienstag: Ruhetag
  - Mittwoch bis Sonntag: 11:30–14:00 und 17:30–22:00
  - An allen Feiertagen geöffnet
- **Besonderheiten / USPs:**
  - Tandoori-Gerichte und Brote aus einem original **Holzkohle-Lehmofen aus Indien**
  - **Hausgemachter Käse (Paneer)**
  - Große vegetarische Auswahl, viele Gerichte auch vegan erhältlich
  - Thalis auf original indischen Platten als Spezialität des Chefkochs
  - Basmati-Reis aus Nordindien
  - Lieferservice und Abholung
  - Mittagsbuffet und Partyservice/Catering (in alten Unterlagen erwähnt, mit TODO als „bitte bestätigen“ markieren)
  - Nähe zum Flughafen München, also auch für Reisende und Hotelgäste relevant

Erfinde **keine** weiteren Fakten wie Gründungsjahr, Namen, Auszeichnungen oder Bewertungen. Wo ein Text eine Lücke hätte, setze einen sinnvollen, ehrlich formulierten Platzhalter mit `TODO`.

## 4. Seitenstruktur

### Startseite (One-Pager mit klaren Abschnitten)
1. **Hero:** großes, stimmungsvolles Bild (Tandoor-Glut, Gewürze oder Signature-Gericht), starke Headline, zwei CTAs: „Tisch reservieren“ (tel-Link) und „Online bestellen“. Darunter ein **Live-Status**: „Jetzt geöffnet – Küche bis 14:00“ / „Öffnet heute um 17:30“ / „Heute Ruhetag“ (berechnet aus den Öffnungszeiten, Zeitzone Europe/Berlin).
2. **Über uns / Das Besondere:** kurz und atmosphärisch, mit den USPs (Lehmofen, Paneer, Thalis, vegetarisch).
3. **Speisekarten-Vorschau:** 6 Signature-Gerichte als schöne Karten mit Bild, Name, kurzer Beschreibung, Preis und Kennzeichnungen (vegetarisch, vegan möglich, Schärfegrad). Vorschlag:
   - 57 Butter Chicken
   - 58 Chicken Tikka Masala
   - 104 Palak Paneer
   - 128 Bombay Thali
   - 96 Jheenga Mango
   - 159 Garlic Naan
   Darunter ein auffälliger Button **„Ganze Speisekarte ansehen“**, der zur Speisekarten-Unterseite führt.
4. **Signature-Feature** (siehe Abschnitt 5).
5. **Bestellen & Liefern:** kurzer Block mit Link zur Bestellplattform und zur App.
6. **Öffnungszeiten, Anfahrt & Kontakt:** Öffnungszeiten-Tabelle mit hervorgehobenem heutigem Tag, Adresse mit Link zu Google Maps (keine eingebettete Karte ohne Consent, siehe Datenschutz), Telefon, E-Mail.
7. **Footer:** Kontakt, Öffnungszeiten kompakt, Links zu Impressum und Datenschutz.

### Unterseite `/speisekarte`
- Vollständige Karte (alle Daten siehe Abschnitt 8).
- **Sticky Kategorie-Navigation** (horizontal scrollbar auf Mobile), die beim Scrollen die aktive Kategorie hervorhebt.
- **Filter:** Vegetarisch · Vegan möglich · Ohne Schärfe · Scharf · Sehr scharf.
- **Suche** nach Gerichtsname oder Zutat.
- Gerichtsnummern sichtbar (Gäste bestellen am Telefon oft per Nummer).
- Kategorie-Hinweise anzeigen (z. B. „Alle warmen Vorspeisen werden mit 3 Dips serviert“).
- Hinweis: „Informationen zu Allergenen erhalten Sie bei unserem Personal.“ (TODO: Allergenkennzeichnung nachpflegen)
- Gut lesbar und druckbar (Print-Stylesheet).

### Unterseiten `/impressum` und `/datenschutz`
Mit klar markierten Platzhaltern. Inhalte nicht erfinden.

## 5. Signature-Feature: „Der Curry-Kompass“

Ein eigens für Bombay gedachtes, interaktives Element, das den Gast zu seinem perfekten Gericht führt. Es löst ein echtes Problem: Die Karte hat über 120 Gerichte, und viele Gäste wissen nicht, was „Khumb Wala“, „Rogan Josh“ oder „Badam Pasanda“ ist.

**Ablauf (3 kurze Schritte, je ein Tap):**
1. **Worauf hast du Lust?** Hühnchen · Lamm · Ente · Fisch & Garnelen · Vegetarisch · Vegan
2. **Welcher Geschmack?** Cremig & mild (Korma, Butter, Sahne) · Nussig (Mandel, Cashew) · Fruchtig (Mango, Ananas) · Kräftig & würzig (Masala, Curry) · Grün & frisch (Spinat, Minze)
3. **Wie scharf?** Mit einer **Schärfe-Skala als Chili-Slider** (1–4 Chilis), die sich beim Ziehen farblich von Safran-Gelb bis Glut-Rot aufheizt.

**Ergebnis:** 1 Top-Empfehlung plus 2 Alternativen aus der echten Karte, jeweils mit einem passenden **„Dazu passt“**-Vorschlag (z. B. Garlic Naan, Mixed Raita, Mango Lassi) und dem Gesamtpreis der Kombination. Buttons: „Telefonisch reservieren“ und „Online bestellen“. Bei Lieferung soll man zur Bestellplattform kommen.

**Umsetzung:**
- Jedes Gericht in den Menüdaten bekommt Tags: `protein`, `geschmack[]`, `schaerfe` (0–3), `vegetarisch`, `veganMoeglich`. Leite die Tags sinnvoll aus den Beschreibungen ab.
- Rein clientseitig, kein Backend.
- Schöne Übergänge zwischen den Schritten; „Nochmal“ und „Zurück“ möglich.
- Barrierefrei per Tastatur bedienbar.

**Kleiner Bonus**, falls es sich elegant einfügt: Ein kleines „Was ist eigentlich …?“-Glossar (Paneer, Tandoor, Thali, Korma, Masala, Biryani, Raita, Lassi), als Tooltip oder ausklappbarer Abschnitt auf der Speisekarten-Seite.

## 6. Design-Richtung

- **Stimmung:** warm, sinnlich, modern, mit Kontrast zwischen dunklen, glutigen Flächen und hellem Creme. Denk an Tandoor-Glut, Safran und Kurkuma, Kupfergeschirr und Gewürzmärkte. Gegenwärtig und edel, aber nicht steif.
- **Vermeiden:** Taj-Mahal-Clipart, Kitsch, Gold-auf-Rot-Klischees, generische Bootstrap- oder Template-Optik und Stock-Icon-Sammlungen.
- **Farben (Vorschlag, du darfst verfeinern):** Tiefes Anthrazit/Tinte `#1B1714`, Creme `#F6EFE4`, Safran `#E8A33D`, Kurkuma `#D98E04`, Glutrot `#B63A1E`, gedämpftes Kardamom-Grün `#5E6B48` als Akzent für vegetarisch.
- **Typografie:** eine charaktervolle Serif-Display-Schrift für Überschriften (z. B. Fraunces oder Cormorant Garamond) plus eine klare Sans für Text (z. B. Inter oder DM Sans). Selbst gehostet, nicht vom Google-CDN (DSGVO).
- **Details, die es hochwertig machen:**
  - ein dezentes, eigenes Ornament oder Muster, inspiriert von indischem Blockdruck (als SVG, sparsam eingesetzt),
  - feine Körnung oder Textur auf dunklen Flächen,
  - Scroll-Animationen nur subtil (Fade/Slide), dazu `prefers-reduced-motion` respektieren,
  - großzügiger Weißraum und klare Hierarchie,
  - Preise typografisch sauber gesetzt (tabular numbers, rechtsbündig).
- **Schärfe-Icons und vegetarisch/vegan-Badges** als eigene, stimmige kleine SVGs.

## 7. Bilder

Es gibt noch **keine eigenen Fotos**. Baue deshalb ein sauberes Bild-System, in das später echte Fotos einfach eingesetzt werden können:

- Lege alle Bilder in `public/images/` mit festen, sprechenden Dateinamen ab, z. B. `hero.jpg`, `gericht-57-butter-chicken.jpg`, `gericht-128-bombay-thali.jpg`, `ambiente-1.jpg`, `tandoor.jpg`.
- Solange die Datei fehlt, zeige einen **schönen, gestalteten Platzhalter** (Farbverlauf in den Markenfarben plus Ornament und Gerichtname) statt eines kaputten Bildes oder grauen Kastens.
- Lege eine Datei `BILDER.md` an, in der jedes benötigte Foto mit Dateiname, Seitenverhältnis, Mindestgröße und kurzer Motivbeschreibung aufgelistet ist („Butter Chicken in Kupferschale, von schräg oben, dunkler Holztisch, Naan angeschnitten im Bild“).
- Bilder responsive und performant einbinden: moderne Formate (WebP/AVIF), `srcset`, Lazy Loading unterhalb des Folds, feste Seitenverhältnisse gegen Layout-Sprünge, aussagekräftige `alt`-Texte.
- **Die Fotos im Repo sind eigene Fotos des Restaurants und sollen verwendet werden.** Verschiebe sie nach `public/images/`, ordne sie den passenden Stellen (Hero, Gerichte, Ambiente) zu, benenne sie sprechend um und optimiere sie. Für Stellen ohne passendes Foto bleibt der gestaltete Platzhalter. Lade keine zusätzlichen Bilder aus dem Internet.

## 8. Speisekarte (vollständige Daten)

Lege die Karte als **eine zentrale Datendatei** an (z. B. `src/data/menu.ts` oder `menu.json`), damit Preise und Gerichte später ohne Code-Kenntnisse geändert werden können. Startseiten-Vorschau, Speisekarten-Seite und Curry-Kompass lesen alle aus dieser Datei.

Kennzeichnung: 🌶 = scharf, 🌶🌶 = sehr scharf, (V+) = auch vegan erhältlich. Schreibfehler aus der Quelle habe ich teilweise korrigiert.

### Suppen
- 1 Daal-Shorba – Linsensuppe – 4,90 €
- 2 Sabzi-Shorba – Gemüsesuppe – 4,90 €
- 3 Bohnensuppe – 4,90 €
- 4 Chicken-Shorba – Hühnerfleischsuppe – 4,90 €
- 5 Tomatensuppe – 4,90 €

### Kalte Vorspeisen
- 10 Chicken-Chana-Chat Delhi – Indischer Hühnerfleisch- und Kichererbsen-Salat – 5,50 €

### Warme Vorspeisen
*Hinweis: Alle warmen Vorspeisen werden mit 3 verschiedenen Dips serviert. Alle Pakoras werden in Kichererbsenmehl gewendet und frittiert.*
- 15 Vegetable Pakora – Frisches, gemischtes Gemüse – 5,90 €
- 16 Onion Bhaji – Zwiebelringe, kräftig gewürzt und frittiert – 5,90 €
- 17 Paneer Pakora – Frischer hausgemachter Käse – 5,90 €
- 18 Fish Pakora – Zartes Seelachsfilet – 5,90 €
- 19 Chicken Pakora – Zartes Hühnerfleisch – 5,90 €
- 20 Jheenga Pakora – Marinierte Riesengarnelen ohne Schale – 8,90 €
- 21 Vegetable Samosa – 2 kleine Pasteten mit frischem Gemüse gefüllt – 5,90 €
- 22 Mixed Starter Dish – Gemischter Vorspeisenteller für 2 Personen – 13,50 €

### Salate
- 28 Salat Saison – Gemischter Salat mit French Dressing oder Essig und Öl – 5,90 €
- 29 Tomatensalat – Mit Zwiebeln, Essig und Öl – 5,90 €
- 30 Salat Bombay – Gemischter Salat mit Kichererbsen, Ananas, Käse und Mais – 9,50 €
- 31 Indien Salat – Mit gebratenen Hühnerbrustfiletstreifen, frischen Champignons, Mais und Zwiebeln – 9,50 €

### Tandoori – Khajana
*Hinweis: Zubereitet in einem speziellen Holzkohle-Lehmofen aus Indien. Zu allen Tandoori-Gerichten servieren wir ofenfrisches Naan, Reis und Soßen.*
- 37 Tandoori Chicken – Hähnchen mariniert nach einem berühmten nordindischen Rezept (mit Knochen) – 16,90 €
- 38 Chicken Chili Tikka 🌶🌶 – Zartes, mariniertes Hühnerfleisch, gegrillt, Bengali-Art – 16,90 €
- 39 Chicken Tikka – Zarte marinierte Hühnerfleischstücke, gegrillt – 16,90 €
- 41 Haryali Malai Kebab – Zartes Hühnerfleisch in Joghurt mit Spinat-, Minze- und Koriandersoße mariniert, mit Beilage – 16,90 €
- 43 Vegetable Tandoori – Hausgemachter Käse, Blumenkohl, Tomaten, Zwiebeln, Zucchini, Auberginen und Paprika, in Joghurt und Gewürzen eingelegt, am Spieß gegrillt – 16,90 €
- 44 Fish Tikka – Frisches Seelachsfilet, mariniert in Joghurt und Gewürzen, knusprig gegrillt – 16,90 €
- 45 Jheenga Tandoori – Riesengarnelen ohne Schale, mariniert in Joghurt und Gewürzen, knusprig gegrillt – 19,90 €
- 46 Mixed-Grill-Platte – Etwas von allen Tandoori-Köstlichkeiten mit einem Stück Seelachs und einer Garnele – 19,90 €
- 47 Bombay Teller – Gebratenes Hühner- und Lammfleisch mit frischem Gemüse, Reis und Naan – 16,90 €
- 48 Garlic Chicken Tikka – Mariniertes Hühnerbrustfilet in Knoblauch-Joghurt-Sauce – 16,90 €

### Hühnerfleisch-Spezialitäten
- 51 Chicken Curry ★ Beliebt – Zartes Hühnerfleisch in Currysoße mit feinen Gewürzen – 14,90 €
- 52 Chicken Badam Pasanda – Zartes Hühnerfleisch in Nuss-Soße mit Kokosnussflocken und gemahlenen Mandeln – 14,90 €
- 53 Chicken Sabzi – Zartes Hühnerfleisch mit verschiedenem frischem Gemüse – 14,90 €
- 54 Karahi Chicken – Gebratenes Hühnerfleisch in Currysoße, in der Pfanne serviert – 14,90 €
- 55 Chicken Jalfrezi 🌶 – Hühnerfleisch ohne Knochen, mit Paprika, Zwiebeln, Tomaten, grünem Chili – 14,90 €
- 56 Chicken Vindaloo 🌶🌶 – Hühnerfleisch mit Spezialgewürzen aus Goa – 14,90 €
- 57 Butter Chicken ★ Beliebt – Zartes Hühnerfleisch in Butter-Tomaten-Soße – 14,90 €
- 58 Chicken Tikka Masala ★ Beliebt – Zartes Hühnerfleisch in Masalasoße – 14,90 €
- 60 Chicken Palak – Zartes Hühnerfleisch mit Spinat nach nordindischer Art – 14,90 €
- 61 Mango Chicken – Hühnerfleisch in frischer Mango-Safran-Cashewnuss-Soße – 14,90 €
- 62 Chicken Korma – Hühnerfleisch in frischer Kokosnuss-Soße – 14,90 €
- 63 Chicken Ananas – Zartes Hühnerfleisch mit Ananas – 14,90 €
- 64 Chicken Dal – Zartes Hühnerfleisch mit indischen gelben Linsen gegart – 14,90 €
- 65 Chili Chicken – Zartes Hühnerbrustfilet, gebraten mit grünem Chili – 14,90 €

### Lamm-Spezialitäten
- 66 Lamm Curry – Zartes Lammfleisch in Curry-Soße – 15,90 €
- 67 Rogan Josh – Zartes Lammfleisch in Rogan-Curry-Soße – 15,90 €
- 68 Mughlai Meat – Zartes Lammfleisch in Mandel-Safran-Sahnesoße – 15,90 €
- 69 Bhuna Gosht – Gebratenes Lammfleisch mit Tomaten und Röstzwiebeln in kräftiger Soße – 15,90 €
- 70 Gosht Palak – Gebratenes Lammfleisch mit Spinat nach nordindischer Art – 15,90 €
- 71 Mutton Khumb Wala – Zartes Lammfleisch mit frischen Champignons, Knoblauch und Ingwer in Mandel-Safransoße – 15,90 €
- 72 Mutton Vindaloo 🌶🌶 – Zartes Lammfleisch mit Spezialgewürzen aus Goa – 15,90 €
- 73 Karahi Gosht – Gebratenes Lammfleisch in Curry-Soße, in der Pfanne serviert – 15,90 €
- 74 Dal Gosht – Zartes Lammfleisch mit Korianderblättern und gelben Linsen – 15,90 €
- 75 Data Gosht – Zartes Lammfleisch in Curry-Joghurt-Mandel-Soße – 15,90 €
- 76 Bhindi Gosht – Zartes Lammfleisch mit Okra-Gemüse – 15,90 €
- 77 Mango Lamb – Zartes Lammfleisch in frischer Mango-Safran-Cashewnuss-Soße – 15,90 €
- 78 Lamm Korma – Zartes Lammfleisch in Kokosnuss-Soße – 15,90 €
- 79 Lamm Tikka Masala – Zartes Lammfleisch mit Masala-Soße – 15,90 €

### Enten-Spezialitäten
- 81 Duck Curry – Entenbrustfilet in Currysoße mit feinen Gewürzen – 16,50 €
- 82 Duck Khumb Wala – Entenbrustfilet mit frischen Champignons, Knoblauch und Ingwer in Mandel-Safransoße – 16,50 €
- 83 Duck Jalfrezi 🌶 – Entenbrustfilet mit Paprika, Zwiebeln, Tomaten, grünem Chili und frischem Gemüse – 16,50 €
- 84 Duck Bombay – Entenbrustfilet in Masala-Soße – 16,50 €
- 85 Duck Mango – Entenbrustfilet mit frischer Mango in Mango-Safran-Cashewnuss-Soße – 16,50 €
- 86 Duck Korma – Entenbrustfilet in Kokosnuss-Soße, fein gewürzt – 16,50 €
- 87 Duck Palak – Entenbrustfilet mit Spinat – 16,50 €
- 88 Duck Vindaloo 🌶🌶 – Entenbrustfilet mit Spezialgewürzen aus Goa – 16,50 € *(TODO: In der Quelle steht hier fälschlich „Lammfleisch“, bitte bestätigen)*

### Fisch-Spezialitäten
- 89 Fisch Curry 🌶🌶 – Fischfilet in Curry-Soße – 14,90 €
- 90 Fisch Chili 🌶🌶 – Fischfilet in Chilisoße – 14,90 €
- 91 Fisch Masala – Fischfilet nach ostindischer Art – 14,90 €
- 92 Jheenga Curry – Riesengarnelen ohne Schale in Currysoße mit feinen Gewürzen – 17,90 €
- 93 Jheenga Masala – Riesengarnelen ohne Schale in kräftiger Masala-Soße – 17,90 €
- 94 Jheenga Khumb Wala – Riesengarnelen ohne Schale mit frischen Pfifferlingen, Knoblauch und Ingwer in Mandel-Safransoße – 17,90 €
- 95 Jheenga Goa 🌶🌶 – Riesengarnelen ohne Schale in Kokosnuss-Soße mit ausgewählten Gewürzen nach Goa-Art – 17,90 €
- 96 Jheenga Mango – Riesengarnelen ohne Schale in frischer Mango-Safran-Cashewnuss-Soße, fein gewürzt – 17,90 €

### Vegetarische Spezialitäten
- 97 Aloo Palak – Kartoffeln mit Spinat – 12,90 €
- 98 Mushroom Bhaji – Mit Zwiebeln, Champignons und würziger Soße – 12,90 €
- 99 Jeera Aloo – Kartoffeln mit Kreuzkümmel – 12,90 €
- 101 Malai Kofta – 2 Klößchen aus hausgemachtem Käse mit Kartoffeln und Nüssen – 12,90 €
- 102 Navratan Korma – Gemischtes Gemüse nach Mughlai-Art – 12,90 €
- 103 Shahi Paneer ★ Beliebt – Hausgemachter Käse in Butter-Tomaten-Sahne-Soße, fein gewürzt – 12,90 €
- 104 Palak Paneer ★ Beliebt – Kräftiger Spinat mit hausgemachtem Käse, ayurvedische Art – 12,90 €
- 105 Shahi Baingan ★ Beliebt – Auberginen mit hausgemachtem Käse und Ingwer in Mandelsoße, fein gewürzt – 12,90 €
- 106 Sabzi Kofta – Gemüseklößchen in würziger Curry-Soße – 12,90 €
- 107 Chana Masala (V+) ★ Beliebt – Kichererbsen in Curry mit frischen Tomaten und Ingwer – 12,90 €
- 108 Dal Makhani (V+) – Indisches Nationalgericht: schwarze Linsen mit Butter, ayurvedische Art – 12,90 €
- 109 Karahi Paneer – Frischer, gebratener hausgemachter Käse in Curry-Soße, in der Pfanne serviert – 12,90 €
- 110 Bhindi Masala (V+) ★ Beliebt – Frisches indisches Okra-Gemüse in kräftiger Soße – 12,90 €
- 111 Mixed Vegetables (V+) – Gemischtes frisches Gemüse, pikant gewürzt – 12,90 €
- 112 Baingan Ka Bharta (V+) – Frische Auberginen, püriert mit Zwiebeln und Tomaten, kräftig gewürzt – 12,90 €
- 113 Aloo Tomaten Curry – Kartoffeln mit frischen Tomaten in Curry-Soße – 12,90 €
- 114 Aloo Baingan – Kartoffeln mit Auberginen in Masala-Soße – 12,90 €
- 115 Dal Tarka – Indische gelbe Linsen – 12,90 €
- 116 Paneer Butter Masala ★ Beliebt – Hausgemachter Käse in Masala-Soße – 12,90 €
- 117 Mushroom Paneer – Hausgemachter Käse mit Champignons – 12,90 €

### Reis-Spezialitäten (Biryani)
*Hinweis: Zubereitet mit Basmati-Reis aus Nordindien.*
- 118 Vegetable Biryani – Frisches gemischtes Gemüse mit Mandeln und Rosinen – 13,90 €
- 119 Chicken Biryani – Hühnerfleisch mit Mandeln und Rosinen – 14,90 €
- 120 Mutton Biryani – Lammfleisch mit Mandeln und Rosinen – 15,90 €
- 121 Bombay Biryani – Mit Hühnerbrust- und Lammstreifen, Shrimps und Nüssen – 16,90 €
- 122 Jheenga Biryani – Riesengarnelen mit Mandeln und Rosinen – 19,90 €
- 123 Fisch Biryani – Fischfilet mit Mandeln und Rosinen – 17,90 €

### Thalis
*Hinweis: Verschiedene Gerichte auf einem Teller, serviert auf original indischen Platten. Eine Spezialität unseres Chefkochs – lassen Sie sich überraschen.*
- 127 Vegetable Thali – 3 verschiedene Gemüsegerichte, Raita, Salat, Pappad und Basmati-Reis – 15,90 €
- 128 Bombay Thali – 1 Lamm-, 1 Hühnchen-, 1 Entengericht, Raita, Salat, Pappad, Naan und Basmati-Reis – 16,90 €
- 129 Fish Thali – 3 verschiedene Fischgerichte, Raita, Salat, Pappad und Basmati-Reis – 18,90 €
- 130 Vegetable Thali Grand (für 2 Personen) – Verschiedene Gemüsegerichte, Raita, Salat, Pappad und Basmati-Reis – 29,90 €
- 131 Bombay Thali Grand (für 2 Personen) – Lamm-, Hühnchen-, Entengericht, Raita, Salat, Pappad, Naan und Basmati-Reis – 32,90 €

### Tandoori-Brot
*Hinweis: Frisch gebacken im Holzkohle-Lehmofen.*
- 157 Naan – Ovales Brot aus Hefeteig – 2,50 €
- 158 Butter Naan – Mit Butter – 2,90 €
- 159 Garlic Naan ★ Beliebt – Mit Knoblauch – 3,50 €
- 160 Keema Naan – Gefüllt mit Hühnerfleisch – 4,90 €
- 161 Peshawari Naan – Süßes Brot, gefüllt mit hausgemachtem Käse, Cashewnüssen und Hühnerfleisch – 4,90 €
- 162 Roti – Flaches Vollkornfladenbrot – 2,50 €
- 163 Bhatura – Hefeteigbrot, frittiert – 3,00 €
- 164 Vegetable Paratha – Brot gefüllt mit frischem Gemüse – 4,90 €
- 165 Paneer Kulcha – Hefeteigbrot gefüllt mit hausgemachtem Käse – 4,90 €
- 166 Pappad – Linsenwaffeln mit 3 verschiedenen Soßen – 2,50 €
- 167 Aloo Paratha – Brot gefüllt mit gewürzten Kartoffeln – 4,90 €

### Beilagen
- 137 Plain Dahi – Naturjoghurt – 2,20 €
- 138 Kheera Raita – Gurken-Joghurt – 2,90 €
- 139 Mixed Raita – Joghurt mit Gurken, Zwiebeln, Tomaten und Koriander – 3,50 €
- 144 Basmati-Reis – 4,50 €
- 145 Mixed Pickles – 2,50 €
- 146 Extra Soße – 2,50 €

### Nachspeisen
- 177 Gulab Jamun – Bällchen aus Milch und Quark, in Honig gebacken – 4,90 €
- 178 Halwa – Gekochter Grieß mit Kokosflocken und Rosinen in Milch und Kokosmilch – 5,20 €
- 179 Mango Creme – Hausgemachte Creme aus Mango, Cashewnüssen, Mandeln und Kokosnuss – 4,90 €

### Getränke
- Mango Lassi – 7,50 €
- Mangosaft, Lycheesaft, Guavasaft, Maracujasaft – je 4,00 €
- Coca-Cola, Coca-Cola Zero, Fanta, Spezi, Sprite, Wasser – je 3,50 €
- Bier: Helles, Weißbier, Dunkles, Weißbier alkoholfrei, Leichtes Weißbier alkoholfrei – je 3,50 €
- Wein: Weißwein 0,75 l, Rotwein 0,75 l – je 12,90 €

*(TODO: Getränkegrößen bestätigen; im Restaurant können Preise von der Lieferkarte abweichen.)*

## 9. Technik & Qualität

- **Stack:** Astro + Tailwind CSS (oder ein vergleichbar schlanker statischer Stack). Interaktive Teile wie Curry-Kompass, Filter und Live-Status als kleine Inseln/Komponenten. Ergebnis: statische Seite, deploybar auf Netlify oder Vercel.
- **Performance:** Lighthouse-Ziel ≥ 95 in allen Kategorien auf Mobile. Kein unnötiges JavaScript.
- **Barrierefreiheit:** semantisches HTML, ausreichende Kontraste (auch Safran auf Creme prüfen!), Fokus-Styles, Tastaturbedienung, `alt`-Texte.
- **SEO lokal:** sinnvolle Title/Description, Open-Graph-Bild, `schema.org/Restaurant`-JSON-LD mit Adresse, Telefon, Öffnungszeiten, `servesCuisine: Indian` und Link zur Speisekarte. Keywords natürlich einbauen: „indisches Restaurant Freising“, „Lieferservice Freising“, „nahe Flughafen München“.
- **DSGVO:** keine externen Fonts, kein Google-Maps-Embed ohne Zwei-Klick-Lösung, kein Tracking.
- **Wartbarkeit:** Öffnungszeiten, Kontaktdaten und Speisekarte jeweils zentral in Datendateien. Eine `README.md` erklärt kurz, wie man Preise, Gerichte, Öffnungszeiten und Bilder ändert und wie man deployt.

## 10. Vorgehen & Abnahme

1. Kurzer Plan: Designkonzept in 3–5 Sätzen, Seitenstruktur, Komponentenliste.
2. Datenschicht zuerst (menu, hours, contact), dann Layout und Design-System, dann Seiten, zuletzt Curry-Kompass und Feinschliff.
3. Prüfe am Ende selbst:
   - Mobile (375 px) und Desktop (1440 px) sehen beide hervorragend aus.
   - Alle Preise stimmen mit Abschnitt 8 überein.
   - Live-Status zeigt für Dienstag „Ruhetag“ und berechnet Mittag/Abend richtig.
   - Curry-Kompass liefert für jede Kombination ein sinnvolles Ergebnis (ggf. Fallback auf die nächstbeste Übereinstimmung).
   - Build läuft fehlerfrei.
4. Liste am Ende alle offenen TODOs auf, die das Restaurant bestätigen oder liefern muss.

Qualitätsmaßstab: Wenn ein Gast die Seite öffnet, soll er denken „Da will ich heute Abend essen“. Lieber weniger Elemente, die aber perfekt umgesetzt sind.
