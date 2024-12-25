'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // User thuộc về một Role
      User.belongsTo(models.Role, { foreignKey: 'RoleID' });
    }
  }

  User.init(
    {
      UserID: { type: DataTypes.INTEGER, primaryKey: true },
      UserName: DataTypes.STRING,
      PasswordHash: DataTypes.STRING,
      RoleID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'Users',
      timestamps: false,
    }
  );

  return User;
};
