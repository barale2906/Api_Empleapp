"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("./config/database"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
// Cargar variables de entorno
dotenv_1.default.config();
// Levantar el servidor
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
// Middlewares
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Rutas
app.use('/users', userRoutes_1.default);
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
