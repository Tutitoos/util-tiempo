#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompareDate = exports.get = exports.getFormatMs = exports.getFormat = exports.getTime = exports.getDate = exports.validate = void 0;
const npmUrl = "https://www.npmjs.com/package/util-tiempo";
const s = 1000;
const m = s * 60;
const h = m * 60;
const d = h * 24;
const w = d * 7;
const mh = d * 30;
const y = mh * 12;
const time = (time) => time || new Date();
const local = (local) => local || "fr-FR";
const timeZone = (timeZone) => timeZone || "Europe/Madrid";
const hour12 = (hour12) => hour12 || false;
const format = (format) => format || null;
function validate(args) {
    if (isNaN(args)) {
        if ("Invalid Date" === args || args.endsWith("1970") || !args)
            return new Error(`Argumento invalido! => ${args}`);
    }
    return args;
}
exports.validate = validate;
function getDate(tiempo, args) {
    if (typeof tiempo === "string")
        tiempo = parseFloat(tiempo);
    return validate(new Date(time(tiempo)).toLocaleDateString(local(args === null || args === void 0 ? void 0 : args.local), {
        timeZone: timeZone(args === null || args === void 0 ? void 0 : args.timeZone),
    }));
}
exports.getDate = getDate;
function getTime(tiempo, args) {
    if (typeof tiempo === "string")
        tiempo = parseFloat(tiempo);
    return validate(new Date(time(tiempo)).toLocaleTimeString(local(args === null || args === void 0 ? void 0 : args.local), {
        timeZone: timeZone(args === null || args === void 0 ? void 0 : args.timeZone),
        hour12: hour12(args === null || args === void 0 ? void 0 : args.hour12),
    }));
}
exports.getTime = getTime;
function getFormat(tiempo, args) {
    if (typeof tiempo === "string")
        tiempo = parseFloat(tiempo);
    // time = time * 1000;
    if (format(args === null || args === void 0 ? void 0 : args.format)) {
        let content = args === null || args === void 0 ? void 0 : args.format;
        let apm = "";
        for (const key of [{ hourLong: { format: "{hh}", hour: "2-digit" } }, { hourShort: { format: "{h}", hour: "2-digit" } }]) {
            // @ts-ignore
            Object.values(key).forEach((datos) => {
                let hour = parseInt(new Date(time(Number(tiempo))).toLocaleString((args === null || args === void 0 ? void 0 : args.local) || "pt-PT", Object.assign({ timeZone: timeZone(args === null || args === void 0 ? void 0 : args.timeZone) }, datos)));
                if (args === null || args === void 0 ? void 0 : args.hour12) {
                    hour < 12 ? (apm = "AM") : (apm = "PM");
                    hour % 12 === 0 ? (hour = (hour % 12) + 12) : (hour = hour % 12);
                    content = content === null || content === void 0 ? void 0 : content.replace("{apm}", apm);
                }
                else
                    content = content === null || content === void 0 ? void 0 : content.replace("{apm}", "");
                // @ts-ignore
                content = content.replace(
                // @ts-ignore
                key[Object.keys(key)].format, 
                // @ts-ignore
                String(hour).padStart(key[Object.keys(key)].format.length - 2, "0"));
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
            // @ts-ignore
            Object.values(key).forEach((datos) => {
                // @ts-ignore
                content = content.replace(
                // @ts-ignore
                key[Object.keys(key)].format, new Date(time(Number(tiempo)))
                    .toLocaleString((args === null || args === void 0 ? void 0 : args.local) || "pt-PT", Object.assign({ timeZone: timeZone(args === null || args === void 0 ? void 0 : args.timeZone) }, datos))
                    // @ts-ignore
                    .padStart(key[Object.keys(key)].format.length - 2, "0"));
            });
        }
        return validate(content);
    }
    else
        return `${getDate(tiempo, args)} ${getTime(tiempo, args)}`;
}
exports.getFormat = getFormat;
function getFormatMs(tiempo) {
    var _a;
    if (tiempo !== 0 && !tiempo)
        return new Error(`Falta el argumento de tiempo!`);
    const reg = new RegExp(/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|months?|mth|mh|years?|yrs?|y)?$/i).exec(tiempo.toString());
    if (!reg)
        return new Error(`El formato no es valido!`);
    let content = parseFloat(reg[1]);
    if (!reg[2])
        return new Error(`Falta la unidad de tiempo!`);
    const type = (_a = reg[2]) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    ["years", "year", "yrs", "yr", "y"].keys();
    // @ts-ignore
    if (["years", "year", "yrs", "yr", "y"].includes(type))
        content *= y;
    // @ts-ignore
    if (["months", "month", "mth", "mh"].includes(type))
        content *= mh;
    // @ts-ignore
    if (["weeks", "week", "w"].includes(type))
        content *= w;
    // @ts-ignore
    if (["days", "day", "d"].includes(type))
        content *= d;
    // @ts-ignore
    if (["hours", "hour", "hrs", "hr", "h"].includes(type))
        content *= h;
    // @ts-ignore
    if (["minutes", "minute", "mins", "min", "m"].includes(type))
        content *= m;
    // @ts-ignore
    if (["seconds", "second", "secs", "sec", "s"].includes(type))
        content *= s;
    // @ts-ignore
    if (["milliseconds", "millisecond", "msecs", "msec", "ms"].includes(type))
        content;
    return validate(content);
}
exports.getFormatMs = getFormatMs;
function get(args) {
    var _a;
    if (!args)
        return new Error(`Falta el argumento! - Ver mas: ${npmUrl}#get`);
    const reg = new RegExp(/^ *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|months?|mth|mh|years?|yrs?|y)?$/i).exec(args);
    if (!reg)
        return console.log("\x1b[31m", `El argumento no es valido! - Ver mas: ${npmUrl}#get`);
    let content = 0;
    const type = (_a = reg[1]) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    // @ts-ignore
    if (["years", "year", "yrs", "yr", "y"].includes(type))
        content = new Date().getFullYear();
    // @ts-ignore
    if (["months", "month", "mth", "mh"].includes(type))
        content = new Date().getMonth();
    // @ts-ignore
    if (["weeks", "week", "w"].includes(type))
        content = new Date().getDay();
    // @ts-ignore
    if (["days", "day", "d"].includes(type))
        content = new Date().getDate();
    // @ts-ignore
    if (["hours", "hour", "hrs", "hr", "h"].includes(type))
        content = new Date().getHours();
    // @ts-ignore
    if (["minutes", "minute", "mins", "min", "m"].includes(type))
        content = new Date().getMinutes();
    // @ts-ignore
    if (["seconds", "second", "secs", "sec", "s"].includes(type))
        content = new Date().getSeconds();
    // @ts-ignore
    if (["milliseconds", "millisecond", "msecs", "msec", "ms"].includes(type))
        content = new Date().getMilliseconds();
    return validate(content);
}
exports.get = get;
function getCompareDate(tiempo1, tiempo2 = 0) {
    if (typeof tiempo1 === "string")
        tiempo1 = parseFloat(tiempo1);
    if (typeof tiempo2 === "string")
        tiempo2 = parseFloat(tiempo2);
    const time0 = Math.abs(tiempo1 - tiempo2);
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
                    // @ts-ignore
                    Object.values(key).map((i) => !i || (content += Object.values(key) + ` año `));
                    break;
                }
                case "meses": {
                    // @ts-ignore
                    Object.values(key).map((i) => !i || (content += Object.values(key) + ` mes `));
                    break;
                }
                case "días": {
                    // @ts-ignore
                    Object.values(key).map((i) => !i || (content += Object.values(key) + ` día `));
                    break;
                }
                case "horas": {
                    // @ts-ignore
                    Object.values(key).map((i) => !i || (content += Object.values(key) + ` hora `));
                    break;
                }
                case "minutos": {
                    // @ts-ignore
                    Object.values(key).map((i) => !i || (content += Object.values(key) + ` minuto `));
                    break;
                }
                case "segundos": {
                    // @ts-ignore
                    Object.values(key).map((i) => !i || (content += Object.values(key) + ` segundo `));
                    break;
                }
                default: {
                    // @ts-ignore
                    Object.values(key).map((i) => !i ||
                        (content +=
                            // @ts-ignore
                            Object.values(key) +
                                ` ${`${Object.keys(key)}`.substring(0, Object.keys(key)[0].length - 1)} `));
                    break;
                }
            }
            // @ts-ignore
        }
        else
            Object.values(key).map((i) => !i || (content += Object.values(key) + ` ${Object.keys(key)} `));
    }
    if (!content)
        content = "0";
    return validate(content);
}
exports.getCompareDate = getCompareDate;
