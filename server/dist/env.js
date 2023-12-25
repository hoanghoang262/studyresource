"use strict";
//REVIEW - use 'envalid' to validation process.env
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const envalid_1 = require("envalid");
const dotenv_1 = __importDefault(require("dotenv"));
//NOTE - setup dotenv for .env file
dotenv_1.default.config();
console.log(process.env.PORT);
const env = (0, envalid_1.cleanEnv)(process.env, {
    PORT: (0, envalid_1.num)({ default: 3000 }),
    //NOTE - database info
    DRIZZLE_POSTGRES_USERNAME: (0, envalid_1.str)(),
    DRIZZLE_POSTGRES_PASSWORD: (0, envalid_1.str)(),
    DRIZZLE_POSTGRES_PORT: (0, envalid_1.str)(),
    DRIZZLE_POSTGRES_DATABASE_NAME: (0, envalid_1.str)(),
    //from database info => connection string
    DRIZZLE_POSTGRES_CONNECTION_STRING: (0, envalid_1.str)({
        desc: "Connection strong for connect to postgres database",
    }),
});
exports.default = env;
