import type { DateFormats, DateTypes, Locales, Timezone } from "./types/global";
declare class Validate {
    static timestamps(timestamp1?: number, timestamp2?: number | null): {
        timestamp1: number;
        timestamp2: number;
    };
    static timestamp(timestamp?: number | null): number;
    static locale(locale?: Locales): Locales;
    static timezone(timezone?: Timezone): Timezone;
    static hour12(hour12?: boolean): boolean;
    static dateType(dateType?: DateTypes): DateTypes;
    static unit(unit?: number | string): number;
    static dateFormat(dateFormat?: DateFormats): DateFormats;
}
export default Validate;
