# Bombay Freising – Arbeitsregeln

## Gestaltung: IMMER mit impeccable (ausnahmslos)

Jede Arbeit an Gestaltung, Layout, Texten auf der Seite, Bewegung, Komponenten oder neuen Seiten läuft **ausnahmslos** über den Skill `impeccable` (`.claude/skills/impeccable`). Auch kleine Änderungen und Folgewünsche. Das ist eine ausdrückliche Vorgabe der Auftraggeberin.

Ablauf bei jeder Design-Aufgabe:

1. Skill `impeccable` aufrufen (mit passendem Befehl, z. B. `polish`, `animate`, `layout`, `typeset`, `critique`, `audit`; neue Seiten über den new-work-Ablauf).
2. Einmal pro Session `.claude/skills/impeccable/scripts/impeccable context` ausführen und dessen Anweisungen folgen.
3. Die Referenz des Befehls aus `.claude/skills/impeccable/reference/` laden; **vor jeder UI-Änderung** `reference/craft-floor.md` lesen.
4. `PRODUCT.md`, `DESIGN.md` und den Surface-Brief (`.impeccable/surfaces/`) beachten. Ändert sich die Gestaltung grundsätzlich, den Direction contract im Surface-Brief aktualisieren.
5. Der Design-Detektor läuft als Hook automatisch (`.claude/settings.json`, `.impeccable/config.json`). Befunde beheben, nicht stummschalten.
6. Nach jeder größeren Runde: Screenshots Desktop (1440) und Handy (375/390) unter `.impeccable/review/`, dann eine **unabhängige Abnahme** durch einen frischen Prüfer nach `reference/degraded/finish-reviewer.md`; Befunde abarbeiten.
7. `DESIGN.md` und `.impeccable/design.json` nachziehen, wenn sich Tokens, Komponenten oder Regeln ändern.

## Projektfakten

- Sprache Deutsch, Anrede „Sie“; nur im Curry-Kompass „du“ (so im Briefing).
- Keine Fakten erfinden (Jahreszahlen, Auszeichnungen, Bewertungen, Lieferkosten …). Lücken als `TODO` markieren.
- Inhalte zentral in `src/data/` (Speisekarte, Öffnungszeiten, Kontakt, Bestellung, Angebote).
- Prüfen: `npm test` (Live-Status, Curry-Kompass, Preise gegen `Briefing.md`, Bestell-Link) und `npm run build`.
- Vorschau in **Fassungen** (Wunsch der Auftraggeberin): Jede Überarbeitungsrunde bekommt einen **neuen Link**, bestehende Fassungen werden nie überschrieben.
  - Bauen: `BASE_PATH=/Bombay_Freising/fassung-N VORSCHAU=1 npx astro build`, Inhalt von `dist/` nach `fassung-N/` auf Branch `gh-pages` (andere Ordner dort nicht anfassen, `.nojekyll` bleibt) → https://chiaraans.github.io/Bombay_Freising/fassung-N/
  - Den Quellstand jeder Fassung als Branch `fassung-N` sichern.
  - Bisher: `fassung-1` (Glut und Papier, Reißkanten), `fassung-2` (Glut bei Nacht, nach Referenz „Fenster“), `fassung-3` (Gold-Logo mit Vorhang, Gold-Bordüren, dunkle Speisekarte mit Warenkorb, Google-Bewertungen), `fassung-4` (wie 3, dazu Fotos für alle sechs Signature-Gerichte), `fassung-5` (wie 4, dazu echte Google-Bewertungen: 4,5 Sterne, 417 Bewertungen, drei Auszüge), `fassung-6` (wie 5, Bestellen nur noch über das Smart-App-Portal, kein eigener Warenkorb), `fassung-7` (wie 6, ohne „Was man bei uns schmeckt“, vier echte freigestellte Gerichte statt sechs KI-Bilder). Die Wurzel https://chiaraans.github.io/Bombay_Freising/ zeigt unverändert Fassung 1.
