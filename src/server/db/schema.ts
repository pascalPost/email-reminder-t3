import { sql } from "drizzle-orm";
import { integer, text, sqliteTable } from "drizzle-orm/sqlite-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const clients = sqliteTable("client", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  frequency: text("frequency").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const clientSchema = createInsertSchema(clients);
export const clientInsertSchema = clientSchema
  .omit({
    id: true,
    createdAt: true,
  })
  .extend({
    frequency: z.enum(["semiannual", "annual"]),
  });

export const emailHistory = sqliteTable("email_history", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  clientId: integer("client_id", { mode: "number" })
    .notNull()
    .references(() => clients.id),
  timestamp: integer("timestamp", { mode: "timestamp" })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});
