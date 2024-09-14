import sequelize from './config/database';
import express, { Application } from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

// Levantar el servidor
const PORT = process.env.PORT || 3000;

const app: Application = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use('/users', userRoutes);

// Al levantar el servidor
app.listen(PORT, async () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);

  try {
    await sequelize.authenticate();
    console.log('Conexión con la base de datos establecida correctamente.');
  } catch (error) {
    console.error('No se pudo conectar con la base de datos:', error);
  }
});
