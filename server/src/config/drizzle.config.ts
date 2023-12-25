import type { Config } from "drizzle-kit";
import env from "../env";

export default {
  schema: "./src/db/schema",
  driver: "pg",
  dbCredentials: {
    connectionString:
      "postgres://postgres:postgres@localhost:5432/StudyResource",
  },
  out: "./migrate",
} satisfies Config;
