#!/usr/bin/env node

const DATE_UNITS: [string, number, number][] = [
    ["year", 31104000, 12],
    ["month", 2592000, 30],
    ["week", 604800, 7],
    ["day", 86400, 24],
    ["hour", 3600, 60],
    ["minute", 60, 60],
    ["second", 1, 1000],
];

export const getTime = (
    timestamp: number = Date.now(),
    options: {
        local?: string;
        timeZone?: string;
        hour12?: boolean;
    } = {
        local: "fr-FR",
        timeZone: "Europe/Madrid",
        hour12: false,
    }
) => {
    // if (typeof timestamp !== "number") throw new Error("timestamp no es un numero");
    return new Date(timestamp).toLocaleTimeString(options.local, {
        timeZone: options.timeZone,
        hour12: options.hour12,
    });
};

export const getDate = (
    timestamp: number = Date.now(),
    options: {
        local?: string;
        timeZone?: string;
    } = {
        local: "fr-FR",
        timeZone: "Europe/Madrid",
    }
) => {
    // if (typeof timestamp !== "number") throw new Error("timestamp no es un numero");
    return new Date(timestamp).toLocaleDateString(options.local || "fr-FR", {
        timeZone: options.timeZone || "Europe/Madrid",
    });
};

export const get = (type = "ms") => {
    // if (typeof type !== "string") throw new Error("type no es un string");
    const typeRegex = new RegExp(
        /^ *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|months?|mth|mh|years?|yrs?|y)?$/i
    ).exec(type);
    if (!typeRegex) throw new Error("El formato no es valido!");
    let content = 0;
    const typeParsed: string = typeRegex![1]?.toLowerCase();
    if (["years", "year", "yrs", "yr", "y"].includes(typeParsed))
        content = new Date().getFullYear();
    if (["months", "month", "mth", "mh"].includes(typeParsed)) content = new Date().getMonth();
    if (["weeks", "week", "w"].includes(typeParsed)) content = new Date().getDay();
    if (["days", "day", "d"].includes(typeParsed)) content = new Date().getDate();
    if (["hours", "hour", "hrs", "hr", "h"].includes(typeParsed)) content = new Date().getHours();
    if (["minutes", "minute", "mins", "min", "m"].includes(typeParsed))
        content = new Date().getMinutes();
    if (["seconds", "second", "secs", "sec", "s"].includes(typeParsed))
        content = new Date().getSeconds();
    if (["milliseconds", "millisecond", "msecs", "msec", "ms"].includes(typeParsed))
        content = new Date().getMilliseconds();
    return content;
};

export const getMs = (type = "0ms") => {
    // if (typeof type !== "string") throw new Error("type no es un string");
    const typeRegex = new RegExp(
        /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|months?|mth|mh|years?|yrs?|y)?$/i
    ).exec(type);
    if (!typeRegex) throw new Error("El formato no es valido!");
    let content = Number(typeRegex[1]);
    const typeParsed: string = typeRegex![2]?.toLowerCase();
    if (["years", "year", "yrs", "yr", "y"].includes(typeParsed)) content *= DATE_UNITS[0][2];
    if (["months", "month", "mth", "mh"].includes(typeParsed)) content *= DATE_UNITS[1][2];
    if (["weeks", "week", "w"].includes(typeParsed)) content *= DATE_UNITS[2][2];
    if (["days", "day", "d"].includes(typeParsed)) content *= DATE_UNITS[3][2];
    if (["hours", "hour", "hrs", "hr", "h"].includes(typeParsed)) content *= DATE_UNITS[4][2];
    if (["minutes", "minute", "mins", "min", "m"].includes(typeParsed)) content *= DATE_UNITS[5][2];
    if (["seconds", "second", "secs", "sec", "s"].includes(typeParsed)) content *= DATE_UNITS[6][2];
    if (["milliseconds", "millisecond", "msecs", "msec", "ms"].includes(typeParsed)) content;
    return content;
};

