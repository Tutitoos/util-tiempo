"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validate_1 = __importDefault(require("../Validate"));
const getTime = (options) => new Date(Validate_1.default.timestamp(options?.timestamp)).toLocaleTimeString(Validate_1.default.locale(options?.local), {
    timeZone: Validate_1.default.timezone(options?.timezone),
    hour12: Validate_1.default.hour12(options?.hour12),
});
exports.default = getTime;
