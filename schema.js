import { sqliteTable, text, timestamp } from 'drizzle-orm/better-sqlite3';

// Users table schema
export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  email: text('email').unique().notNull(),
  password: text('password').notNull(),
  name: text('name').notNull(),
  created_at: timestamp('created_at').defaultCurrentTimestamp().notNull(),
});

// Consent records table schema
export const consentRecords = sqliteTable('consent_records', {
  id: text('id').primaryKey(),
  user_id: text('user_id').notNull().references(() => users.id),
  type: text('type').notNull(),
  description: text('description').notNull(),
  status: text('status').notNull(),
  created_at: timestamp('created_at').defaultCurrentTimestamp().notNull(),
});

// Fraud reports table schema
export const fraudReports = sqliteTable('fraud_reports', {
  id: text('id').primaryKey(),
  user_id: text('user_id').notNull().references(() => users.id),
  title: text('title').notNull(),
  description: text('description').notNull(),
  type: text('type').notNull(),
  status: text('status').notNull(),
  created_at: timestamp('created_at').defaultCurrentTimestamp().notNull(),
});
