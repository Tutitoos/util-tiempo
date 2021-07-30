#!/usr/bin/env node

let time;
let local;
let timeZone;
// @ts-ignore
export const dataDate = (tiempo: any, options: any) => {
    !tiempo?(time = new Date()):time=tiempo;
    !options?(local='fr-FR')&&(timeZone='Europe/Madrid'):(local=options.local)&&(timeZone=options.timeZone)&&!options.local||(local='fr-FR')&&!options.timeZone||(timeZone='Europe/Madrid');
    return new Date(time).toLocaleDateString(local, {timeZone});
}
export const dataTime = (tiempo: any, options: any) => {
    !tiempo?(time = new Date()):time=tiempo;
    !options?(local='fr-FR')&&(timeZone='Europe/Madrid'):(local=options.local)&&(timeZone=options.timeZone)&&!options.local||(local='fr-FR')&&!options.timeZone||(timeZone='Europe/Madrid');
    return new Date(time).toLocaleTimeString(local, {timeZone})
}
export const diffDate = (tiempo: any) => {
    !tiempo?(time = new Date()):time=tiempo;
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
    return format;
}
