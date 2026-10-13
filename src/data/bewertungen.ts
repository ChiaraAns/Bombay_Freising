/**
 * Google-Bewertungen für den Abschnitt „Was unsere Gäste sagen“ auf der Startseite.
 *
 * WICHTIG: Nur echte Angaben eintragen – nichts erfinden, nichts umformulieren.
 * - `sterne` und `anzahl`: aus dem Google-Unternehmensprofil (Google Maps → Bombay → Rezensionen).
 * - `stimmen`: 3–6 Bewertungen wörtlich übernehmen (gern gekürzt mit „…“); Vorname mit Initial,
 *   Monat/Jahr und Sternzahl nur, wenn sie vorliegen.
 * Solange `stimmen` leer ist, zeigt die Website nur die (geprüften) Sterne und den Link zu Google unter der
 * Überschrift „Unsere Google-Bewertungen“; in der Vorschau (GitHub Pages) erscheinen stattdessen deutlich
 * markierte Platzhalter für die Zitate.
 */
import { kontakt } from './kontakt';

export interface Stimme {
  text: string;
  // Name, Datum und Sterne nur eintragen, wenn sie zur Bewertung vorliegen – sonst weglassen, nichts ergänzen
  name?: string; // z. B. „Anna K.“
  datum?: string; // z. B. „September 2026“
  sterne?: 1 | 2 | 3 | 4 | 5;
}

export const bewertungen = {
  google: {
    // Quelle: öffentliches Google-Unternehmensprofil, Stand 06.10.2026 (Recherche im Projekt
    // chiaraans/bombay-freising, recherche/bombay.md). Die Zahl ändert sich laufend – ab und zu nachtragen.
    sterne: 4.5 as number | null,
    anzahl: 417 as number | null,
    // Monat/Jahr der Angabe – erscheint neben der Anzahl
    stand: 'Oktober 2026',
    // Aus dem Google-Profil übernommen (s. o.); bei Zweifeln auf `false` setzen, dann erscheinen keine Sterne.
    geprueft: true,
  },
  // Google-Maps-Eintrag des Restaurants (dort sind alle Rezensionen zu lesen)
  profilUrl: kontakt.mapsUrl,
  // TODO: Direktlink „Rezension schreiben“ aus dem Google-Unternehmensprofil eintragen (z. B. https://g.page/r/…/review)
  schreibenUrl: null as string | null,
  // Wörtliche Auszüge aus den Google-Rezensionen (Stand 06.10.2026, Quelle wie oben).
  // Namen der Bewertenden bewusst nicht übernommen; Datum und Sterne je Auszug liegen nicht vor.
  // TODO: Weitere Bewertungen gern mit Vorname, Monat und Sternen ergänzen (z. B. aus Screenshots).
  stimmen: [
    { text: 'Sehr gutes Essen, kurze Wartezeiten, Bedienung sehr freundlich und zuvorkommend.' },
    { text: 'Sehr schmackhafte, günstige und reichhaltige Gerichte zum Mittagstisch' },
    { text: 'Die Hauptspeise besaß genügend Reis für die Fleisch/Soßen Portion.' },
  ] as Stimme[],
};
