#!/usr/bin/env node

function catchErrors(info) {
    if (['Invalid Date'].includes(info) || info.endsWith('1970') || !info) return console.log('\x1b[31m',`Argumento invalido! => ${info}`);
    return info;
}

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
        for (const key of [
            {hour: {format: "{hh}",hour: "2-digit"}},
            {minute: {format: "{mm}",minute: "2-digit"}},
            {second: {format: "{ss}",second: "2-digit"}},
            {day: {format: "{DD}",day: "2-digit"}},
            {month: {format: "{MM}",month: "2-digit"}},
            {yearLong: {format: "{YYYY}",year: "numeric"}},
            {yearShort: {format: "{YY}",year: "2-digit"}}
        ]) {
            Object.values(key).forEach((datos) => {
                // @ts-ignore
                content = content.replace(key[Object.keys(key)].format, new Date(opciones.time(time)).toLocaleString(args?.local || 'pt-PT', Object.assign({
                    timeZone: opciones.timeZone(args?.timeZone),
                    hour12: opciones.hour12(args?.hour12)
                }, datos)).padStart(2, "0"))
            })

        }
        catchErrors(content)
    } else {
        return `${dataDate(time, args)} ${dataTime(time, args)}`
    }
}
export const diffDate = (time1: any, time2: any) => {
    if (time1 !== 0 && !time1) return console.log('\x1b[31m',"Falta el primer tiempo!");
    if (time2 !== 0 && !time2) return console.log('\x1b[31m',"Falta el segundo tiempo!");
    if (time1 !== 0 && isNaN(time1)) return console.log('\x1b[31m',"El primer tiempo es invalido!");
    if (time2 !== 0 && isNaN(time2)) return console.log('\x1b[31m',"El segundo tiempo es invalido!");
    if (typeof time1 === "string") time1 = parseFloat(time1);
    if (typeof time2 === "string") time2 = parseFloat(time2);
    if (time1.toString().length < 12) time1 = time1 * 1000;
    if (time2.toString().length < 12) time2 = time2 * 1000;
    const tiempo = Math.abs(time1 - time2);
    let uptime = "";
    let segundos = Math.floor(tiempo / 1000) % 60;
    let minutos = Math.floor(tiempo / (1000 * 60)) % 60;
    let horas = Math.floor(tiempo / (1000 * 60 * 60)) % 24;
    let días = Math.floor(tiempo / (1000 * 60 * 60 * 24)) % 30;
    let meses = Math.floor(tiempo / (1000 * 60 * 60 * 24 * 30)) % 12;
    let años = Math.floor(tiempo / (1000 * 60 * 60 * 24 * 30 * 12));
    for (const key of [{'años': años}, {'meses': meses}, {'días': días}, {'horas': horas}, {'minutos': minutos}, {'segundos': segundos}]) {
        Object.values(key).map((i) => !i || (uptime += Object.values(key) + ` ${Object.keys(key)} `))
    }
    if (!uptime) uptime = "0"
    return catchErrors(uptime);
}
if (process.argv[2] === '-help') {
    console.log("Util-Tiempo - El mejor NPM\n\nLista de funciones:\n-formatDate\n-dataDate\n-dataTime\n-diffDate")
}
