'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cultivo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cultivo.init({
    campos: DataTypes.STRING,
    temp_fenologico: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'cultivo',
  });
  return cultivo;
};