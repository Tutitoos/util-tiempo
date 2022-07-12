#!/usr/bin/env node
export declare const getTime: (timestamp?: number, options?: {
    local?: string;
    timeZone?: string;
    hour12?: boolean;
}) => string;
export declare const getDate: (timestamp?: number, options?: {
    local?: string;
    timeZone?: string;
}) => string;
export declare const get: (type?: string) => number;
export declare const getMs: (type?: string) => number;
export declare const getCompareDate: (timestamp?: number, timestamp2?: number, options?: {
    format?: string;
}) => string;
export declare const getFormatDate: (timestamp?: number, options?: {
    format?: string;
    local?: string;
    timeZone?: string;
    hour12?: boolean;
}) => string;
