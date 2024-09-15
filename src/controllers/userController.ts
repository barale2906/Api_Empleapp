import { Request, Response } from 'express';
import User from '../models/user';

// Obtener todos los usuarios
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
};

// Crear un nuevo usuario
export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await User.create({ name, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
};

// Actualizar un usuario existente
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, password, email } = req.body;
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    user.name = name;
    user.password = password;
    user.email = email;

    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
};

// Eliminar un usuario
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    await user.destroy();
    res.json({ message: 'Usuario eliminado correctamente' }).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
};
