import env from "../env";
import { db } from "./db";
import { migrate } from "drizzle-orm/node-postgres/migrator";

const main = async () => {
  console.log("Migration started ...");
  console.log(`Migrate db to: ${env.DRIZZLE_POSTGRES_CONNECTION_STRING}`);
  await migrate(db, { migrationsFolder: "./migrate" });
};

main()
  .then(() => {
    console.log("Migration processing ...");
  })
  .catch((err) => {
    console.error("DB migrate error\n", err);
  });
