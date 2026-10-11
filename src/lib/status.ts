import {
  oeffnungszeiten,
  feiertageGeoeffnet,
  feiertagsZeitenAmRuhetag,
  wochentagNamen,
  type Zeitfenster,
} from '../data/oeffnungszeiten';

const ZEITZONE = 'Europe/Berlin';

export interface BerlinZeit {
  jahr: number;
  monat: number; // 1–12
  tag: number;
  wochentag: number; // 1 = Montag … 7 = Sonntag
  minuten: number; // Minuten seit Mitternacht
}

const wochentagKurz: Record<string, number> = { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 7 };

export function berlinZeit(datum: Date): BerlinZeit {
  const teile = new Intl.DateTimeFormat('en-GB', {
    timeZone: ZEITZONE,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23',
  }).formatToParts(datum);
  const wert = (typ: string) => teile.find((t) => t.type === typ)?.value ?? '';
  return {
    jahr: Number(wert('year')),
    monat: Number(wert('month')),
    tag: Number(wert('day')),
    wochentag: wochentagKurz[wert('weekday')] ?? 1,
    minuten: Number(wert('hour')) * 60 + Number(wert('minute')),
  };
}

const zuMinuten = (hhmm: string) => {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
};

/** Ostersonntag nach Gauß/Anonymous-Gregorian-Algorithmus (UTC-Datum). */
function ostersonntag(jahr: number): Date {
  const a = jahr % 19;
  const b = Math.floor(jahr / 100);
  const c = jahr % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const monat = Math.floor((h + l - 7 * m + 114) / 31);
  const tag = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(Date.UTC(jahr, monat - 1, tag));
}

/** Gesetzliche Feiertage in Bayern (inkl. Mariä Himmelfahrt, gilt in Freising). */
export function istFeiertagBayern(jahr: number, monat: number, tag: number): boolean {
  const fest = ['1-1', '1-6', '5-1', '8-15', '10-3', '11-1', '12-25', '12-26'];
  if (fest.includes(`${monat}-${tag}`)) return true;
  const ostern = ostersonntag(jahr).getTime();
  const tagMs = 86_400_000;
  const heute = Date.UTC(jahr, monat - 1, tag);
  // Karfreitag, Ostermontag, Christi Himmelfahrt, Pfingstmontag, Fronleichnam
  return [-2, 1, 39, 50, 60].some((offset) => ostern + offset * tagMs === heute);
}

export function addiereTage(z: BerlinZeit, n: number): BerlinZeit {
  const d = new Date(Date.UTC(z.jahr, z.monat - 1, z.tag + n));
  return {
    jahr: d.getUTCFullYear(),
    monat: d.getUTCMonth() + 1,
    tag: d.getUTCDate(),
    wochentag: ((z.wochentag - 1 + n) % 7 + 7) % 7 + 1,
    minuten: 0,
  };
}

export function zeitenFuer(z: BerlinZeit): Zeitfenster[] {
  const regulaer = oeffnungszeiten[z.wochentag] ?? [];
  if (feiertageGeoeffnet && regulaer.length === 0 && istFeiertagBayern(z.jahr, z.monat, z.tag)) {
    return feiertagsZeitenAmRuhetag;
  }
  return regulaer;
}

export interface Status {
  offen: boolean;
  text: string;
  /** 'offen' | 'bald' (öffnet heute noch) | 'zu' (heute nicht mehr / Ruhetag) */
  zustand: 'offen' | 'bald' | 'zu';
}

function naechsteOeffnung(z: BerlinZeit): string {
  for (let n = 1; n <= 7; n++) {
    const tag = addiereTage(z, n);
    const zeiten = zeitenFuer(tag);
    if (zeiten.length) {
      const wann = n === 1 ? 'morgen' : `${wochentagNamen[tag.wochentag]}`;
      return `${n === 1 ? 'Morgen' : 'Wieder ' + wann} ab ${zeiten[0].von}`;
    }
  }
  return '';
}

export function berechneStatus(datum: Date = new Date()): Status {
  const z = berlinZeit(datum);
  const zeiten = zeitenFuer(z);

  if (zeiten.length === 0) {
    return { offen: false, zustand: 'zu', text: `Heute Ruhetag · ${naechsteOeffnung(z)}` };
  }

  for (const f of zeiten) {
    const von = zuMinuten(f.von);
    const bis = zuMinuten(f.bis);
    if (z.minuten >= von && z.minuten < bis) {
      return { offen: true, zustand: 'offen', text: `Jetzt geöffnet – Küche bis ${f.bis}` };
    }
    if (z.minuten < von) {
      return { offen: false, zustand: 'bald', text: `Öffnet heute um ${f.von}` };
    }
  }

  return { offen: false, zustand: 'zu', text: `Heute geschlossen · ${naechsteOeffnung(z)}` };
}

/** Heutiger Wochentag (1–7) in Berlin – für die Hervorhebung in der Tabelle. */
export const heutigerWochentag = (datum: Date = new Date()) => berlinZeit(datum).wochentag;
