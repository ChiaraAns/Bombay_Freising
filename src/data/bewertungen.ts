/**
 * Google-Bewertungen für den Abschnitt „Was unsere Gäste sagen“ auf der Startseite.
 *
 * WICHTIG: Nur echte Angaben eintragen – nichts erfinden, nichts umformulieren.
 * - `sterne` und `anzahl`: aus dem Google-Unternehmensprofil (Google Maps → Bombay → Rezensionen).
 * - `stimmen`: 3–6 Bewertungen wörtlich übernehmen (gern gekürzt mit „…“), mit Vorname und Initial,
 *   Monat/Jahr und Sternzahl. Am besten nur mit Einverständnis der Gäste bzw. über die „Teilen“-Funktion.
 * Solange `stimmen` leer ist, zeigt die Website nur die (geprüften) Sterne und den Link zu Google unter der
 * Überschrift „Unsere Google-Bewertungen“; in der Vorschau (GitHub Pages) erscheinen stattdessen deutlich
 * markierte Platzhalter für die Zitate.
 */
import { kontakt } from './kontakt';

export interface Stimme {
  text: string;
  name: string; // z. B. „Anna K.“
  datum: string; // z. B. „September 2026“
  sterne: 1 | 2 | 3 | 4 | 5;
}

export const bewertungen = {
  google: {
    // TODO: Wert im Google-Unternehmensprofil prüfen und aktualisieren.
    // Vorläufig: Restaurant Guru nennt für Google 4,5 Sterne aus 404 Bewertungen (abgerufen am 12.10.2026).
    sterne: 4.5 as number | null,
    anzahl: 404 as number | null,
    // Monat/Jahr der Angabe – erscheint neben der Anzahl, weil sich die Zahl laufend ändert
    stand: 'Oktober 2026',
    // Erst auf `true` setzen, wenn Sterne und Anzahl im Google-Profil bestätigt sind.
    // Solange `false`: auf der Live-Seite keine Sterne, in der Vorschau mit Hinweis „vorläufig“.
    geprueft: false,
  },
  // Google-Maps-Eintrag des Restaurants (dort sind alle Rezensionen zu lesen)
  profilUrl: kontakt.mapsUrl,
  // TODO: Direktlink „Rezension schreiben“ aus dem Google-Unternehmensprofil eintragen (z. B. https://g.page/r/…/review)
  schreibenUrl: null as string | null,
  // TODO: echte Google-Bewertungen eintragen (siehe oben)
  stimmen: [] as Stimme[],
};
