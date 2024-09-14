"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const bcrypt_1 = __importDefault(require("bcrypt"));
const database_1 = __importDefault(require("../config/database"));
class User extends sequelize_1.Model {
    // Método para comparar el password hasheado
    validPassword(password) {
        return bcrypt_1.default.compareSync(password, this.password);
    }
}
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: database_1.default,
    tableName: 'users',
    hooks: {
        beforeCreate: async (user) => {
            if (user.password) {
                const salt = await bcrypt_1.default.genSalt(10);
                user.password = await bcrypt_1.default.hash(user.password, salt);
            }
        },
        beforeUpdate: async (user) => {
            if (user.password) {
                const salt = await bcrypt_1.default.genSalt(10);
                user.password = await bcrypt_1.default.hash(user.password, salt);
            }
        },
    },
});
exports.default = User;
/* import { Model, DataTypes, Sequelize } from 'sequelize';
import bcrypt from 'bcrypt';

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  class User extends Model {
    static associate(models: any) {
      // Asociaciones del modelo
    }
  }

  User.init({
    name: dataTypes.STRING,
    password: dataTypes.STRING,
    email: dataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
}; */
