"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.production = exports.test = exports.development = void 0;
require('dotenv').config(); // Cargar variables de entorno desde .env
exports.development = {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_NAME || 'my_database',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql', // Especificar el dialecto (puede ser 'mysql', 'postgres', 'sqlite', etc.)
};
exports.test = {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_NAME || 'database_test',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql', // Especificar el dialecto
};
exports.production = {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_NAME || 'database_production',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql', // Especificar el dialecto
};
