"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      // Role có nhiều User
      Role.hasMany(models.User, { foreignKey: "RoleID" });
    }
  }

  Role.init(
    {
      RoleID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      RoleName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Role",
      tableName: "Roles",
      timestamps: false,
      defaultScope: {
        attributes: { exclude: ["id"] }, // sửa exclusion
      },
    }
  );

  return Role;
};
