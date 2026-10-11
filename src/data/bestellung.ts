/**
 * Einstellungen für die Online-Bestellung (/bestellen).
 *
 * Übermittlung:
 * - `endpunkt: null` → die fertige Bestellung öffnet sich als E-Mail an das Restaurant (kontakt.email).
 *   Der Gast muss die E-Mail nur noch absenden. Funktioniert ohne Server.
 * - `endpunkt: 'https://…'` → die Bestellung wird als JSON per POST an diese Adresse geschickt
 *   (z. B. ein Formular-Dienst wie Formspree oder ein eigenes Kassensystem).
 *   TODO: Empfangsweg mit dem Restaurant festlegen (E-Mail, Formular-Dienst, Kassensystem, Drucker).
 */
export const bestellung = {
  endpunkt: null as string | null,

  /** Vorlaufzeit bis zur frühesten Wunschzeit in Minuten. TODO: mit der Küche abstimmen. */
  vorlaufMinuten: 30,
  /** Abstand der wählbaren Zeiten in Minuten */
  rasterMinuten: 15,

  lieferung: {
    aktiv: true,
    /** Mindestbestellwert in Euro, z. B. 15 – TODO: bestätigen (null = keiner angezeigt) */
    mindestbestellwert: null as number | null,
    /** Liefergebühr in Euro – TODO: bestätigen (null = nicht angezeigt) */
    gebuehr: null as number | null,
    /** Liefergebiet als Text, z. B. „Freising und Neustift“ – TODO: bestätigen (null = nicht angezeigt) */
    gebiet: null as string | null,
  },
  abholung: {
    aktiv: true,
  },
  /** Hinweis zur Bezahlung, z. B. „Bezahlung bar oder mit Karte bei Übergabe“ – TODO: bestätigen (null = nicht angezeigt) */
  zahlungshinweis: null as string | null,
};
