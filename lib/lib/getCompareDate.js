"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validate_1 = __importDefault(require("../Validate"));
const util_1 = require("../util");
const getCompareDate = (options) => {
    const { timestamp1, timestamp2 } = Validate_1.default.timestamps(options?.timestamp1, options?.timestamp2);
    const format = Validate_1.default.dateFormat(options?.format);
    const elapsed = Math.abs(timestamp2 - timestamp1);
    let diff = "";
    let value = elapsed;
    for (const [unit, milisecondsInUnit] of util_1.dateUnits) {
        if (value >= milisecondsInUnit) {
            const valueParsed = Math.floor(value / milisecondsInUnit);
            switch (unit) {
                case "year":
                    diff += (0, util_1.dateFormat)({
                        format,
                        unit: valueParsed,
                        unitType: "año",
                        plural: "s",
                        short: "y",
                    });
                    break;
                case "month":
                    diff += (0, util_1.dateFormat)({
                        format,
                        unit: valueParsed,
                        unitType: "mes",
                        plural: "es",
                        short: "mh",
                    });
                    break;
                case "week":
                    diff += (0, util_1.dateFormat)({
                        format,
                        unit: valueParsed,
                        unitType: "semana",
                        plural: "s",
                        short: "w",
                    });
                    break;
                case "day":
                    diff += (0, util_1.dateFormat)({
                        format,
                        unit: valueParsed,
                        unitType: "día",
                        plural: "s",
                        short: "d",
                    });
                    break;
                case "hour":
                    diff += (0, util_1.dateFormat)({
                        format,
                        unit: valueParsed,
                        unitType: "hora",
                        plural: "s",
                        short: "h",
                    });
                    break;
                case "minute":
                    diff += (0, util_1.dateFormat)({
                        format,
                        unit: valueParsed,
                        unitType: "minuto",
                        plural: "s",
                        short: "m",
                    });
                    break;
                case "second":
                    diff += (0, util_1.dateFormat)({
                        format,
                        unit: valueParsed,
                        unitType: "segundo",
                        plural: "s",
                        short: "s",
                    });
                    break;
                case "millisecond":
                default: {
                    diff += (0, util_1.dateFormat)({
                        format,
                        unit: valueParsed,
                        unitType: "milisegundo",
                        plural: "s",
                        short: "ms",
                    });
                    break;
                }
            }
            value -= Math.floor(elapsed / milisecondsInUnit) * milisecondsInUnit;
            if (value >= 60000) {
                diff += format === "long" ? ", " : " ";
            }
        }
    }
    return diff;
};
exports.default = getCompareDate;
