import type { DateFormats, Locales, Timezone } from "./global";

export interface GetTimeProps {
  timestamp?: number | null;
  local?: Locales;
  timezone?: Timezone;
  hour12?: boolean;
}

export interface GetDateProps {
  timestamp?: number | null;
  local?: Locales;
  timezone?: Timezone;
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
  timezone?: Timezone;
  hour12?: boolean;
}
