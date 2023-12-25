import { pgTable, unique, serial, text, timestamp, varchar, smallint, boolean } from "drizzle-orm/pg-core"

import { sql } from "drizzle-orm"


export const userRole = pgTable("user_role", {
	id: serial("id").primaryKey().notNull(),
	name: text("name").notNull(),
	createdAt: timestamp("createdAt", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updatedAt", { mode: 'string' }).defaultNow().notNull(),
},
(table) => {
	return {
		userRoleNameUnique: unique("user_role_name_unique").on(table.name),
	}
});

export const user = pgTable("user", {
	id: serial("id").primaryKey().notNull(),
	fullName: text("full_name").notNull(),
	phone: varchar("phone", { length: 20 }).notNull(),
	email: text("email").notNull(),
	roleId: smallint("roleId").notNull(),
	isBan: boolean("isBan").notNull(),
	passwordHash: text("passwordHash").notNull(),
	passwordSalt: text("passwordSalt").notNull(),
	createdAt: timestamp("createdAt", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updatedAt", { mode: 'string' }).defaultNow().notNull(),
},
(table) => {
	return {
		userPhoneUnique: unique("user_phone_unique").on(table.phone),
		userEmailUnique: unique("user_email_unique").on(table.email),
	}
});