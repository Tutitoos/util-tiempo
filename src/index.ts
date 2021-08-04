#!/usr/bin/env node

function catchErrors(info) {
    if (isNaN(info)) {
        if (['Invalid Date'].includes(info) || info.endsWith('1970') || !info) return console.log('\x1b[31m',`Argumento invalido! => ${info}`);
    }
    return info;
}
var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var mh = d * 30;
var y = mh * 12;

const opciones = {
    time: (time?: any) => time || new Date(),
    local: (local?: string) => local || 'fr-FR',
    timeZone: (timeZone?: string) => timeZone || 'Europe/Madrid',
    hour12: (hour12?: boolean) => hour12 || false,
    format: (format?: string) => format || undefined // Default "{hh}:{mm}:{ss} {DD}/{MM}/{YYYY}"
}

export const dataDate = (time?: any, args?: any) => {
    if (time && isNaN(time)) return console.log('\x1b[31m',"El tiempo es invalido!");
    if (typeof time === "string") time = parseFloat(time);
    if (time && time.toString().length < 12) time = time * 1000;
    return catchErrors(new Date(opciones.time(time)).toLocaleDateString(opciones.local(args?.local), {timeZone: opciones.timeZone(args?.timeZone)}))
}
export const dataTime = (time?: any, args?: any) => {
    if (time && isNaN(time)) return console.log('\x1b[31m',"El tiempo es invalido!");
    if (typeof time === "string") time = parseFloat(time);
    if (time && time.toString().length < 12) time = time * 1000;
    return catchErrors(new Date(opciones.time(time)).toLocaleTimeString(opciones.local(args?.local), {timeZone: opciones.timeZone(args?.timeZone), hour12: opciones.hour12(args?.hour12)}))
}
export const formatDate = (time?: any, args?: any) => {
    if (time && isNaN(time)) return console.log('\x1b[31m',"El tiempo es invalido!");
    if (typeof time === "string") time = parseFloat(time);
    if (time && time.toString().length < 12) time = time * 1000;
    if (opciones.format(args?.format)) {
        let content = args?.format;
        let apm = "";
        for (const key of [
            {hourLong: {format: "{hh}",hour: "2-digit"}},
            {hourShort: {format: "{h}",hour: "2-digit"}}
        ]) {
            Object.values(key).forEach((datos) => {
                let hour: any = new Date(opciones.time(time)).toLocaleString(args?.local || 'pt-PT', Object.assign({timeZone: opciones.timeZone(args?.timeZone)}, datos));
                if (args?.hour12) {
                    hour < 12 ? apm = "AM" : apm = "PM"
                    hour % 12 === 0 ? hour = (hour % 12) + 12 : hour = hour % 12
                    content = content.replace("{apm}", apm)
                } else {
                    content = content.replace("{apm}", "")
                }
                // @ts-ignore
                content = content.replace(key[Object.keys(key)].format, hour.toString().padStart(key[Object.keys(key)].format.length - 2, "0"))
            })

        }
        for (const key of [
            {minuteLong: {format: "{mm}",minute: "2-digit"}},
            {minuteShort: {format: "{m}",minute: "2-digit"}},
            {secondLong: {format: "{ss}",second: "2-digit"}},
            {secondShort: {format: "{s}",second: "2-digit"}},
            {dayLong: {format: "{DD}",day: "2-digit"}},
            {dayShort: {format: "{D}",day: "2-digit"}},
            {monthLong: {format: "{MM}",month: "2-digit"}},
            {monthShort: {format: "{M}",month: "2-digit"}},
            {yearLong: {format: "{YYYY}",year: "numeric"}},
            {yearShort: {format: "{YY}",year: "2-digit"}}
        ]) {
            Object.values(key).forEach((datos) => {
                // @ts-ignore
                content = content.replace(key[Object.keys(key)].format, new Date(opciones.time(time)).toLocaleString(args?.local || 'pt-PT', Object.assign({
                    timeZone: opciones.timeZone(args?.timeZone),
                    // @ts-ignore
                }, datos)).padStart(key[Object.keys(key)].format.length - 2, "0"))
            })

        }
        return catchErrors(content)
    } else {
        return `${dataDate(time, args)} ${dataTime(time, args)}`
    }
}

export const diffDate = (time1: any, time2: any) => {
    if (!time2) time2 = 0
    if (time1 !== 0 && !time1) return console.log('\x1b[31m',"Falta el primer tiempo!");
    if (time1 !== 0 && isNaN(time1)) return console.log('\x1b[31m',"El primer tiempo es invalido!");
    if (time2 !== 0 && isNaN(time2)) return console.log('\x1b[31m',"El segundo tiempo es invalido!");
    if (typeof time1 === "string") time1 = parseFloat(time1);
    if (typeof time2 === "string") time2 = parseFloat(time2);
    if (time1.toString().length < 12) time1 = time1 * 1000;
    if (time2.toString().length < 12) time2 = time2 * 1000;
    const tiempo = Math.abs(time1 - time2);
    let uptime = "";
    let segundos = Math.floor(tiempo / s) % 60;
    let minutos = Math.floor(tiempo / m) % 60;
    let horas = Math.floor(tiempo / h) % 24;
    let días = Math.floor(tiempo / d) % 30;
    let meses = Math.floor(tiempo / mh) % 12;
    let años = Math.floor(tiempo / y);
    for (const key of [{'años': años}, {'meses': meses}, {'días': días}, {'horas': horas}, {'minutos': minutos}, {'segundos': segundos}]) {
        Object.values(key).map((i) => !i || (uptime += Object.values(key) + ` ${Object.keys(key)} `))
    }
    if (!uptime) uptime = "0"
    return catchErrors(uptime);
}
export const formatMs = (time: any) => {
    if (time !== 0 && !time) return console.log('\x1b[31m',"Falta el tiempo!");
    const reg = new RegExp(/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|months?|mth|mh|years?|yrs?|y)?$/i).exec(time);
    if (!reg) return console.log('\x1b[31m',"Formato invalido!");
    let num = parseFloat(reg[1]);
    let type = (reg[2] || 'ms').toLowerCase();
    switch (type) {
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
            num *= y;
            break;
        case 'months':
        case 'month':
        case 'mth':
        case 'mh':
            num *= mh;
            break;
        case 'weeks':
        case 'week':
        case 'w':
            num *= w;
            break;
        case 'days':
        case 'day':
        case 'd':
            num *= d;
            break;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
            num *= h;
            break;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
            num *= m;
            break;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
            num *= s;
            break;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
            //num;
            break;
    }
    return catchErrors(num)
}



/*if (process.argv[2] === '-help') {
    console.log("Util-Tiempo - El mejor NPM\n\nLista de funciones:\n-formatDate\n-dataDate\n-dataTime\n-diffDate")
}*/
