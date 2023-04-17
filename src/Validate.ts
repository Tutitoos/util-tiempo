import type { DateFormats, DateTypes, Locales, Timezones } from "./types/global";

class Validate {
  static timestamps(
    timestamp1 = Date.now(),
    timestamp2?: number | null
  ): {
    timestamp1: number;
    timestamp2: number;
  } {
    const date = new Date(timestamp1);
    const fullYear = date.getFullYear();

    if (fullYear <= 2000 && !timestamp2) {
      timestamp2 = timestamp1;
      timestamp1 = 0;
    }

    if (fullYear > 2000 && !timestamp2) {
      timestamp2 = Date.now();
    }

    if (!timestamp2) timestamp2 = Date.now();

    return {
      timestamp1,
      timestamp2,
    };
  }

  static timestamp(timestamp?: number | null): number {
    return timestamp ?? Date.now();
  }

  static locale(locale?: Locales): Locales {
    return locale ?? "fr-FR";
  }

  static timezone(timezone?: Timezones): Timezones {
    return timezone ?? "Europe/Madrid";
  }

  static hour12(hour12?: boolean): boolean {
    return hour12 ?? false;
  }

  static dateType(dateType?: DateTypes): DateTypes {
    return dateType ?? "ms";
  }

  static unit(unit?: number | string): number {
    return Number(unit) || 0;
  }

  static dateFormat(dateFormat?: DateFormats): DateFormats {
    return dateFormat ?? "long";
  }
}

export default Validate;
