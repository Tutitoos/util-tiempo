#!/usr/bin/env node
export declare function validate(args: string | undefined): string | void;
export declare function getDate(tiempo?: number | string, args?: {
    local?: string;
    timeZone?: string;
}): string | void | Error;
export declare function getTime(tiempo?: number | string, args?: {
    local?: string;
    timeZone?: string;
    hour12?: boolean;
}): string | void | Error;
export declare function getFormat(tiempo?: number | string, args?: {
    local?: string;
    timeZone?: string;
    format?: string;
    hour12?: boolean;
}): string | void | Error;
export declare function getFormatMs(tiempo?: string | number): string | void | Error;
export declare function get(args: string): string | void | Error;
//# sourceMappingURL=index.d.ts.map