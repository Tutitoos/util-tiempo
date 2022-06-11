#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompareDate = exports.get = exports.getFormatMs = exports.getFormat = exports.getTime = exports.getDate = void 0;
const s = 1000;
const m = s * 60;
const h = m * 60;
const d = h * 24;
const w = d * 7;
const mh = d * 30;
const y = mh * 12;
function getDate(value = new Date(), options = {
    local: "fr-FR",
    timeZone: "Europe/Madrid",
}) {
    if (typeof value === "string")
        value = Number(value);
    return new Date(value).toLocaleDateString(options.local, {
        timeZone: options.timeZone,
    });
}
exports.getDate = getDate;
function getTime(value = new Date(), options = {
    local: "fr-FR",
    timeZone: "Europe/Madrid",
    hour12: false,
}) {
    if (typeof value === "string")
        value = Number(value);
    return new Date(value).toLocaleTimeString(options.local, {
        timeZone: options.timeZone,
        hour12: options.hour12,
    });
}
exports.getTime = getTime;
function getFormat(value = new Date(), options = {
    format: "{h}:{mm}:{ss} {apm} - {DD}/{MM}/{YYYY}",
    local: "pt-PT",
    timeZone: "Europe/Madrid",
    hour12: false,
}) {
    if (typeof value === "string")
        value = Number(value);
    // time = time * 1000;
    if (options.format) {
        let content = options.format;
        let apm = "";
        for (const key of [
            { hourLong: { format: "{hh}", hour: "2-digit" } },
            { hourShort: { format: "{h}", hour: "2-digit" } },
        ]) {
            Object.values(key).forEach((datos) => {
                let hour = Number(new Date(value).toLocaleString(options.local, Object.assign({ timeZone: options.timeZone }, datos)));
                if (options.hour12) {
                    hour < 12 ? (apm = "AM") : (apm = "PM");
                    hour % 12 === 0
                        ? (hour = (hour % 12) + 12)
                        : (hour = hour % 12);
                    content = content === null || content === void 0 ? void 0 : content.replace("{apm}", apm);
                }
                else
                    content = content === null || content === void 0 ? void 0 : content.replace("{apm}", "");
                content = content.replace(
                // @ts-ignore
                key[Object.keys(key)].format, String(hour).padStart(
                // @ts-ignore
                key[Object.keys(key)].format.length - 2, "0"));
            });
        }
        for (const key of [
            { minuteLong: { format: "{mm}", minute: "2-digit" } },
            { minuteShort: { format: "{m}", minute: "2-digit" } },
            { secondLong: { format: "{ss}", second: "2-digit" } },
            { secondShort: { format: "{s}", second: "2-digit" } },
            { dayLong: { format: "{DD}", day: "2-digit" } },
            { dayShort: { format: "{D}", day: "numeric" } },
            { monthLong: { format: "{MM}", month: "2-digit" } },
            { monthShort: { format: "{M}", month: "numeric" } },
            { yearLong: { format: "{YYYY}", year: "numeric" } },
            { yearShort: { format: "{YY}", year: "numeric" } },
        ]) {
            Object.values(key).forEach((datos) => {
                content = content.replace(
                // @ts-ignore
                key[Object.keys(key)].format, new Date(value)
                    .toLocaleString(options.local, Object.assign({ timeZone: options.timeZone }, datos))
                    // @ts-ignore
                    .padStart(key[Object.keys(key)].format.length - 2, "0"));
            });
        }
        return content;
    }
    else
        return `${getDate(value, options)} ${getTime(value, options)}`;
}
exports.getFormat = getFormat;
function getFormatMs(value = 0) {
    var _a;
    if (typeof value === "number")
        value = String(value);
    if (value == "0")
        return "Falta el argumento!";
    const reg = new RegExp(/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|months?|mth|mh|years?|yrs?|y)?$/i).exec(value);
    if (!reg)
        return "El formato no es valido!";
    let content = Number(reg[1]);
    if (!reg[2])
        return "Falta la unidad de tiempo!";
    const type = (_a = reg[2]) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    if (["years", "year", "yrs", "yr", "y"].includes(type))
        content *= y;
    if (["months", "month", "mth", "mh"].includes(type))
        content *= mh;
    if (["weeks", "week", "w"].includes(type))
        content *= w;
    if (["days", "day", "d"].includes(type))
        content *= d;
    if (["hours", "hour", "hrs", "hr", "h"].includes(type))
        content *= h;
    if (["minutes", "minute", "mins", "min", "m"].includes(type))
        content *= m;
    if (["seconds", "second", "secs", "sec", "s"].includes(type))
        content *= s;
    if (["milliseconds", "millisecond", "msecs", "msec", "ms"].includes(type))
        content;
    return content;
}
exports.getFormatMs = getFormatMs;
function get(value = 0) {
    var _a;
    if (typeof value === "number")
        value = String(value);
    if (value == "0")
        return "Falta el argumento!";
    const reg = new RegExp(/^ *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|months?|mth|mh|years?|yrs?|y)?$/i).exec(value);
    if (!reg)
        return "El formato no es valido!";
    let content = 0;
    const type = (_a = reg[1]) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    if (["years", "year", "yrs", "yr", "y"].includes(type))
        content = new Date().getFullYear();
    if (["months", "month", "mth", "mh"].includes(type))
        content = new Date().getMonth();
    if (["weeks", "week", "w"].includes(type))
        content = new Date().getDay();
    if (["days", "day", "d"].includes(type))
        content = new Date().getDate();
    if (["hours", "hour", "hrs", "hr", "h"].includes(type))
        content = new Date().getHours();
    if (["minutes", "minute", "mins", "min", "m"].includes(type))
        content = new Date().getMinutes();
    if (["seconds", "second", "secs", "sec", "s"].includes(type))
        content = new Date().getSeconds();
    if (["milliseconds", "millisecond", "msecs", "msec", "ms"].includes(type))
        content = new Date().getMilliseconds();
    return content;
}
exports.get = get;
function getCompareDate(value = 0, value2 = 0) {
    if (typeof value === "string")
        value = Number(value);
    if (typeof value2 === "string")
        value2 = Number(value);
    const time0 = Math.abs(value - value2);
    let content = "";
    for (const key of [
        { años: Math.floor(time0 / y) },
        { meses: Math.floor(time0 / mh) % 12 },
        { días: Math.floor(time0 / d) % 30 },
        { horas: Math.floor(time0 / h) % 24 },
        { minutos: Math.floor(time0 / m) % 60 },
        { segundos: Math.floor(time0 / s) % 60 },
    ]) {
        // @ts-ignore
        if (key[Object.keys(key)] === 1) {
            switch (Object.keys(key)[0]) {
                case "años": {
                    Object.values(key).map((i) => !i || (content += Object.values(key) + ` año `));
                    break;
                }
                case "meses": {
                    Object.values(key).map((i) => !i || (content += Object.values(key) + ` mes `));
                    break;
                }
                case "días": {
                    Object.values(key).map((i) => !i || (content += Object.values(key) + ` día `));
                    break;
                }
                case "horas": {
                    Object.values(key).map((i) => !i || (content += Object.values(key) + ` hora `));
                    break;
                }
                case "minutos": {
                    Object.values(key).map((i) => !i || (content += Object.values(key) + ` minuto `));
                    break;
                }
                case "segundos": {
                    Object.values(key).map((i) => !i || (content += Object.values(key) + ` segundo `));
                    break;
                }
                default: {
                    Object.values(key).map((i) => !i ||
                        (content +=
                            Object.values(key) +
                                ` ${`${Object.keys(key)}`.substring(0, Object.keys(key)[0].length - 1)} `));
                    break;
                }
            }
        }
        else
            Object.values(key).map((i) => !i ||
                (content += Object.values(key) + ` ${Object.keys(key)} `));
    }
    if (!content)
        content = "0";
    return content;
}
exports.getCompareDate = getCompareDate;
