"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validate_1 = __importDefault(require("../Validate"));
const getDate = (options) => new Date(Validate_1.default.timestamp(options?.timestamp)).toLocaleDateString(Validate_1.default.locale(options?.local), {
    timeZone: Validate_1.default.timezone(options?.timezone),
});
exports.default = getDate;
