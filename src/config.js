import { config } from 'dotenv';
config();

export const DB_URI = process.env.MONGODB_URI
export const PORT = process.env.PORT || 3000    