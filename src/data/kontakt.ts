/**
 * Kontaktdaten – zentrale Stelle für Name, Adresse, Telefon und Links.
 * Änderungen hier wirken auf allen Seiten, im Footer und in den Suchmaschinen-Daten (JSON-LD).
 */
export const kontakt = {
  name: 'Bombay',
  zusatz: 'Indische Spezialitäten',
  strasse: 'Obere Hauptstraße 67',
  plz: '85354',
  ort: 'Freising',
  ortsteil: 'Altstadt',
  land: 'DE',

  telefonAnzeige: '08161 / 49 65 102',
  telefonLink: 'tel:+4981614965102',
  telefonInternational: '+49 8161 4965102',

  email: 'info@restaurant-bombay-freising.de',

  bestellUrl: 'https://restaurant-bombayfreising.de/bombay-freising/delivery',
  iosAppUrl: 'https://apps.apple.com/de/app/bombay-freising/id1463946559',

  // Link zu Google Maps (kein eingebettetes Kartenfenster, DSGVO)
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('Bombay Indische Spezialitäten, Obere Hauptstraße 67, 85354 Freising'),

  // TODO: Endgültige Domain bestätigen (alle alten Domains sollen hierher weiterleiten).
  website: 'https://restaurant-bombay-freising.de',
} as const;

export const adresseEinzeilig = `${kontakt.strasse}, ${kontakt.plz} ${kontakt.ort}`;
