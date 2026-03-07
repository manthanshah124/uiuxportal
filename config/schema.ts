import { integer, pgTable, varchar, timestamp, jsonb, json } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  credits:integer().default(5)
});

export const ProjectTable=pgTable("projects",{
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  projectId:varchar({ length: 255 }).notNull().unique(),
  userInput: varchar({ length: 1000}),
  device: varchar({ length: 50}),
  createdOn: timestamp().defaultNow().notNull(),
  config: json(),
  userId: varchar({ length: 255}).references(() => usersTable.email).notNull()
});