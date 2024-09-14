"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize, dataTypes) => {
    class User extends sequelize_1.Model {
        static associate(models) {
            // Asociaciones del modelo
        }
    }
    User.init({
        firstName: dataTypes.STRING,
        lastName: dataTypes.STRING,
        email: dataTypes.STRING
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};
