//REVIEW - use 'envalid' to validation process.env

import { cleanEnv, num, str } from "envalid";
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";

//setup dotenv for reading property in .env file to =>  process.env
//because dotenv dont allow concat string with S{} syntac we use dotenv-expand for it
dotenvExpand.expand(dotenv.config());

//setup envalid to validation type of process.env => env
const env = cleanEnv(process.env, {
  PORT: num({ default: 3000 }),
  //NOTE - database info
  DRIZZLE_POSTGRES_USERNAME: str(),
  DRIZZLE_POSTGRES_PASSWORD: str(),
  DRIZZLE_POSTGRES_PORT: str(),
  DRIZZLE_POSTGRES_DATABASE_NAME: str(),
  //from database info => connection string
  DRIZZLE_POSTGRES_CONNECTION_STRING: str({
    desc: "Connection strong for connect to postgres database",
  }),
});
export default env;
