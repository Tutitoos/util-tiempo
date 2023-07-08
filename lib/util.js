"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateFormat = exports.dateUnits = exports.dateTypesList = void 0;
exports.dateTypesList = [
    ["years", "year", "yrs", "yr", "y"],
    ["months", "month", "mth", "mh"],
    ["weeks", "week", "w"],
    ["days", "day", "d"],
    ["hours", "hour", "hrs", "hr", "h"],
    ["minutes", "minute", "mins", "min", "m"],
    ["seconds", "second", "secs", "sec", "s"],
    ["milliseconds", "millisecond", "msecs", "msec", "ms"],
];
exports.dateUnits = [
    ["year", 31536000000],
    ["month", 2592000000],
    ["week", 604800000],
    ["day", 86400000],
    ["hour", 3600000],
    ["minute", 60000],
    ["second", 1000],
];
const dateFormat = ({ format, unit, unitType, plural, short, }) => {
    if (format === "long") {
        return `${unit} ${unitType}${unit > 1 ? plural : ""}`;
    }
    return `${unit}${short}`;
};
exports.dateFormat = dateFormat;
