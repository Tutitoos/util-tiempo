import type { DateList } from "./types/global";

export const dateList: DateList = {
  year: {
    name: "año",
    plural: "s",
    aliases: ["years", "year", "yrs", "yr", "y"],
    unit: 31556926000,
    get: () => new Date().getFullYear(),
  },
  month: {
    name: "mes",
    plural: "es",
    aliases: ["months", "month", "mth", "mh"],
    unit: 2629743000,
    get: () => new Date().getMonth(),
  },
  week: {
    name: "semana",
    plural: "s",
    aliases: ["weeks", "week", "wk", "w"],
    unit: 604800000,
    get() {
      const date = new Date();
      const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
      const firstDayOfWeek = firstDayOfMonth.getDay();
      const offsetDate = date.getDate() + firstDayOfWeek - 1;
      return Math.floor(offsetDate / 7);
    },
  },
  day: {
    name: "día",
    plural: "s",
    aliases: ["days", "day", "d"],
    unit: 86400000,
    get: () => new Date().getDate(),
  },
  hour: {
    name: "hora",
    plural: "s",
    aliases: ["hours", "hour", "hrs", "hr", "h"],
    unit: 3600000,
    get: () => new Date().getHours(),
  },
  minute: {
    name: "minuto",
    plural: "s",
    aliases: ["minutes", "minute", "mins", "min", "m"],
    unit: 60000,
    get: () => new Date().getMinutes(),
  },
  second: {
    name: "segundo",
    plural: "s",
    aliases: ["seconds", "second", "secs", "sec", "s"],
    unit: 1000,
    get: () => new Date().getSeconds(),
  },
  millisecond: {
    name: "milisegundo",
    plural: "s",
    aliases: ["milliseconds", "millisecond", "msecs", "msec", "ms"],
    unit: 1,
    get: () => new Date().getMilliseconds(),
  },
};
