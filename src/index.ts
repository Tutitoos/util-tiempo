#!/usr/bin/env node
function catchErrors(info) {
    if (['Invalid Date', '1970'].includes(info) ||!info) return console.log('\x1b[31m',`Argumento invalido! => ${info}`);
    return info;
}
const opciones = {
    time: (time) => time || new Date(),
    local: (time) => time || 'fr-FR',
    timeZone: (time) => time || 'Europe/Madrid',
}
export const dataDate = (time: any, args?: any) => {
    if (isNaN(time)) return console.log('\x1b[31m',"El tiempo es invalido!");
    if (typeof time === "string") time = parseFloat(time);
    if (time.toString().length < 12) time = time * 1000;
    return catchErrors(new Date(opciones.time(time)).toLocaleDateString(opciones.local(args?.local), {timeZone: opciones.timeZone(args?.timeZone)}))
}
export const dataTime = (time: any, args?: any) => {
    if (isNaN(time)) return console.log('\x1b[31m',"El tiempo es invalido!");
    if (typeof time === "string") time = parseFloat(time);
    if (time.toString().length < 12) time = time * 1000;
    return catchErrors(new Date(opciones.time(time)).toLocaleTimeString(opciones.local(args?.local), {timeZone: opciones.timeZone(args?.timeZone)}))
}
export const diffDate = (time1: any, time2: any) => {
    if (!time1) return console.log('\x1b[31m',"Falta el primer tiempo!");
    if (!time2) return console.log('\x1b[31m',"Falta el segundo tiempo!");
    if (isNaN(time1)) return console.log('\x1b[31m',"El primer tiempo es invalido!");
    if (isNaN(time2)) return console.log('\x1b[31m',"El segundo tiempo es invalido!");
    if (typeof time1 === "string") time1 = parseFloat(time1);
    if (typeof time2 === "string") time2 = parseFloat(time2);
    if (time1.toString().length < 12) time1 = time1 * 1000;
    if (time2.toString().length < 12) time2 = time2 * 1000;
    const tiempo = Math.abs(time1 - time2);
    let format = "";
    let segundos = Math.floor(tiempo / 1000) % 60;
    let minutos = Math.floor(tiempo / (1000 * 60)) % 60;
    let horas = Math.floor(tiempo / (1000 * 60 * 60)) % 24;
    let días = Math.floor(tiempo / (1000 * 60 * 60 * 24)) % 30;
    let meses = Math.floor(tiempo / (1000 * 60 * 60 * 24 * 30)) % 12;
    let años = Math.floor(tiempo / (1000 * 60 * 60 * 24 * 30 * 12));
    for (const key of [{'años': años}, {'meses': meses}, {'días': días}, {'horas': horas}, {'minutos': minutos}, {'segundos': segundos}]) {
        Object.values(key).map((i) => !i || (format += Object.values(key) + ` ${Object.keys(key)} `))
    }
    if (!format) format = "0"
    return catchErrors(format);
}
