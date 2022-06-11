#!/usr/bin/env node
export declare function getDate(value?: string | number | Date, options?: {
    local: string;
    timeZone: string;
}): string;
export declare function getTime(value?: string | number | Date, options?: {
    local: string;
    timeZone: string;
    hour12: boolean;
}): string;
export declare function getFormat(value?: string | number | Date, options?: {
    format: string;
    local: string;
    timeZone: string;
    hour12: boolean;
}): string;
export declare function getFormatMs(value?: string | number): number | "Falta el argumento!" | "El formato no es valido!" | "Falta la unidad de tiempo!";
export declare function get(value?: string | number): number | "Falta el argumento!" | "El formato no es valido!";
export declare function getCompareDate(value?: string | number, value2?: string | number): string;
