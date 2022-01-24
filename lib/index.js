#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.getFormatMs = exports.getFormat = exports.getTime = exports.getDate = exports.validate = void 0;
const npmUrl = 'https://www.npmjs.com/package/util-tiempo';
const s = 1000;
const m = s * 60;
const h = m * 60;
const d = h * 24;
const w = d * 7;
const mh = d * 30;
const y = mh * 12;
const time = (time) => time || new Date();
const local = (local) => local || 'fr-FR';
const timeZone = (timeZone) => timeZone || 'Europe/Madrid';
const hour12 = (hour12) => hour12 || false;
const format = (format) => format || null;
function validate(args) {
    if ('Invalid Date' === args || (args === null || args === void 0 ? void 0 : args.endsWith('1970')) || !args)
        return console.log('\x1b[31m', `Argumento invalido! => ${args}`);
    return args;
}
exports.validate = validate;
function getDate(tiempo, args) {
    if (tiempo && isNaN(tiempo))
        return new Error(`La fecha no es valida! - Ver mas: ${npmUrl}#getDate`);
    if (typeof tiempo === "string")
        tiempo = parseFloat(tiempo);
    return validate(new Date(time(tiempo)).toLocaleDateString(local(args === null || args === void 0 ? void 0 : args.local), { timeZone: timeZone(args === null || args === void 0 ? void 0 : args.timeZone) }));
}
exports.getDate = getDate;
function getTime(tiempo, args) {
    if (tiempo && isNaN(tiempo))
        return new Error(`La fecha no es valida! - Ver mas: ${npmUrl}#getTime`);
    if (typeof tiempo === "string")
        tiempo = parseFloat(tiempo);
    return validate(new Date(time(tiempo)).toLocaleTimeString(local(args === null || args === void 0 ? void 0 : args.local), {
        timeZone: timeZone(args === null || args === void 0 ? void 0 : args.timeZone),
        hour12: hour12(args === null || args === void 0 ? void 0 : args.hour12)
    }));
}
exports.getTime = getTime;
function getFormat(tiempo, args) {
    if (tiempo && isNaN(tiempo))
        return new Error(`La fecha no es valida! - Ver mas: ${npmUrl}#getFormat`);
    if (typeof tiempo === "string")
        tiempo = parseFloat(tiempo);
    // time = time * 1000;
    if (format(args === null || args === void 0 ? void 0 : args.format)) {
        let content = args === null || args === void 0 ? void 0 : args.format;
        let apm = "";
        for (const key of [
            { hourLong: { format: "{hh}", hour: "2-digit" } },
            { hourShort: { format: "{h}", hour: "2-digit" } },
        ]) {
            Object.values(key).forEach((datos) => {
                let hour = parseInt(new Date(time(tiempo)).toLocaleString((args === null || args === void 0 ? void 0 : args.local) || 'pt-PT', Object.assign({ timeZone: timeZone(args === null || args === void 0 ? void 0 : args.timeZone) }, datos)));
                if (args === null || args === void 0 ? void 0 : args.hour12) {
                    hour < 12 ? apm = 'AM' : apm = 'PM';
                    hour % 12 === 0 ? hour = (hour % 12) + 12 : hour = hour % 12;
                    content = content === null || content === void 0 ? void 0 : content.replace("{apm}", apm);
                }
                else
                    content = content === null || content === void 0 ? void 0 : content.replace("{apm}", "");
                // @ts-ignore
                content = content.replace(key[Object.keys(key)].format, String(hour).padStart(key[Object.keys(key)].format.length - 2, "0"));
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
                // @ts-ignore
                content = content.replace(key[Object.keys(key)].format, new Date(this.time(tiempo)).toLocaleString((args === null || args === void 0 ? void 0 : args.local) || 'pt-PT', Object.assign({ timeZone: this.timeZone(args === null || args === void 0 ? void 0 : args.timeZone) }, datos)).padStart(key[Object.keys(key)].format.length - 2, "0"));
            });
        }
        return validate(content);
    }
    else
        return `${getDate(tiempo, args)} ${getTime(tiempo, args)}`;
}
exports.getFormat = getFormat;
function getFormatMs(tiempo) {
    if (tiempo !== 0 && !tiempo)
        return new Error(`Falta el argumento de tiempo! - Ver mas: ${npmUrl}#getFormatMs`);
    const reg = new RegExp(/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|months?|mth|mh|years?|yrs?|y)?$/i).exec(tiempo.toString());
    if (!reg)
        return new Error(`El formato no es valido! - Ver mas: ${npmUrl}#getFormatMs`);
    let content = parseFloat(reg[1]);
    if (!reg[2])
        return new Error(`Falta la unidad de tiempo! - Ver mas: ${npmUrl}#getFormatMs`);
    let type = (reg[2]).toLowerCase();
    ['years', 'year', 'yrs', 'yr', 'y'].keys();
    if (['years', 'year', 'yrs', 'yr', 'y'].includes(type))
        content *= y;
    if (['months', 'month', 'mth', 'mh'].includes(type))
        content *= mh;
    if (['weeks', 'week', 'w'].includes(type))
        content *= w;
    if (['days', 'day', 'd'].includes(type))
        content *= d;
    if (['hours', 'hour', 'hrs', 'hr', 'h'].includes(type))
        content *= h;
    if (['minutes', 'minute', 'mins', 'min', 'm'].includes(type))
        content *= m;
    if (['seconds', 'second', 'secs', 'sec', 's'].includes(type))
        content *= s;
    if (['milliseconds', 'millisecond', 'msecs', 'msec', 'ms'].includes(type))
        content;
    return validate(content.toString());
}
exports.getFormatMs = getFormatMs;
function get(args) {
    if (!args)
        return new Error(`Falta el argumento! - Ver mas: ${npmUrl}#get`);
    const reg = new RegExp(/^ *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|months?|mth|mh|years?|yrs?|y)?$/i).exec(args);
    if (!reg)
        return console.log('\x1b[31m', `El argumento no es valido! - Ver mas: ${npmUrl}#get`);
    let content = reg[0];
    let type = (reg[1]).toLowerCase();
    if (['years', 'year', 'yrs', 'yr', 'y'].includes(type))
        content = new Date().getFullYear().toString();
    if (['months', 'month', 'mth', 'mh'].includes(type))
        content = new Date().getMonth().toString();
    if (['weeks', 'week', 'w'].includes(type))
        content = new Date().getDay().toString();
    if (['days', 'day', 'd'].includes(type))
        content = new Date().getDate().toString();
    if (['hours', 'hour', 'hrs', 'hr', 'h'].includes(type))
        content = new Date().getHours().toString();
    if (['minutes', 'minute', 'mins', 'min', 'm'].includes(type))
        content = new Date().getMinutes().toString();
    if (['seconds', 'second', 'secs', 'sec', 's'].includes(type))
        content = new Date().getSeconds().toString();
    if (['milliseconds', 'millisecond', 'msecs', 'msec', 'ms'].includes(type))
        content = new Date().getMilliseconds().toString();
    return validate(content);
}
exports.get = get;
//# sourceMappingURL=index.js.map