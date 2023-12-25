import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const roles = pgTable("user_role", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});
