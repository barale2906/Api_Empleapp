import { Router } from 'express';
import { getUsers, createUser, updateUser, deleteUser } from '../controllers/userController';


const router = Router();

// Rutas
router.get('/users', getUsers); // Obtener todos los usuarios
router.post('/users', createUser); // Crear un nuevo usuario
router.put('/users/:id', updateUser); // Actualizar un usuario existente
router.delete('/users/:id', deleteUser); // Eliminar un usuario

export default router;
