"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
// Rutas
router.get('/users', userController_1.getUsers); // Obtener todos los usuarios
router.post('/users', userController_1.createUser); // Crear un nuevo usuario
router.put('/users/:id', userController_1.updateUser); // Actualizar un usuario existente
router.delete('/users/:id', userController_1.deleteUser); // Eliminar un usuario
exports.default = router;
