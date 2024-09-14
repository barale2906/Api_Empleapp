"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("./config/database"));
const express_1 = __importDefault(require("express"));
// Levantar el servidor
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
// Al levantar el servidor
app.listen(PORT, async () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
    try {
        await database_1.default.authenticate();
        console.log('Conexión con la base de datos establecida correctamente.');
    }
    catch (error) {
        console.error('No se pudo conectar con la base de datos:', error);
    }
});
