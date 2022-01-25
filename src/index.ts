#!/usr/bin/env node

const npmUrl = 'https://www.npmjs.com/package/util-tiempo';
const s: number = 1000;
const m: number = s * 60;
const h: number = m * 60;
const d: number = h * 24;
const w: number = d * 7;
const mh: number = d * 30;
const y: number = mh * 12;

const time = (time?: number) => time || new Date();
const local = (local: string) => local || 'fr-FR';
const timeZone = (timeZone: string) => timeZone || 'Europe/Madrid';
const hour12 = (hour12: boolean) => hour12 || false;
const format = (format: string) => format || null;

export function validate(args: any) {
    if (isNaN(args)) {
        if (['Invalid Date'].includes(args) || args.endsWith('1970') || !args) return new Error(`Argumento invalido! => ${args}`);
    }
    return args;
}
export function getDate(tiempo?: string | number, args?: {local: any; timeZone: any;}) {
    if (typeof tiempo === "string") tiempo = parseFloat(tiempo);
    return validate(new Date(time(tiempo)).toLocaleDateString(local(args?.local), {
        timeZone: timeZone(args?.timeZone)
    }));
}
export function getTime(tiempo?: string | number, args?: {local: any; timeZone: any; hour12: any;}) {
    if (typeof tiempo === "string") tiempo = parseFloat(tiempo);
    return validate(new Date(time(tiempo)).toLocaleTimeString(local(args?.local), {
        timeZone: timeZone(args?.timeZone),
        hour12: hour12(args?.hour12)
    }));
}
export function getFormat(tiempo?: string | number, args?: {format: any; local: any; timeZone: any; hour12: any;}) {
    if (typeof tiempo === "string") tiempo = parseFloat(tiempo);
    // time = time * 1000;
    if (format(args?.format)) {
        let content: string = args?.format;
        let apm: string = "";
        for (const key of [
            {hourLong: { format: "{hh}", hour: "2-digit"}},
            {hourShort: { format: "{h}", hour: "2-digit"}},
        ]) {
            Object.values(key).forEach((datos: any) => {
                let hour: any = parseInt(new Date(time(Number(tiempo))).toLocaleString(args?.local || 'pt-PT', Object.assign({timeZone: timeZone(args?.timeZone)}, datos)));
                if (args?.hour12) {
                    hour < 12 ? apm = 'AM' : apm = 'PM';
                    hour % 12 === 0 ? hour = (hour % 12) + 12 : hour = hour % 12;
                    content = content?.replace("{apm}", apm);
                } else content = content?.replace("{apm}", "");
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
            Object.values(key).forEach((datos: any) => {
                // @ts-ignore
                content = content.replace(key[Object.keys(key)].format, new Date(time(Number(tiempo))).toLocaleString(args?.local || 'pt-PT', Object.assign({timeZone: timeZone(args?.timeZone)}, datos)).padStart(key[Object.keys(key)].format.length - 2, "0"));
            });
        }
        return validate(content);
    } else return `${getDate(tiempo, args)} ${getTime(tiempo, args)}`;
}
export function getFormatMs(tiempo?: string | number) {
    if (tiempo !== 0 && !tiempo) return new Error(`Falta el argumento de tiempo!`);
    const reg = new RegExp(/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|months?|mth|mh|years?|yrs?|y)?$/i).exec(tiempo.toString());
    if (!reg) return new Error(`El formato no es valido!`);
    let content: number = parseFloat(reg[1]);
    if (!reg[2]) return new Error(`Falta la unidad de tiempo!`);
    let type: string = (reg[2])?.toLowerCase();
    ['years','year','yrs','yr','y'].keys()
    if (['years','year','yrs','yr','y'].includes(type)) content *= y;
    if (['months','month','mth','mh'].includes(type)) content *= mh;
    if (['weeks','week','w'].includes(type)) content *= w;
    if (['days','day','d'].includes(type)) content *= d;
    if (['hours','hour','hrs','hr','h'].includes(type)) content *= h;
    if (['minutes','minute','mins','min','m'].includes(type)) content *= m;
    if (['seconds','second','secs','sec','s'].includes(type)) content *= s;
    if (['milliseconds','millisecond','msecs','msec','ms'].includes(type)) content;
    return validate(content);
}
export function get(args: string) {
    if (!args) return new Error(`Falta el argumento! - Ver mas: ${npmUrl}#get`);
    const reg = new RegExp(/^ *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|months?|mth|mh|years?|yrs?|y)?$/i).exec(args);
    if (!reg) return console.log('\x1b[31m', `El argumento no es valido! - Ver mas: ${npmUrl}#get`);
    let content: number = 0;
    let type: string = (reg[1])?.toLowerCase();
    if (['years','year','yrs','yr','y'].includes(type)) content = new Date().getFullYear();
    if (['months','month','mth','mh'].includes(type)) content = new Date().getMonth();
    if (['weeks','week','w'].includes(type)) content = new Date().getDay();
    if (['days','day','d'].includes(type)) content = new Date().getDate();
    if (['hours','hour','hrs','hr','h'].includes(type)) content = new Date().getHours();
    if (['minutes','minute','mins','min','m'].includes(type)) content = new Date().getMinutes();
    if (['seconds','second','secs','sec','s'].includes(type)) content = new Date().getSeconds();
    if (['milliseconds','millisecond','msecs','msec','ms'].includes(type)) content = new Date().getMilliseconds();
    return validate(content);
}

export function getCompareDate(tiempo1: string | number, tiempo2: string | number = 0) {
    if (typeof tiempo1 === "string") tiempo1 = parseFloat(tiempo1);
    if (typeof tiempo2 === "string") tiempo2 = parseFloat(tiempo2);
    const time0 = Math.abs(tiempo1 - tiempo2);
    let content: string = "";
    for (const key of [
        { 'años': Math.floor(time0 / y) },
        { 'meses': Math.floor(time0 / mh) % 12 },
        { 'días': Math.floor(time0 / d) % 30 },
        { 'horas': Math.floor(time0 / h) % 24 },
        { 'minutos': Math.floor(time0 / m) % 60 },
        { 'segundos': Math.floor(time0 / s) % 60 }
    ]) {
        // @ts-ignore
        if (key[Object.keys(key)] === 1) {
            switch (Object.keys(key)[0]) {
                case 'años': {
                    Object.values(key).map((i) => !i || (content += Object.values(key) + ` año `));
                    break;
                }
                case 'meses': {
                    Object.values(key).map((i) => !i || (content += Object.values(key) + ` mes `));
                    break;
                }
                case 'días': {
                    Object.values(key).map((i) => !i || (content += Object.values(key) + ` día `));
                    break;
                }
                case 'horas': {
                    Object.values(key).map((i) => !i || (content += Object.values(key) + ` hora `));
                    break;
                }
                case 'minutos': {
                    Object.values(key).map((i) => !i || (content += Object.values(key) + ` minuto `));
                    break;
                }
                case 'segundos': {
                    Object.values(key).map((i) => !i || (content += Object.values(key) + ` segundo `));
                    break;
                }
                default: {
                    Object.values(key).map((i) => !i || (content += Object.values(key) + ` ${`${Object.keys(key)}`.substring(0, Object.keys(key)[0].length - 1)} `));
                    break;
                }
            }
        } else Object.values(key).map((i) => !i || (content += Object.values(key) + ` ${Object.keys(key)} `));
    }
    if (!content) content = "0";
    return validate(content);
}