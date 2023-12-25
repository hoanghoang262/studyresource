"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = __importDefault(require("../env"));
exports.default = {
    schema: "./src/db/schema",
    driver: "pg",
    dbCredentials: {
        connectionString: env_1.default.DRIZZLE_POSTGRES_CONNECTION_STRING,
    },
    out: "./migrate",
};
