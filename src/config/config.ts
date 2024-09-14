require('dotenv').config();  // Cargar variables de entorno desde .env

export const development = {
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || null,
  database: process.env.DB_NAME || 'my_database',
  host: process.env.DB_HOST || '127.0.0.1',
  dialect: 'mysql',  // Especificar el dialecto (puede ser 'mysql', 'postgres', 'sqlite', etc.)
};

export const test = {
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || null,
  database: process.env.DB_NAME || 'database_test',
  host: process.env.DB_HOST || '127.0.0.1',
  dialect: 'mysql',  // Especificar el dialecto
};

export const production = {
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || null,
  database: process.env.DB_NAME || 'database_production',
  host: process.env.DB_HOST || '127.0.0.1',
  dialect: 'mysql',  // Especificar el dialecto
};
