"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.envSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.envSchema = zod_1.default.object({
    APP_PORT: zod_1.default.number().default(4000).optional(),
    APP_HOST: zod_1.default.string(),
    MYSQL_HOST: zod_1.default.string(),
    MYSQL_USER: zod_1.default.string(),
    MYSQL_PASSWORD: zod_1.default.string(),
    MYSQL_DATABASe: zod_1.default.string()
});
