/**
 * SPEISEKARTE – die eine zentrale Datei für alle Gerichte und Preise.
 * Startseite, Speisekarten-Seite und Curry-Kompass lesen alle von hier.
 *
 * So pflegen Sie die Karte:
 * - Preis ändern: Zahl bei `preis` anpassen. Dezimalpunkt verwenden (14.90 = 14,90 €).
 * - Gericht hinzufügen: einen Block `{ nr: …, name: '…', … }` in die passende Kategorie kopieren.
 * - Gericht entfernen: den ganzen Block `{ … },` löschen.
 *
 * Kennzeichnungen:
 * - beliebt: true          → „Beliebt“-Stern
 * - vegetarisch: true      → grünes Blatt
 * - veganMoeglich: true    → „auch vegan“ (in der alten Karte „(V+)“)
 * - schaerfe:              0 = mild, 1 = würzig (ohne Chili-Kennzeichnung),
 *                          2 = scharf (eine Chili), 3 = sehr scharf (zwei Chilis)
 *   Auf der Karte erscheinen Chilis nur bei 2 und 3 – genau wie in der bisherigen Karte.
 *
 * Nur für den Curry-Kompass (beeinflusst die Karte nicht):
 * - protein:   ['huhn'] | ['lamm'] | ['ente'] | ['fisch'] | ['vegetarisch'] – auch mehrere möglich
 * - geschmack: 'cremig' | 'nussig' | 'fruchtig' | 'wuerzig' | 'gruen' – das wichtigste zuerst
 *
 * Hinweis: „vegetarisch“ und die Kompass-Tags wurden aus den Beschreibungen abgeleitet.
 * TODO: Vegetarisch-Kennzeichnung vom Restaurant bestätigen lassen (z. B. Brühen in Suppen).
 */

export type Protein = 'huhn' | 'lamm' | 'ente' | 'fisch' | 'vegetarisch';
export type Geschmack = 'cremig' | 'nussig' | 'fruchtig' | 'wuerzig' | 'gruen';
export type Schaerfe = 0 | 1 | 2 | 3;

export interface Gericht {
  nr?: number;
  name: string;
  beschreibung?: string;
  preis: number;
  /** z. B. 'je' bei Getränkegruppen */
  preisZusatz?: string;
  beliebt?: boolean;
  vegetarisch?: boolean;
  veganMoeglich?: boolean;
  schaerfe?: Schaerfe;
  protein?: Protein[];
  geschmack?: Geschmack[];
  /** interner Vermerk, wird nicht angezeigt */
  todo?: string;
}

export interface Kategorie {
  id: string;
  titel: string;
  /** kurzer Name für die Kategorie-Navigation */
  kurz: string;
  /** Hinweis, der über der Kategorie angezeigt wird */
  hinweis?: string;
  /** Gerichte dieser Kategorie kommen im Curry-Kompass vor */
  kompass?: boolean;
  gerichte: Gericht[];
}

