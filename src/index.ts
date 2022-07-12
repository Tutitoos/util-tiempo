#!/usr/bin/env node

const DATE_UNITS: [string, number, number][] = [
    ["year", 31104000, 365],
    ["month", 2592000, 12],
    ["week", 604800, 7],
    ["day", 86400, 30],
    ["hour", 3600, 24],
    ["minute", 60, 60],
    ["second", 1, 60],
];

export const getTime = ({
    timestamp,
    options,
}: {
    timestamp?: number;
    options?: {
        local: string;
        timeZone: string;
        hour12: boolean;
    };
}) => {
    if (!timestamp) timestamp = Date.now();
    if (!options)
        options = {
            local: "fr-FR",
            timeZone: "Europe/Madrid",
            hour12: false,
        };
    // if (typeof timestamp !== "number") throw new Error("timestamp no es un numero");
    return new Date(timestamp).toLocaleTimeString(options.local, {
        timeZone: options.timeZone,
        hour12: options.hour12,
    });
};

export const getDate = ({
    timestamp = Date.now(),
    options = {
        local: "fr-FR",
        timeZone: "Europe/Madrid",
        hour12: false,
    },
}: {
    timestamp: number;
    options: {
        local: string;
        timeZone: string;
        hour12: boolean;
    };
}) => {
    // if (typeof timestamp !== "number") throw new Error("timestamp no es un numero");
    return new Date(timestamp).toLocaleDateString(options.local, {
        timeZone: options.timeZone,
    });
};

export const get = ({ type = "ms" }: { type: string }) => {
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

export const getMs = ({ type = "0ms" }: { type: string }) => {
    // if (typeof type !== "string") throw new Error("type no es un string");
    const typeRegex = new RegExp(
        /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|months?|mth|mh|years?|yrs?|y)?$/i
    ).exec(type);
    if (!typeRegex) throw new Error("El formato no es valido!");
    let content = Number(typeRegex[1]);
    const typeParsed: string = typeRegex![1]?.toLowerCase();
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

export const getCompareDate = ({
    timestamp = Date.now(),
    timestamp2 = Date.now(),
    options = {
        format: "long",
    },
}: {
    timestamp: number;
    timestamp2: number;
    options: {
        format: string;
    };
}): string => {
    // if (typeof timestamp !== "number") throw new Error("timestamp no es un numero");
    // if (typeof timestamp2 !== "number") throw new Error("timestamp2 no es un numero");
    const elapsed = Math.abs(timestamp2 - timestamp);
    let diff = "";

    for (const [unit, secondsInUnit, unitEqual] of DATE_UNITS) {
        if (Math.abs(elapsed) > secondsInUnit) {
            let value = Math.round(elapsed / secondsInUnit);
            switch (unit) {
                case "year":
                    value = value % unitEqual;
                    if (value > 1) diff += `${value} años, `;
                    else diff += `${value} año, `;
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
                    if (value > 1) diff += `${value} días, `;
                    else diff += `${value} día, `;
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
    if (options.format === "long") return diff;
    if (options.format === "short") return `Hace ${diff.split(",")[0]}`;
    throw new Error("¡Hubo algún error, no recibí ningún dato!");
};

export const getFormatDate = ({
    timestamp = Date.now(),
    options = {
        format: "{h}:{mm}:{ss} {apm} - {DD}/{MM}/{YYYY}",
        local: "pt-PT",
        timeZone: "Europe/Madrid",
        hour12: false,
    },
}: {
    timestamp: number;
    options: {
        format: string;
        local: string;
        timeZone: string;
        hour12: boolean;
    };
}) => {
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
    } else return `${getDate({ timestamp, options })} ${getTime({ timestamp, options })}`;
};

console.log("================================");
console.log("TESTING");
console.log("getTime", getTime());
console.log("getDate", getDate());
console.log("get", get());
console.log("getMs", getMs());
console.log("getCompareDate", getCompareDate());
console.log("getFormatDate", getFormatDate());
