"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  book.init(
    {
      tittle: DataTypes.STRING,
      isbn: DataTypes.STRING,
      author: DataTypes.STRING,
      publisher: DataTypes.STRING,
      released: DataTypes.DATE,
      stock: DataTypes.INTEGER,
      cover: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "book",
      underscored: true,
    },
  );
  return book;
};