export const getCompareDate = (
    timestamp: number = Date.now(),
    timestamp2: number = Date.now(),
    options: {
        format?: string;
    } = {
        format: "long",
    }
): string => {
    // if (typeof timestamp !== "number") throw new Error("timestamp no es un numero");
    // if (typeof timestamp2 !== "number") throw new Error("timestamp2 no es un numero");
    if (new Date(timestamp).getFullYear() === 1970) timestamp = timestamp * 1000;
    if (new Date(timestamp2).getFullYear() === 1970) timestamp2 = timestamp2 * 1000;
    const elapsed = Math.abs(timestamp2 - timestamp);
    const elapsedTime = Math.round(elapsed / 1000);
    let diff = "";
    for (const [unit, secondsInUnit, unitEqual] of DATE_UNITS) {
        if (Math.abs(elapsedTime) > secondsInUnit) {
            let value = Math.round(elapsedTime / secondsInUnit);
            switch (unit) {
                case "year":
                    value = value % unitEqual;
                    if (value > 1) diff += `${value} a??os, `;
                    else diff += `${value} a??o, `;
                    break;
                case "month":
                    value = value % unitEqual;
                    if (value > 1) diff += `${value} meses, `;
                    else diff += `${value} mes, `;
                    break;
                case "week":
                    value = value % unitEqual;
                    if (value > 1) diff += `${value} semanas, `;
                    else diff += `${value} semana, `;
                    break;
                case "day":
                    value = value % unitEqual;
                    if (value > 1) diff += `${value} d??as, `;
                    else diff += `${value} d??a, `;
                    break;
                case "hour":
                    value = value % unitEqual;
                    if (value > 1) diff += `${value} horas, `;
                    else diff += `${value} hora, `;
                    break;
                case "minute":
                    value = value % unitEqual;
                    if (value > 1) diff += `${value} minutos, `;
                    else diff += `${value} minuto, `;
                    break;
                case "second":
                    value = value % unitEqual;
                    if (value > 1) diff += `${value} segundos`;
                    else diff += `${value} segundo`;
                    break;
            }
        }
    }
    if (!diff) throw new Error("??No hay diferencia entre los dos tiempos especificados!");
    if (options.format === "long") return diff;
    if (options.format === "short") return `Hace ${diff.split(",")[0]}`;
    throw new Error("??Hubo alg??n error, no recib?? ning??n dato!");
};

export const getFormatDate = (
    timestamp: number = Date.now(),
    options: {
        format?: string;
        local?: string;
        timeZone?: string;
        hour12?: boolean;
    } = {
        format: "{h}:{mm}:{ss} {apm} - {DD}/{MM}/{YYYY}",
        local: "pt-PT",
        timeZone: "Europe/Madrid",
        hour12: false,
    }
) => {
    // if (typeof timestamp !== "number") throw new Error("timestamp no es un numero");
    if (options.format) {
        let content: string = options.format;
        let apm = "";
        for (const key of [
            { hourLong: { format: "{hh}", hour: "2-digit" } },
            { hourShort: { format: "{h}", hour: "2-digit" } },
        ]) {
            Object.values(key).forEach((datos: any) => {
                let hour: any = Number(
                    new Date(timestamp).toLocaleString(
                        options.local,
                        Object.assign({ timeZone: options.timeZone }, datos)
                    )
                );
                if (options.hour12) {
                    hour < 12 ? (apm = "AM") : (apm = "PM");
                    hour % 12 === 0 ? (hour = (hour % 12) + 12) : (hour = hour % 12);
                    content = content?.replace("{apm}", apm);
                } else content = content?.replace("{apm}", "");
                content = content.replace(
                    // @ts-ignore
                    key[Object.keys(key)].format,
                    String(hour).padStart(
                        // @ts-ignore
                        key[Object.keys(key)].format.length - 2,
                        "0"
                    )
                );
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
                content = content.replace(
                    // @ts-ignore
                    key[Object.keys(key)].format,
                    new Date(timestamp)
                        .toLocaleString(
                            options.local,
                            Object.assign({ timeZone: options.timeZone }, datos)
                        )
                        // @ts-ignore
                        .padStart(key[Object.keys(key)].format.length - 2, "0")
                );
            });
        }
        return content;
    } else return `${getDate(timestamp, options)} ${getTime(timestamp, options)}`;
};
