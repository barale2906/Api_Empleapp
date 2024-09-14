"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
// Obtener todos los usuarios
const getUsers = async (req, res) => {
    try {
        const users = await user_1.default.findAll();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
};
exports.getUsers = getUsers;
// Crear un nuevo usuario
const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = await user_1.default.create({ name, email, password });
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
};
exports.createUser = createUser;
// Actualizar un usuario existente
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, password, email } = req.body;
        const user = await user_1.default.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        user.name = name;
        user.password = password;
        user.email = email;
        await user.save();
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
};
exports.updateUser = updateUser;
// Eliminar un usuario
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await user_1.default.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        await user.destroy();
        res.json({ message: 'Usuario eliminado correctamente' });
    }
    catch (error) {
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
};
exports.deleteUser = deleteUser;
