"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validate_1 = __importDefault(require("../Validate"));
const util_1 = require("../util");
const getMs = (timeType = "0ms") => {
    const regexp = /^(\d+)(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|months?|mth|mh|years?|yrs?|y)$/i.exec(timeType);
    if (!regexp)
        throw new Error("El formato no es valido!");
    const [, unit, unitType] = regexp;
    let result = Validate_1.default.unit(unit);
    const type = unitType.toLowerCase();
    if (util_1.dateTypesList[0].includes(type))
        result *= util_1.dateUnits[0][1];
    if (util_1.dateTypesList[1].includes(type))
        result *= util_1.dateUnits[1][1];
    if (util_1.dateTypesList[2].includes(type))
        result *= util_1.dateUnits[2][1];
    if (util_1.dateTypesList[3].includes(type))
        result *= util_1.dateUnits[3][1];
    if (util_1.dateTypesList[4].includes(type))
        result *= util_1.dateUnits[4][1];
    if (util_1.dateTypesList[5].includes(type))
        result *= util_1.dateUnits[5][1];
    if (util_1.dateTypesList[6].includes(type))
        result *= util_1.dateUnits[6][1];
    return result;
};
exports.default = getMs;
