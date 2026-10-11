/**
 * Öffnungszeiten – zentrale Stelle.
 *
 * So ändern Sie Zeiten: Uhrzeiten im Format 'HH:MM' eintragen.
 * Ein Tag ohne Zeitfenster (leere Liste []) gilt als Ruhetag.
 * Wochentage: 1 = Montag … 7 = Sonntag.
 */

export interface Zeitfenster {
  von: string; // 'HH:MM'
  bis: string; // 'HH:MM'
}

export const wochentagNamen: Record<number, string> = {
  1: 'Montag',
  2: 'Dienstag',
  3: 'Mittwoch',
  4: 'Donnerstag',
  5: 'Freitag',
  6: 'Samstag',
  7: 'Sonntag',
};

const mittag: Zeitfenster = { von: '11:30', bis: '14:00' };
const abend: Zeitfenster = { von: '17:30', bis: '22:00' };

export const oeffnungszeiten: Record<number, Zeitfenster[]> = {
  // TODO: Montag bitte bestätigen. Die Quellen widersprechen sich, ob montags
  // zusätzlich abends 17:30–22:00 geöffnet ist. Falls ja: [mittag, abend]
  1: [mittag],
  2: [], // Ruhetag
  3: [mittag, abend],
  4: [mittag, abend],
  5: [mittag, abend],
  6: [mittag, abend],
  7: [mittag, abend],
};

/** „An allen Feiertagen geöffnet“ */
export const feiertageGeoeffnet = true;

/**
 * Zeiten an einem Feiertag, der auf den Ruhetag (Dienstag) fällt.
 * TODO: Bitte bestätigen, ob an Feiertagen, die auf einen Dienstag fallen,
 * wirklich geöffnet ist und zu welchen Zeiten.
 */
export const feiertagsZeitenAmRuhetag: Zeitfenster[] = [mittag, abend];

export const feiertagsHinweis = 'An allen Feiertagen geöffnet';
