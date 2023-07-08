"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_1 = __importDefault(require("./get"));
const getCompareDate_1 = __importDefault(require("./getCompareDate"));
const getDate_1 = __importDefault(require("./getDate"));
const getFormatDate_1 = __importDefault(require("./getFormatDate"));
const getMs_1 = __importDefault(require("./getMs"));
const getTime_1 = __importDefault(require("./getTime"));
exports.default = {
    get: get_1.default,
    getCompareDate: getCompareDate_1.default,
    getDate: getDate_1.default,
    getFormatDate: getFormatDate_1.default,
    getMs: getMs_1.default,
    getTime: getTime_1.default,
};
