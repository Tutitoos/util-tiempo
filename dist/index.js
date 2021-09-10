#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormatMs = exports.getCompareDate = exports.getFormat = exports.getTime = exports.getDate = void 0;
const s = 1000;
const m = s * 60;
const h = m * 60;
const d = h * 24;
const w = d * 7;
const mh = d * 30;
const y = mh * 12;
class main {
    constructor() {
        this.time = (time) => time || new Date();
        this.local = (local) => local || 'fr-FR';
        this.timeZone = (timeZone) => timeZone || 'Europe/Madrid';
        this.hour12 = (hour12) => hour12 || false;
        this.format = (format) => format || null;
    }
    handleError(args) {
        if (isNaN(args)) {
            if (['Invalid Date'].includes(args) || args.endsWith('1970') || !args)
                return console.log('\x1b[31m', `Argumento invalido! => ${args}`);
        }
        return args;
    }
    getDate(time, args) {
        if (time && isNaN(time))
            return console.log('\x1b[31m', 'La fecha no es valida!');
        if (typeof time === "string")
            time = parseFloat(time);
        return this.handleError(new Date(this.time(time)).toLocaleDateString(this.local(args === null || args === void 0 ? void 0 : args.local), { timeZone: this.timeZone(args === null || args === void 0 ? void 0 : args.timeZone) }));
    }
    getTime(time, args) {
        if (time && isNaN(time))
            return console.log('\x1b[31m', 'El tiempo no es valido!');
        if (typeof time === "string")
            time = parseFloat(time);
        return this.handleError(new Date(this.time(time)).toLocaleTimeString(this.local(args === null || args === void 0 ? void 0 : args.local), { timeZone: this.timeZone(args === null || args === void 0 ? void 0 : args.timeZone), hour12: this.hour12(args === null || args === void 0 ? void 0 : args.hour12) }));
    }
    getFormat(time, args) {
        if (time && isNaN(time))
            return console.log('\x1b[31m', 'El tiempo no es valido!');
        if (typeof time === "string")
            time = parseFloat(time);
        // time = time * 1000;
        if (this.format(args === null || args === void 0 ? void 0 : args.format)) {
            let content = args === null || args === void 0 ? void 0 : args.format;
            let apm = "";
            for (const key of [
                { hourLong: { format: "{hh}", hour: "2-digit" } },
                { hourShort: { format: "{h}", hour: "2-digit" } },
            ]) {
                Object.values(key).forEach((datos) => {
                    console.log(new Date(this.time(time)));
                    let hour = parseInt(new Date(this.time(time)).toLocaleString((args === null || args === void 0 ? void 0 : args.local) || 'pt-PT', Object.assign({ timeZone: this.timeZone(args === null || args === void 0 ? void 0 : args.timeZone) }, datos)));
                    if (args === null || args === void 0 ? void 0 : args.hour12) {
                        hour < 12 ? apm = 'AM' : apm = 'PM';
                        hour % 12 === 0 ? hour = (hour % 12) + 12 : hour = hour % 12;
                        content = content.replace("{apm}", apm);
                    }
                    else
                        content = content.replace("{apm}", "");
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
                    content = content.replace(key[Object.keys(key)].format, new Date(this.time(time)).toLocaleString((args === null || args === void 0 ? void 0 : args.local) || 'pt-PT', Object.assign({ timeZone: this.timeZone(args === null || args === void 0 ? void 0 : args.timeZone) }, datos)).padStart(key[Object.keys(key)].format.length - 2, "0"));
                });
            }
            return this.handleError(content);
        }
        else
            return `${this.getDate(time, args)} ${this.getTime(time, args)}`;
    }
    getCompareDate(time1, time2 = 0) {
        if (time1 !== 0 && !time1)
            return console.log('\x1b[31m', "Falta el primer argumento tiempo!");
        if (time1 !== 0 && isNaN(time1))
            return console.log('\x1b[31m', 'El primer tiempo no es valido!');
        if (time2 !== 0 && isNaN(time2))
            return console.log('\x1b[31m', 'El segundo tiempo no es valido!');
        if (typeof time1 === "string")
            time1 = parseFloat(time1);
        if (typeof time2 === "string")
            time2 = parseFloat(time2);
        const time = Math.abs(time1 - time2);
        let content = "";
        for (const key of [
            { 'años': Math.floor(time / y) },
            { 'meses': Math.floor(time / mh) % 12 },
            { 'días': Math.floor(time / d) % 30 },
            { 'horas': Math.floor(time / h) % 24 },
            { 'minutos': Math.floor(time / m) % 60 },
            { 'segundos': Math.floor(time / s) % 60 }
        ]) {
            Object.values(key).map((i) => !i || (content += Object.values(key) + ` ${Object.keys(key)} `));
        }
        if (!content)
            content = "0";
        return this.handleError(content);
    }
    getFormatMs(time) {
        if (time !== 0 && !time)
            return console.log('\x1b[31m', 'Falta el argumento de tiempo!');
        const reg = new RegExp(/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|months?|mth|mh|years?|yrs?|y)?$/i).exec(time);
        if (!reg)
            return console.log('\x1b[31m', 'El formato no es valido!');
        let content = parseFloat(reg[1]);
        let type = (reg[2]).toLowerCase();
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
        return this.handleError(content);
    }
}
;
const client = new main();
const getDate = (time, args) => client.getDate(time, args);
exports.getDate = getDate;
const getTime = (time, args) => client.getTime(time, args);
exports.getTime = getTime;
const getFormat = (time, args) => client.getFormat(time, args);
exports.getFormat = getFormat;
const getCompareDate = (time1, time2) => client.getCompareDate(time1, time2);
exports.getCompareDate = getCompareDate;
const getFormatMs = (time) => client.getFormatMs(time);
exports.getFormatMs = getFormatMs;