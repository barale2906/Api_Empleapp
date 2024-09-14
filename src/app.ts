import sequelize from './config/database';
import express, { Application } from 'express';

// Levantar el servidor
const PORT = process.env.PORT || 3000;

const app: Application = express();

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
