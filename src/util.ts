import type { DateFormats, DateTypes } from "./types/global";

export const dateTypesList: DateTypes[][] = [
  ["years", "year", "yrs", "yr", "y"],
  ["months", "month", "mth", "mh"],
  ["weeks", "week", "w"],
  ["days", "day", "d"],
  ["hours", "hour", "hrs", "hr", "h"],
  ["minutes", "minute", "mins", "min", "m"],
  ["seconds", "second", "secs", "sec", "s"],
  ["milliseconds", "millisecond", "msecs", "msec", "ms"],
];

export const dateUnits: Array<[string, number]> = [
  ["year", 31536000000],
  ["month", 2592000000],
  ["week", 604800000],
  ["day", 86400000],
  ["hour", 3600000],
  ["minute", 60000],
  ["second", 1000],
];

export const dateFormat = ({
  format,
  unit,
  unitType,
  plural,
  short,
}: {
  format: DateFormats;
  unit: number;
  unitType: string;
  plural: string;
  short: string;
}) => {
  if (format === "long") {
    return `${unit} ${unitType}${unit > 1 ? plural : ""}`;
  }

  return `${unit}${short}`;
};
