//REVIEW - create db connect

import { drizzle } from "drizzle-orm/node-postgres";
import { Pool, Client } from "pg";

const pool = new Pool({
  host: "127.0.0.1",
  port: 5432,
  user: "postgres",
  password: "postgres",
  database: "StudyResource",
});

export const db = drizzle(pool);
