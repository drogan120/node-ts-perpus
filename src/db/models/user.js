"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init(
    {
      uid: DataTypes.STRING,
      fullname: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.NUMBER,
      address: DataTypes.STRING,
      photo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
      underscored: true,
    },
  );
  return user;
};
