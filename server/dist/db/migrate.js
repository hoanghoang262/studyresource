"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
const migrator_1 = require("drizzle-orm/node-postgres/migrator");
const main = async () => {
    console.log("Migration started ...");
    await (0, migrator_1.migrate)(db_1.db, { migrationsFolder: "./migrate" });
};
main()
    .then(() => {
    console.log("Migration success ...");
})
    .catch((err) => {
    console.error("DB migrate error\n", err);
});
