"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Validate {
    static timestamps(timestamp1 = Date.now(), timestamp2) {
        if (new Date(timestamp1).getFullYear() <= 2000 && !timestamp2) {
            timestamp2 = timestamp1;
            timestamp1 = 0;
        }
        if (new Date(timestamp1).getFullYear() > 2000 && !timestamp2) {
            timestamp2 = Date.now();
        }
        if (!timestamp2)
            timestamp2 = Date.now();
        return {
            timestamp1,
            timestamp2,
        };
    }
    static timestamp(timestamp) {
        return timestamp ?? Date.now();
    }
    static locale(locale) {
        return locale ?? "fr-FR";
    }
    static timezone(timezone) {
        return timezone ?? "Europe/Madrid";
    }
    static hour12(hour12) {
        return hour12 ?? false;
    }
    static dateType(dateType) {
        return dateType ?? "ms";
    }
    static unit(unit) {
        if (typeof unit === "string")
            unit = Number(unit);
        return unit ?? 0;
    }
    static dateFormat(dateFormat) {
        return dateFormat ?? "long";
    }
}
exports.default = Validate;
