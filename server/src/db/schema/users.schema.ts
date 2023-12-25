import {
  boolean,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
  integer,
  smallint,
} from "drizzle-orm/pg-core";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";
import { relations } from "drizzle-orm";
import { roles } from "./roles.schema";

export const users = pgTable("user", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  phone: varchar("phone", { length: 20 }).notNull().unique(),
  email: text("email").notNull().unique(),
  roleId: smallint("roleId").notNull(),
  isBan: boolean("isBan").notNull(),
  passwordHash: text("passwordHash").notNull(),
  passwordSalt: text("passwordSalt").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export const usersRelations = relations(users, ({ one }) => ({
  roles: one(roles),
}));

export type User = InferSelectModel<typeof users>;
export type NewUser = InferInsertModel<typeof users>;
