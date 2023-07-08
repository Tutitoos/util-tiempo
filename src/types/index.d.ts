import type { DateFormats, Locales, Timezones } from "./global";

export interface GetTimeProps {
  timestamp?: number | null;
  local?: Locales;
  timezone?: Timezones;
  hour12?: boolean;
}

export interface GetDateProps {
  timestamp?: number | null;
  local?: Locales;
  timezone?: Timezones;
}

export interface GetCompareDate {
  timestamp1?: number;
  timestamp2?: number | null;
  format?: DateFormats;
}

export interface GetFormatDate {
  timestamp?: number;
  format?: string;
  local?: Locales;
  timezone?: Timezones;
  hour12?: boolean;
}
