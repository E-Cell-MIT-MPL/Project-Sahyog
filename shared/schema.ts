import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const pitches = pgTable("pitches", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  startupName: text("startup_name").notNull(),
  pitchDocName: text("pitch_doc_name"),
  pitchPresented: boolean("pitch_presented"),
});

export const insertPitchSchema = createInsertSchema(pitches).pick({
  name: true,
  email: true,
  startupName: true,
  pitchDocName: true,
  pitchPresented: true,
});

export type InsertPitch = z.infer<typeof insertPitchSchema>;
export type Pitch = typeof pitches.$inferSelect;

export const resources = pgTable("resources", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  link: text("link"),
});

export const insertResourceSchema = createInsertSchema(resources).pick({
  title: true,
  description: true,
  link: true,
});

export type InsertResource = z.infer<typeof insertResourceSchema>;
export type Resource = typeof resources.$inferSelect;
