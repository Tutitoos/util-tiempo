#!/usr/bin/env node
export declare function validate(args: any): any;
export declare function getDate(tiempo?: string | number, args?: {
    local: any;
    timeZone: any;
}): any;
export declare function getTime(tiempo?: string | number, args?: {
    local: any;
    timeZone: any;
    hour12: any;
}): any;
export declare function getFormat(tiempo?: string | number, args?: {
    format: any;
    local: any;
    timeZone: any;
    hour12: any;
}): any;
export declare function getFormatMs(tiempo?: string | number): any;
export declare function get(args: string): any;
export declare function getCompareDate(tiempo1: string | number, tiempo2?: string | number): any;
