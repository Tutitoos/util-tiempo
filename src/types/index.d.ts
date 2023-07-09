import type { DateFormats, Locales, Timezones } from "./global";

export interface GetTime {
  timestamp?: number | null;
  local?: Locales;
  timezone?: Timezones;
  hour12?: boolean;
}
export type GetTimeProps = GetTime[] | [GetTime["timestamp"], GetTime["local"], GetTime["timezone"], GetTime["hour12"]];

export interface GetDate {
  timestamp?: number | null;
  local?: Locales;
  timezone?: Timezones;
}
export type GetDateProps = GetDate[] | [GetDate["timestamp"], GetDate["local"], GetDate["timezone"]];

export interface GetCompareDate {
  timestamp1?: number;
  timestamp2?: number | null;
  format?: DateFormats;
}
export type GetCompareDateProps =
  | GetCompareDate[]
  | [GetCompareDate["timestamp1"], GetCompareDate["timestamp2"], GetCompareDate["format"]];

export interface GetFormatDate {
  timestamp?: number;
  format?: string;
  local?: Locales;
  timezone?: Timezones;
  hour12?: boolean;
}
export type GetFormatDateProps =
  | GetFormatDate[]
  | [
      GetFormatDate["timestamp"],
      GetFormatDate["format"],
      GetFormatDate["local"],
      GetFormatDate["timezone"],
      GetFormatDate["hour12"]
    ];

export interface GetNextTime {
  time?: string;
  timezone?: Timezones;
}
export type GetNextTimeProps = GetNextTime[] | [GetNextTime["time"], GetNextTime["timezone"]];
