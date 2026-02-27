import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
	id: text("id").primaryKey().notNull(),
	email: text("email").notNull().unique(),
	passwordHash: text("password_hash").notNull(),
	createdAt: integer("created_at").notNull(),
});

export const sessions = sqliteTable("sessions", {
	id: text("id").primaryKey().notNull(),
	userId: text("user_id").notNull(),
	createdAt: integer("created_at").notNull(),
});

export const passwordResets = sqliteTable("password_resets", {
	id: text("id").primaryKey().notNull(),
	email: text("email").notNull(),
	code: text("code").notNull(),
	expiresAt: integer("expires_at").notNull(),
});

export const items = sqliteTable("items", {
	id: text("id").primaryKey().notNull(),
	title: text("title").notNull(),
	createdAt: integer("created_at").notNull(),
	updatedAt: integer("updated_at").notNull(),
});
