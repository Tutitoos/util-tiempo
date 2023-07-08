"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validate_1 = __importDefault(require("../Validate"));
const util_1 = require("../util");
const get = (dateType) => {
    const type = Validate_1.default.dateType(dateType);
    let result = new Date().getMilliseconds();
    if (util_1.dateTypesList[0].includes(type))
        result = new Date().getFullYear();
    if (util_1.dateTypesList[1].includes(type))
        result = new Date().getMonth();
    if (util_1.dateTypesList[2].includes(type))
        result = new Date().getDay();
    if (util_1.dateTypesList[3].includes(type))
        result = new Date().getDate();
    if (util_1.dateTypesList[4].includes(type))
        result = new Date().getHours();
    if (util_1.dateTypesList[5].includes(type))
        result = new Date().getMinutes();
    if (util_1.dateTypesList[6].includes(type))
        result = new Date().getSeconds();
    return result;
};
exports.default = get;
