import { DataTypes, QueryInterface, Sequelize } from 'sequelize';  // Importar tipos correctos

module.exports = {
  up: async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,  // Asegúrate de que el campo no sea nulo
        unique: true       // Agrega la restricción de unicidad
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('Users');
  }
};
