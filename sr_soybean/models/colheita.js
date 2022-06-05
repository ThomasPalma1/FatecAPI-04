'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class colheita extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  colheita.init({
    sementesColhidas: DataTypes.INTEGER,
    prodReal: DataTypes.FLOAT,
    perdas: DataTypes.INTEGER,
    plantasHectare: DataTypes.FLOAT,
    vagensPlanta: DataTypes.FLOAT,
    graosVagem: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'colheita',
  });
  return colheita;
};