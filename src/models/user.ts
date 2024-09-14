import { Model, DataTypes, Sequelize } from 'sequelize';

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  class User extends Model {
    static associate(models: any) {
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