export const speisekarte: Kategorie[] = [
  {
    id: 'suppen',
    titel: 'Suppen',
    kurz: 'Suppen',
    gerichte: [
      { nr: 1, name: 'Daal-Shorba', beschreibung: 'Linsensuppe', preis: 4.9, vegetarisch: true, schaerfe: 1 },
      { nr: 2, name: 'Sabzi-Shorba', beschreibung: 'Gemüsesuppe', preis: 4.9, vegetarisch: true, schaerfe: 1 },
      { nr: 3, name: 'Bohnensuppe', preis: 4.9, vegetarisch: true, schaerfe: 1 },
      { nr: 4, name: 'Chicken-Shorba', beschreibung: 'Hühnerfleischsuppe', preis: 4.9, schaerfe: 1 },
      { nr: 5, name: 'Tomatensuppe', preis: 4.9, vegetarisch: true, schaerfe: 1 },
    ],
  },
  {
    id: 'kalte-vorspeisen',
    titel: 'Kalte Vorspeisen',
    kurz: 'Kalte Vorspeisen',
    gerichte: [
      {
        nr: 10,
        name: 'Chicken-Chana-Chat Delhi',
        beschreibung: 'Indischer Hühnerfleisch- und Kichererbsen-Salat',
        preis: 5.5,
        schaerfe: 1,
      },
    ],
  },
  {
    id: 'warme-vorspeisen',
    titel: 'Warme Vorspeisen',
    kurz: 'Warme Vorspeisen',
    hinweis:
      'Alle warmen Vorspeisen werden mit 3 verschiedenen Dips serviert. Alle Pakoras werden in Kichererbsenmehl gewendet und frittiert.',
    gerichte: [
      { nr: 15, name: 'Vegetable Pakora', beschreibung: 'Frisches, gemischtes Gemüse', preis: 5.9, vegetarisch: true, schaerfe: 1 },
      { nr: 16, name: 'Onion Bhaji', beschreibung: 'Zwiebelringe, kräftig gewürzt und frittiert', preis: 5.9, vegetarisch: true, schaerfe: 1 },
      { nr: 17, name: 'Paneer Pakora', beschreibung: 'Frischer hausgemachter Käse', preis: 5.9, vegetarisch: true, schaerfe: 1 },
      { nr: 18, name: 'Fish Pakora', beschreibung: 'Zartes Seelachsfilet', preis: 5.9, schaerfe: 1 },
      { nr: 19, name: 'Chicken Pakora', beschreibung: 'Zartes Hühnerfleisch', preis: 5.9, schaerfe: 1 },
      { nr: 20, name: 'Jheenga Pakora', beschreibung: 'Marinierte Riesengarnelen ohne Schale', preis: 8.9, schaerfe: 1 },
      { nr: 21, name: 'Vegetable Samosa', beschreibung: '2 kleine Pasteten mit frischem Gemüse gefüllt', preis: 5.9, vegetarisch: true, schaerfe: 1 },
      { nr: 22, name: 'Mixed Starter Dish', beschreibung: 'Gemischter Vorspeisenteller für 2 Personen', preis: 13.5, schaerfe: 1 },
    ],
  },
  {
    id: 'salate',
    titel: 'Salate',
    kurz: 'Salate',
    gerichte: [
      { nr: 28, name: 'Salat Saison', beschreibung: 'Gemischter Salat mit French Dressing oder Essig und Öl', preis: 5.9, vegetarisch: true, schaerfe: 0 },
      { nr: 29, name: 'Tomatensalat', beschreibung: 'Mit Zwiebeln, Essig und Öl', preis: 5.9, vegetarisch: true, schaerfe: 0 },
      { nr: 30, name: 'Salat Bombay', beschreibung: 'Gemischter Salat mit Kichererbsen, Ananas, Käse und Mais', preis: 9.5, vegetarisch: true, schaerfe: 0 },
      {
        nr: 31,
        name: 'Indien Salat',
        beschreibung: 'Mit gebratenen Hühnerbrustfiletstreifen, frischen Champignons, Mais und Zwiebeln',
        preis: 9.5,
        schaerfe: 0,
      },
    ],
  },
  {
    id: 'tandoori',
    titel: 'Tandoori – Khajana',
    kurz: 'Tandoori',
    hinweis:
      'Zubereitet in einem speziellen Holzkohle-Lehmofen aus Indien. Zu allen Tandoori-Gerichten servieren wir ofenfrisches Naan, Reis und Soßen.',
    kompass: true,
    gerichte: [
      {
        nr: 37,
        name: 'Tandoori Chicken',
        beschreibung: 'Hähnchen mariniert nach einem berühmten nordindischen Rezept (mit Knochen)',
        preis: 16.9,
        schaerfe: 1,
        protein: ['huhn'],
        geschmack: ['wuerzig'],
      },
      {
        nr: 38,
        name: 'Chicken Chili Tikka',
        beschreibung: 'Zartes, mariniertes Hühnerfleisch, gegrillt, Bengali-Art',
        preis: 16.9,
        schaerfe: 3,
        protein: ['huhn'],
        geschmack: ['wuerzig'],
      },
      {
        nr: 39,
        name: 'Chicken Tikka',
        beschreibung: 'Zarte marinierte Hühnerfleischstücke, gegrillt',
        preis: 16.9,
        schaerfe: 1,
        protein: ['huhn'],
        geschmack: ['wuerzig'],
      },
      {
        nr: 41,
        name: 'Haryali Malai Kebab',
        beschreibung: 'Zartes Hühnerfleisch in Joghurt mit Spinat-, Minze- und Koriandersoße mariniert, mit Beilage',
        preis: 16.9,
        schaerfe: 0,
        protein: ['huhn'],
        geschmack: ['gruen', 'cremig'],
      },
      {
        nr: 43,
        name: 'Vegetable Tandoori',
        beschreibung:
          'Hausgemachter Käse, Blumenkohl, Tomaten, Zwiebeln, Zucchini, Auberginen und Paprika, in Joghurt und Gewürzen eingelegt, am Spieß gegrillt',
        preis: 16.9,
        vegetarisch: true,
        schaerfe: 1,
        protein: ['vegetarisch'],
        geschmack: ['wuerzig'],
      },
      {
        nr: 44,
        name: 'Fish Tikka',
        beschreibung: 'Frisches Seelachsfilet, mariniert in Joghurt und Gewürzen, knusprig gegrillt',
        preis: 16.9,
        schaerfe: 1,
        protein: ['fisch'],
        geschmack: ['wuerzig'],
      },
      {
        nr: 45,
        name: 'Jheenga Tandoori',
        beschreibung: 'Riesengarnelen ohne Schale, mariniert in Joghurt und Gewürzen, knusprig gegrillt',
        preis: 19.9,
        schaerfe: 1,
        protein: ['fisch'],
        geschmack: ['wuerzig'],
      },
      {
        nr: 46,
        name: 'Mixed-Grill-Platte',
        beschreibung: 'Etwas von allen Tandoori-Köstlichkeiten mit einem Stück Seelachs und einer Garnele',
        preis: 19.9,
        schaerfe: 1,
        protein: ['huhn', 'fisch'],
        geschmack: ['wuerzig'],
      },
      {
        nr: 47,
        name: 'Bombay Teller',
        beschreibung: 'Gebratenes Hühner- und Lammfleisch mit frischem Gemüse, Reis und Naan',
        preis: 16.9,
        schaerfe: 1,
        protein: ['huhn', 'lamm'],
        geschmack: ['wuerzig'],
      },
      {
        nr: 48,
        name: 'Garlic Chicken Tikka',
        beschreibung: 'Mariniertes Hühnerbrustfilet in Knoblauch-Joghurt-Sauce',
        preis: 16.9,
        schaerfe: 1,
        protein: ['huhn'],
        geschmack: ['wuerzig', 'cremig'],
      },
    ],
  },
  {
    id: 'huhn',
    titel: 'Hühnerfleisch-Spezialitäten',
    kurz: 'Huhn',
    kompass: true,
    gerichte: [
      { nr: 51, name: 'Chicken Curry', beschreibung: 'Zartes Hühnerfleisch in Currysoße mit feinen Gewürzen', preis: 14.9, beliebt: true, schaerfe: 1, protein: ['huhn'], geschmack: ['wuerzig'] },
      { nr: 52, name: 'Chicken Badam Pasanda', beschreibung: 'Zartes Hühnerfleisch in Nuss-Soße mit Kokosnussflocken und gemahlenen Mandeln', preis: 14.9, schaerfe: 0, protein: ['huhn'], geschmack: ['nussig', 'cremig'] },
      { nr: 53, name: 'Chicken Sabzi', beschreibung: 'Zartes Hühnerfleisch mit verschiedenem frischem Gemüse', preis: 14.9, schaerfe: 1, protein: ['huhn'], geschmack: ['wuerzig', 'gruen'] },
      { nr: 54, name: 'Karahi Chicken', beschreibung: 'Gebratenes Hühnerfleisch in Currysoße, in der Pfanne serviert', preis: 14.9, schaerfe: 1, protein: ['huhn'], geschmack: ['wuerzig'] },
      { nr: 55, name: 'Chicken Jalfrezi', beschreibung: 'Hühnerfleisch ohne Knochen, mit Paprika, Zwiebeln, Tomaten, grünem Chili', preis: 14.9, schaerfe: 2, protein: ['huhn'], geschmack: ['wuerzig'] },
      { nr: 56, name: 'Chicken Vindaloo', beschreibung: 'Hühnerfleisch mit Spezialgewürzen aus Goa', preis: 14.9, schaerfe: 3, protein: ['huhn'], geschmack: ['wuerzig'] },
      { nr: 57, name: 'Butter Chicken', beschreibung: 'Zartes Hühnerfleisch in Butter-Tomaten-Soße', preis: 14.9, beliebt: true, schaerfe: 0, protein: ['huhn'], geschmack: ['cremig'] },
      { nr: 58, name: 'Chicken Tikka Masala', beschreibung: 'Zartes Hühnerfleisch in Masalasoße', preis: 14.9, beliebt: true, schaerfe: 1, protein: ['huhn'], geschmack: ['wuerzig', 'cremig'] },
      { nr: 60, name: 'Chicken Palak', beschreibung: 'Zartes Hühnerfleisch mit Spinat nach nordindischer Art', preis: 14.9, schaerfe: 1, protein: ['huhn'], geschmack: ['gruen'] },
      { nr: 61, name: 'Mango Chicken', beschreibung: 'Hühnerfleisch in frischer Mango-Safran-Cashewnuss-Soße', preis: 14.9, schaerfe: 0, protein: ['huhn'], geschmack: ['fruchtig', 'nussig'] },
      { nr: 62, name: 'Chicken Korma', beschreibung: 'Hühnerfleisch in frischer Kokosnuss-Soße', preis: 14.9, schaerfe: 0, protein: ['huhn'], geschmack: ['cremig', 'nussig'] },
      { nr: 63, name: 'Chicken Ananas', beschreibung: 'Zartes Hühnerfleisch mit Ananas', preis: 14.9, schaerfe: 0, protein: ['huhn'], geschmack: ['fruchtig'] },
      { nr: 64, name: 'Chicken Dal', beschreibung: 'Zartes Hühnerfleisch mit indischen gelben Linsen gegart', preis: 14.9, schaerfe: 1, protein: ['huhn'], geschmack: ['wuerzig'] },
      { nr: 65, name: 'Chili Chicken', beschreibung: 'Zartes Hühnerbrustfilet, gebraten mit grünem Chili', preis: 14.9, schaerfe: 1, protein: ['huhn'], geschmack: ['wuerzig'] },
    ],
  },
  {
    id: 'lamm',
    titel: 'Lamm-Spezialitäten',
    kurz: 'Lamm',
    kompass: true,
    gerichte: [
      { nr: 66, name: 'Lamm Curry', beschreibung: 'Zartes Lammfleisch in Curry-Soße', preis: 15.9, schaerfe: 1, protein: ['lamm'], geschmack: ['wuerzig'] },
      { nr: 67, name: 'Rogan Josh', beschreibung: 'Zartes Lammfleisch in Rogan-Curry-Soße', preis: 15.9, schaerfe: 1, protein: ['lamm'], geschmack: ['wuerzig'] },
      { nr: 68, name: 'Mughlai Meat', beschreibung: 'Zartes Lammfleisch in Mandel-Safran-Sahnesoße', preis: 15.9, schaerfe: 0, protein: ['lamm'], geschmack: ['nussig', 'cremig'] },
      { nr: 69, name: 'Bhuna Gosht', beschreibung: 'Gebratenes Lammfleisch mit Tomaten und Röstzwiebeln in kräftiger Soße', preis: 15.9, schaerfe: 1, protein: ['lamm'], geschmack: ['wuerzig'] },
      { nr: 70, name: 'Gosht Palak', beschreibung: 'Gebratenes Lammfleisch mit Spinat nach nordindischer Art', preis: 15.9, schaerfe: 1, protein: ['lamm'], geschmack: ['gruen'] },
      { nr: 71, name: 'Mutton Khumb Wala', beschreibung: 'Zartes Lammfleisch mit frischen Champignons, Knoblauch und Ingwer in Mandel-Safransoße', preis: 15.9, schaerfe: 0, protein: ['lamm'], geschmack: ['nussig', 'cremig'] },
      { nr: 72, name: 'Mutton Vindaloo', beschreibung: 'Zartes Lammfleisch mit Spezialgewürzen aus Goa', preis: 15.9, schaerfe: 3, protein: ['lamm'], geschmack: ['wuerzig'] },
      { nr: 73, name: 'Karahi Gosht', beschreibung: 'Gebratenes Lammfleisch in Curry-Soße, in der Pfanne serviert', preis: 15.9, schaerfe: 1, protein: ['lamm'], geschmack: ['wuerzig'] },
      { nr: 74, name: 'Dal Gosht', beschreibung: 'Zartes Lammfleisch mit Korianderblättern und gelben Linsen', preis: 15.9, schaerfe: 1, protein: ['lamm'], geschmack: ['wuerzig', 'gruen'] },
      { nr: 75, name: 'Data Gosht', beschreibung: 'Zartes Lammfleisch in Curry-Joghurt-Mandel-Soße', preis: 15.9, schaerfe: 1, protein: ['lamm'], geschmack: ['nussig', 'wuerzig'] },
      { nr: 76, name: 'Bhindi Gosht', beschreibung: 'Zartes Lammfleisch mit Okra-Gemüse', preis: 15.9, schaerfe: 1, protein: ['lamm'], geschmack: ['wuerzig', 'gruen'] },
      { nr: 77, name: 'Mango Lamb', beschreibung: 'Zartes Lammfleisch in frischer Mango-Safran-Cashewnuss-Soße', preis: 15.9, schaerfe: 0, protein: ['lamm'], geschmack: ['fruchtig', 'nussig'] },
      { nr: 78, name: 'Lamm Korma', beschreibung: 'Zartes Lammfleisch in Kokosnuss-Soße', preis: 15.9, schaerfe: 0, protein: ['lamm'], geschmack: ['cremig', 'nussig'] },
      { nr: 79, name: 'Lamm Tikka Masala', beschreibung: 'Zartes Lammfleisch mit Masala-Soße', preis: 15.9, schaerfe: 1, protein: ['lamm'], geschmack: ['wuerzig', 'cremig'] },
    ],
  },
  {
    id: 'ente',
    titel: 'Enten-Spezialitäten',
    kurz: 'Ente',
    kompass: true,
    gerichte: [
      { nr: 81, name: 'Duck Curry', beschreibung: 'Entenbrustfilet in Currysoße mit feinen Gewürzen', preis: 16.5, schaerfe: 1, protein: ['ente'], geschmack: ['wuerzig'] },
      { nr: 82, name: 'Duck Khumb Wala', beschreibung: 'Entenbrustfilet mit frischen Champignons, Knoblauch und Ingwer in Mandel-Safransoße', preis: 16.5, schaerfe: 0, protein: ['ente'], geschmack: ['nussig', 'cremig'] },
      { nr: 83, name: 'Duck Jalfrezi', beschreibung: 'Entenbrustfilet mit Paprika, Zwiebeln, Tomaten, grünem Chili und frischem Gemüse', preis: 16.5, schaerfe: 2, protein: ['ente'], geschmack: ['wuerzig'] },
      { nr: 84, name: 'Duck Bombay', beschreibung: 'Entenbrustfilet in Masala-Soße', preis: 16.5, schaerfe: 1, protein: ['ente'], geschmack: ['wuerzig', 'cremig'] },
      { nr: 85, name: 'Duck Mango', beschreibung: 'Entenbrustfilet mit frischer Mango in Mango-Safran-Cashewnuss-Soße', preis: 16.5, schaerfe: 0, protein: ['ente'], geschmack: ['fruchtig', 'nussig'] },
      { nr: 86, name: 'Duck Korma', beschreibung: 'Entenbrustfilet in Kokosnuss-Soße, fein gewürzt', preis: 16.5, schaerfe: 0, protein: ['ente'], geschmack: ['cremig', 'nussig'] },
      { nr: 87, name: 'Duck Palak', beschreibung: 'Entenbrustfilet mit Spinat', preis: 16.5, schaerfe: 1, protein: ['ente'], geschmack: ['gruen'] },
      {
        nr: 88,
        name: 'Duck Vindaloo',
        beschreibung: 'Entenbrustfilet mit Spezialgewürzen aus Goa',
        preis: 16.5,
        schaerfe: 3,
        protein: ['ente'],
        geschmack: ['wuerzig'],
        todo: 'In der Quelle steht hier fälschlich „Lammfleisch“, bitte bestätigen',
      },
    ],
  },
  {
    id: 'fisch',
    titel: 'Fisch-Spezialitäten',
    kurz: 'Fisch',
    kompass: true,
    gerichte: [
      { nr: 89, name: 'Fisch Curry', beschreibung: 'Fischfilet in Curry-Soße', preis: 14.9, schaerfe: 3, protein: ['fisch'], geschmack: ['wuerzig'] },
      { nr: 90, name: 'Fisch Chili', beschreibung: 'Fischfilet in Chilisoße', preis: 14.9, schaerfe: 3, protein: ['fisch'], geschmack: ['wuerzig'] },
      { nr: 91, name: 'Fisch Masala', beschreibung: 'Fischfilet nach ostindischer Art', preis: 14.9, schaerfe: 1, protein: ['fisch'], geschmack: ['wuerzig'] },
      { nr: 92, name: 'Jheenga Curry', beschreibung: 'Riesengarnelen ohne Schale in Currysoße mit feinen Gewürzen', preis: 17.9, schaerfe: 1, protein: ['fisch'], geschmack: ['wuerzig'] },
      { nr: 93, name: 'Jheenga Masala', beschreibung: 'Riesengarnelen ohne Schale in kräftiger Masala-Soße', preis: 17.9, schaerfe: 1, protein: ['fisch'], geschmack: ['wuerzig', 'cremig'] },
      { nr: 94, name: 'Jheenga Khumb Wala', beschreibung: 'Riesengarnelen ohne Schale mit frischen Pfifferlingen, Knoblauch und Ingwer in Mandel-Safransoße', preis: 17.9, schaerfe: 0, protein: ['fisch'], geschmack: ['nussig', 'cremig'] },
      { nr: 95, name: 'Jheenga Goa', beschreibung: 'Riesengarnelen ohne Schale in Kokosnuss-Soße mit ausgewählten Gewürzen nach Goa-Art', preis: 17.9, schaerfe: 3, protein: ['fisch'], geschmack: ['wuerzig', 'cremig'] },
      { nr: 96, name: 'Jheenga Mango', beschreibung: 'Riesengarnelen ohne Schale in frischer Mango-Safran-Cashewnuss-Soße, fein gewürzt', preis: 17.9, schaerfe: 0, protein: ['fisch'], geschmack: ['fruchtig', 'nussig'] },
    ],
  },
  {
    id: 'vegetarisch',
    titel: 'Vegetarische Spezialitäten',
    kurz: 'Vegetarisch',
    kompass: true,
    gerichte: [
      { nr: 97, name: 'Aloo Palak', beschreibung: 'Kartoffeln mit Spinat', preis: 12.9, vegetarisch: true, schaerfe: 1, protein: ['vegetarisch'], geschmack: ['gruen'] },
      { nr: 98, name: 'Mushroom Bhaji', beschreibung: 'Mit Zwiebeln, Champignons und würziger Soße', preis: 12.9, vegetarisch: true, schaerfe: 1, protein: ['vegetarisch'], geschmack: ['wuerzig'] },
      { nr: 99, name: 'Jeera Aloo', beschreibung: 'Kartoffeln mit Kreuzkümmel', preis: 12.9, vegetarisch: true, schaerfe: 1, protein: ['vegetarisch'], geschmack: ['wuerzig'] },
      { nr: 101, name: 'Malai Kofta', beschreibung: '2 Klößchen aus hausgemachtem Käse mit Kartoffeln und Nüssen', preis: 12.9, vegetarisch: true, schaerfe: 0, protein: ['vegetarisch'], geschmack: ['cremig', 'nussig'] },
      { nr: 102, name: 'Navratan Korma', beschreibung: 'Gemischtes Gemüse nach Mughlai-Art', preis: 12.9, vegetarisch: true, schaerfe: 0, protein: ['vegetarisch'], geschmack: ['cremig', 'nussig'] },
      { nr: 103, name: 'Shahi Paneer', beschreibung: 'Hausgemachter Käse in Butter-Tomaten-Sahne-Soße, fein gewürzt', preis: 12.9, beliebt: true, vegetarisch: true, schaerfe: 0, protein: ['vegetarisch'], geschmack: ['cremig'] },
      { nr: 104, name: 'Palak Paneer', beschreibung: 'Kräftiger Spinat mit hausgemachtem Käse, ayurvedische Art', preis: 12.9, beliebt: true, vegetarisch: true, schaerfe: 1, protein: ['vegetarisch'], geschmack: ['gruen'] },
      { nr: 105, name: 'Shahi Baingan', beschreibung: 'Auberginen mit hausgemachtem Käse und Ingwer in Mandelsoße, fein gewürzt', preis: 12.9, beliebt: true, vegetarisch: true, schaerfe: 0, protein: ['vegetarisch'], geschmack: ['nussig', 'cremig'] },
      { nr: 106, name: 'Sabzi Kofta', beschreibung: 'Gemüseklößchen in würziger Curry-Soße', preis: 12.9, vegetarisch: true, schaerfe: 1, protein: ['vegetarisch'], geschmack: ['wuerzig'] },
      { nr: 107, name: 'Chana Masala', beschreibung: 'Kichererbsen in Curry mit frischen Tomaten und Ingwer', preis: 12.9, beliebt: true, vegetarisch: true, veganMoeglich: true, schaerfe: 1, protein: ['vegetarisch'], geschmack: ['wuerzig'] },
      { nr: 108, name: 'Dal Makhani', beschreibung: 'Indisches Nationalgericht: schwarze Linsen mit Butter, ayurvedische Art', preis: 12.9, vegetarisch: true, veganMoeglich: true, schaerfe: 0, protein: ['vegetarisch'], geschmack: ['cremig'] },
      { nr: 109, name: 'Karahi Paneer', beschreibung: 'Frischer, gebratener hausgemachter Käse in Curry-Soße, in der Pfanne serviert', preis: 12.9, vegetarisch: true, schaerfe: 1, protein: ['vegetarisch'], geschmack: ['wuerzig'] },
      { nr: 110, name: 'Bhindi Masala', beschreibung: 'Frisches indisches Okra-Gemüse in kräftiger Soße', preis: 12.9, beliebt: true, vegetarisch: true, veganMoeglich: true, schaerfe: 1, protein: ['vegetarisch'], geschmack: ['wuerzig', 'gruen'] },
      { nr: 111, name: 'Mixed Vegetables', beschreibung: 'Gemischtes frisches Gemüse, pikant gewürzt', preis: 12.9, vegetarisch: true, veganMoeglich: true, schaerfe: 1, protein: ['vegetarisch'], geschmack: ['wuerzig', 'gruen'] },
      { nr: 112, name: 'Baingan Ka Bharta', beschreibung: 'Frische Auberginen, püriert mit Zwiebeln und Tomaten, kräftig gewürzt', preis: 12.9, vegetarisch: true, veganMoeglich: true, schaerfe: 1, protein: ['vegetarisch'], geschmack: ['wuerzig'] },
      { nr: 113, name: 'Aloo Tomaten Curry', beschreibung: 'Kartoffeln mit frischen Tomaten in Curry-Soße', preis: 12.9, vegetarisch: true, schaerfe: 1, protein: ['vegetarisch'], geschmack: ['wuerzig'] },
      { nr: 114, name: 'Aloo Baingan', beschreibung: 'Kartoffeln mit Auberginen in Masala-Soße', preis: 12.9, vegetarisch: true, schaerfe: 1, protein: ['vegetarisch'], geschmack: ['wuerzig'] },
      { nr: 115, name: 'Dal Tarka', beschreibung: 'Indische gelbe Linsen', preis: 12.9, vegetarisch: true, schaerfe: 1, protein: ['vegetarisch'], geschmack: ['wuerzig'] },
      { nr: 116, name: 'Paneer Butter Masala', beschreibung: 'Hausgemachter Käse in Masala-Soße', preis: 12.9, beliebt: true, vegetarisch: true, schaerfe: 0, protein: ['vegetarisch'], geschmack: ['cremig', 'wuerzig'] },
      { nr: 117, name: 'Mushroom Paneer', beschreibung: 'Hausgemachter Käse mit Champignons', preis: 12.9, vegetarisch: true, schaerfe: 1, protein: ['vegetarisch'], geschmack: ['wuerzig'] },
    ],
  },
  {
    id: 'biryani',
    titel: 'Reis-Spezialitäten (Biryani)',
    kurz: 'Biryani',
    hinweis: 'Zubereitet mit Basmati-Reis aus Nordindien.',
    kompass: true,
    gerichte: [
      { nr: 118, name: 'Vegetable Biryani', beschreibung: 'Frisches gemischtes Gemüse mit Mandeln und Rosinen', preis: 13.9, vegetarisch: true, schaerfe: 1, protein: ['vegetarisch'], geschmack: ['nussig', 'wuerzig'] },
      { nr: 119, name: 'Chicken Biryani', beschreibung: 'Hühnerfleisch mit Mandeln und Rosinen', preis: 14.9, schaerfe: 1, protein: ['huhn'], geschmack: ['nussig', 'wuerzig'] },
      { nr: 120, name: 'Mutton Biryani', beschreibung: 'Lammfleisch mit Mandeln und Rosinen', preis: 15.9, schaerfe: 1, protein: ['lamm'], geschmack: ['nussig', 'wuerzig'] },
      { nr: 121, name: 'Bombay Biryani', beschreibung: 'Mit Hühnerbrust- und Lammstreifen, Shrimps und Nüssen', preis: 16.9, schaerfe: 1, protein: ['huhn', 'lamm', 'fisch'], geschmack: ['nussig', 'wuerzig'] },
      { nr: 122, name: 'Jheenga Biryani', beschreibung: 'Riesengarnelen mit Mandeln und Rosinen', preis: 19.9, schaerfe: 1, protein: ['fisch'], geschmack: ['nussig', 'wuerzig'] },
      { nr: 123, name: 'Fisch Biryani', beschreibung: 'Fischfilet mit Mandeln und Rosinen', preis: 17.9, schaerfe: 1, protein: ['fisch'], geschmack: ['nussig', 'wuerzig'] },
    ],
  },
  {
    id: 'thalis',
    titel: 'Thalis',
    kurz: 'Thalis',
    hinweis:
      'Verschiedene Gerichte auf einem Teller, serviert auf original indischen Platten. Eine Spezialität unseres Chefkochs – lassen Sie sich überraschen.',
    kompass: true,
    gerichte: [
      { nr: 127, name: 'Vegetable Thali', beschreibung: '3 verschiedene Gemüsegerichte, Raita, Salat, Pappad und Basmati-Reis', preis: 15.9, vegetarisch: true, schaerfe: 1, protein: ['vegetarisch'], geschmack: ['wuerzig', 'cremig'] },
      { nr: 128, name: 'Bombay Thali', beschreibung: '1 Lamm-, 1 Hühnchen-, 1 Entengericht, Raita, Salat, Pappad, Naan und Basmati-Reis', preis: 16.9, schaerfe: 1, protein: ['huhn', 'lamm', 'ente'], geschmack: ['wuerzig', 'cremig'] },
      { nr: 129, name: 'Fish Thali', beschreibung: '3 verschiedene Fischgerichte, Raita, Salat, Pappad und Basmati-Reis', preis: 18.9, schaerfe: 1, protein: ['fisch'], geschmack: ['wuerzig'] },
      // Thalis für 2 Personen sind bewusst nicht im Curry-Kompass (kein protein/geschmack)
      { nr: 130, name: 'Vegetable Thali Grand (für 2 Personen)', beschreibung: 'Verschiedene Gemüsegerichte, Raita, Salat, Pappad und Basmati-Reis', preis: 29.9, vegetarisch: true, schaerfe: 1 },
      { nr: 131, name: 'Bombay Thali Grand (für 2 Personen)', beschreibung: 'Lamm-, Hühnchen-, Entengericht, Raita, Salat, Pappad, Naan und Basmati-Reis', preis: 32.9, schaerfe: 1 },
    ],
  },
  {
    id: 'brot',
    titel: 'Tandoori-Brot',
    kurz: 'Brot',
    hinweis: 'Frisch gebacken im Holzkohle-Lehmofen.',
    gerichte: [
      { nr: 157, name: 'Naan', beschreibung: 'Ovales Brot aus Hefeteig', preis: 2.5, vegetarisch: true, schaerfe: 0 },
      { nr: 158, name: 'Butter Naan', beschreibung: 'Mit Butter', preis: 2.9, vegetarisch: true, schaerfe: 0 },
      { nr: 159, name: 'Garlic Naan', beschreibung: 'Mit Knoblauch', preis: 3.5, beliebt: true, vegetarisch: true, schaerfe: 0 },
      { nr: 160, name: 'Keema Naan', beschreibung: 'Gefüllt mit Hühnerfleisch', preis: 4.9, schaerfe: 0 },
      { nr: 161, name: 'Peshawari Naan', beschreibung: 'Süßes Brot, gefüllt mit hausgemachtem Käse, Cashewnüssen und Hühnerfleisch', preis: 4.9, schaerfe: 0 },
      { nr: 162, name: 'Roti', beschreibung: 'Flaches Vollkornfladenbrot', preis: 2.5, vegetarisch: true, schaerfe: 0 },
      { nr: 163, name: 'Bhatura', beschreibung: 'Hefeteigbrot, frittiert', preis: 3.0, vegetarisch: true, schaerfe: 0 },
      { nr: 164, name: 'Vegetable Paratha', beschreibung: 'Brot gefüllt mit frischem Gemüse', preis: 4.9, vegetarisch: true, schaerfe: 0 },
      { nr: 165, name: 'Paneer Kulcha', beschreibung: 'Hefeteigbrot gefüllt mit hausgemachtem Käse', preis: 4.9, vegetarisch: true, schaerfe: 0 },
      { nr: 166, name: 'Pappad', beschreibung: 'Linsenwaffeln mit 3 verschiedenen Soßen', preis: 2.5, vegetarisch: true, schaerfe: 0 },
      { nr: 167, name: 'Aloo Paratha', beschreibung: 'Brot gefüllt mit gewürzten Kartoffeln', preis: 4.9, vegetarisch: true, schaerfe: 0 },
    ],
  },
  {
    id: 'beilagen',
    titel: 'Beilagen',
    kurz: 'Beilagen',
    gerichte: [
      { nr: 137, name: 'Plain Dahi', beschreibung: 'Naturjoghurt', preis: 2.2, vegetarisch: true, schaerfe: 0 },
      { nr: 138, name: 'Kheera Raita', beschreibung: 'Gurken-Joghurt', preis: 2.9, vegetarisch: true, schaerfe: 0 },
      { nr: 139, name: 'Mixed Raita', beschreibung: 'Joghurt mit Gurken, Zwiebeln, Tomaten und Koriander', preis: 3.5, vegetarisch: true, schaerfe: 0 },
      { nr: 144, name: 'Basmati-Reis', preis: 4.5, vegetarisch: true, schaerfe: 0 },
      { nr: 145, name: 'Mixed Pickles', preis: 2.5, vegetarisch: true, schaerfe: 1 },
      { nr: 146, name: 'Extra Soße', preis: 2.5, schaerfe: 1 },
    ],
  },
  {
    id: 'nachspeisen',
    titel: 'Nachspeisen',
    kurz: 'Nachspeisen',
    gerichte: [
      { nr: 177, name: 'Gulab Jamun', beschreibung: 'Bällchen aus Milch und Quark, in Honig gebacken', preis: 4.9, vegetarisch: true, schaerfe: 0 },
      { nr: 178, name: 'Halwa', beschreibung: 'Gekochter Grieß mit Kokosflocken und Rosinen in Milch und Kokosmilch', preis: 5.2, vegetarisch: true, schaerfe: 0 },
      { nr: 179, name: 'Mango Creme', beschreibung: 'Hausgemachte Creme aus Mango, Cashewnüssen, Mandeln und Kokosnuss', preis: 4.9, vegetarisch: true, schaerfe: 0 },
    ],
  },
  {
    id: 'getraenke',
    titel: 'Getränke',
    kurz: 'Getränke',
    // TODO: Getränkegrößen bestätigen; im Restaurant können Preise von der Lieferkarte abweichen.
    hinweis: 'Im Restaurant können Getränkepreise von der Lieferkarte abweichen.',
    gerichte: [
      { name: 'Mango Lassi', preis: 7.5 },
      { name: 'Säfte', beschreibung: 'Mangosaft, Lycheesaft, Guavasaft, Maracujasaft', preis: 4.0, preisZusatz: 'je' },
      { name: 'Erfrischungsgetränke', beschreibung: 'Coca-Cola, Coca-Cola Zero, Fanta, Spezi, Sprite, Wasser', preis: 3.5, preisZusatz: 'je' },
      { name: 'Bier', beschreibung: 'Helles, Weißbier, Dunkles, Weißbier alkoholfrei, Leichtes Weißbier alkoholfrei', preis: 3.5, preisZusatz: 'je' },
      { name: 'Wein', beschreibung: 'Weißwein 0,75 l, Rotwein 0,75 l', preis: 12.9, preisZusatz: 'je' },
    ],
  },
];

/**
 * Gerichte für „Vier Gründe, heute indisch zu essen“ auf der Startseite (Gerichtsnummern, Reihenfolge = Anzeige).
 * Auf Wunsch der Auftraggeberin genau die vier mit freigestelltem Restaurantfoto (`public/images/schale-<nr>-…`).
 */
export const signatureNummern = [57, 109, 108, 92];

// ---------- Hilfsfunktionen ----------

export const alleGerichte = speisekarte.flatMap((k) => k.gerichte.map((g) => ({ ...g, kategorie: k.id })));

export function gerichtNr(nr: number) {
  const g = alleGerichte.find((x) => x.nr === nr);
  if (!g) throw new Error(`Gericht Nr. ${nr} nicht in der Speisekarte gefunden`);
  return g;
}

const euro = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });
export const preisFormat = (preis: number) => euro.format(preis);
