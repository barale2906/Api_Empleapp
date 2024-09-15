"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize"); // Importar tipos correctos
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: sequelize_1.DataTypes.INTEGER
            },
            name: {
                type: sequelize_1.DataTypes.STRING
            },
            password: {
                type: sequelize_1.DataTypes.STRING
            },
            email: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false, // Asegúrate de que el campo no sea nulo
                unique: true // Agrega la restricción de unicidad
            },
            createdAt: {
                allowNull: false,
                type: sequelize_1.DataTypes.DATE
            },
            updatedAt: {
                allowNull: false,
                type: sequelize_1.DataTypes.DATE
            }
        });
    },
    down: async (queryInterface) => {
        await queryInterface.dropTable('Users');
    }
};
