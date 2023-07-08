import type { DateFormats, DateTypes } from "./types/global";
export declare const dateTypesList: DateTypes[][];
export declare const dateUnits: Array<[string, number]>;
export declare const dateFormat: ({ format, unit, unitType, plural, short, }: {
    format: DateFormats;
    unit: number;
    unitType: string;
    plural: string;
    short: string;
}) => string;
