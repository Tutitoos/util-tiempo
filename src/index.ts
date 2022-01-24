#!/usr/bin/env node

const npmUrl = 'https://www.npmjs.com/package/util-tiempo';
const s = 1000;
const m = s * 60;
const h = m * 60;
const d = h * 24;
const w = d * 7;
const mh = d * 30;
const y = mh * 12;

const time = (time?: number | string | undefined) => time || new Date();
const local = (local: string | undefined) => local || 'fr-FR';
const timeZone = (timeZone: string | undefined) => timeZone || 'Europe/Madrid';
const hour12 = (hour12: boolean | undefined) => hour12 || false;
const format = (format: string | undefined) => format || null;

export function validate(args: string | undefined) {
    if ('Invalid Date' === args || args?.endsWith('1970') || !args) return console.log('\x1b[31m', `Argumento invalido! => ${args}`);
    return args;
}
export function getDate(tiempo?: number | string, args?: {local?: string, timeZone?: string}) {
    if (tiempo && isNaN(<number>tiempo)) return new Error(`La fecha no es valida! - Ver mas: ${npmUrl}#getDate`);
    if (typeof tiempo === "string") tiempo = parseFloat(tiempo);
    return validate(new Date(time(tiempo)).toLocaleDateString(local(args?.local), {timeZone: timeZone(args?.timeZone)}));
}
export function getTime(tiempo?: number | string, args?: {local?: string, timeZone?: string, hour12?: boolean}) {
    if (tiempo && isNaN(<number>tiempo)) return new Error(`La fecha no es valida! - Ver mas: ${npmUrl}#getTime`);
    if (typeof tiempo === "string") tiempo = parseFloat(tiempo);
    return validate(new Date(time(tiempo)).toLocaleTimeString(local(args?.local), {
        timeZone: timeZone(args?.timeZone),
        hour12: hour12(args?.hour12)
    }));
}
export function getFormat(tiempo?: number | string, args?: {local?: string, timeZone?: string, format?: string, hour12?: boolean}) {
    if (tiempo && isNaN(<number>tiempo)) return new Error(`La fecha no es valida! - Ver mas: ${npmUrl}#getFormat`);
    if (typeof tiempo === "string") tiempo = parseFloat(tiempo);
    // time = time * 1000;
    if (format(args?.format)) {
        let content: string | undefined = args?.format;
        let apm: string = "";
        for (const key of [
            { hourLong: { format: "{hh}", hour: "2-digit" } },
            { hourShort: { format: "{h}", hour: "2-digit" } },
        ]) {
            Object.values(key).forEach((datos: any) => {
                let hour: number = parseInt(new Date(time(tiempo)).toLocaleString(args?.local || 'pt-PT', Object.assign({timeZone: timeZone(args?.timeZone)}, datos)));
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
                content = content.replace(key[Object.keys(key)].format, new Date(this.time(tiempo)).toLocaleString(args?.local || 'pt-PT', Object.assign({timeZone: this.timeZone(args?.timeZone)}, datos)).padStart(key[Object.keys(key)].format.length - 2, "0"));
            });
        }
        return validate(content);
    } else return `${getDate(tiempo, args)} ${getTime(tiempo, args)}`;
}
export function getFormatMs(tiempo?: string | number) {
    if (tiempo !== 0 && !tiempo) return new Error(`Falta el argumento de tiempo! - Ver mas: ${npmUrl}#getFormatMs`);
    const reg = new RegExp(/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|months?|mth|mh|years?|yrs?|y)?$/i).exec(tiempo.toString());
    if (!reg) return new Error(`El formato no es valido! - Ver mas: ${npmUrl}#getFormatMs`);
    let content: number = parseFloat(reg[1]);
    if (!reg[2]) return new Error(`Falta la unidad de tiempo! - Ver mas: ${npmUrl}#getFormatMs`);
    let type: any = (reg[2]).toLowerCase();
    ['years','year','yrs','yr','y'].keys()
    if (['years','year','yrs','yr','y'].includes(type)) content *= y;
    if (['months','month','mth','mh'].includes(type)) content *= mh;
    if (['weeks','week','w'].includes(type)) content *= w;
    if (['days','day','d'].includes(type)) content *= d;
    if (['hours','hour','hrs','hr','h'].includes(type)) content *= h;
    if (['minutes','minute','mins','min','m'].includes(type)) content *= m;
    if (['seconds','second','secs','sec','s'].includes(type)) content *= s;
    if (['milliseconds','millisecond','msecs','msec','ms'].includes(type)) content;
    return validate(content.toString());
}
export function get(args: string) {
    if (!args) return new Error(`Falta el argumento! - Ver mas: ${npmUrl}#get`);
    const reg = new RegExp(/^ *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|months?|mth|mh|years?|yrs?|y)?$/i).exec(args);
    if (!reg) return console.log('\x1b[31m', `El argumento no es valido! - Ver mas: ${npmUrl}#get`);
    let content: string = reg[0];
    let type = (reg[1]).toLowerCase();
    if (['years','year','yrs','yr','y'].includes(type)) content = new Date().getFullYear().toString();
    if (['months','month','mth','mh'].includes(type)) content = new Date().getMonth().toString();
    if (['weeks','week','w'].includes(type)) content = new Date().getDay().toString();
    if (['days','day','d'].includes(type)) content = new Date().getDate().toString();
    if (['hours','hour','hrs','hr','h'].includes(type)) content = new Date().getHours().toString();
    if (['minutes','minute','mins','min','m'].includes(type)) content = new Date().getMinutes().toString();
    if (['seconds','second','secs','sec','s'].includes(type)) content = new Date().getSeconds().toString();
    if (['milliseconds','millisecond','msecs','msec','ms'].includes(type)) content = new Date().getMilliseconds().toString();
    return validate(content);
}