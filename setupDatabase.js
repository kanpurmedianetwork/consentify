import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from './schema.js';  // Corrected import with .js extension

const sqlite = new Database('sqlite.db'); // Update path if needed

// Initialize Drizzle ORM with the schema
export const db = drizzle(sqlite, { schema });

console.log('Database and schema are initialized.');
