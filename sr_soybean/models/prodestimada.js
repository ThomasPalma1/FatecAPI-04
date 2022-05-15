'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class prodEstimada extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  prodEstimada.init({
    pesoMilGraos: DataTypes.FLOAT,
    qtdeDezM: DataTypes.INTEGER,
    distanciaLinhas: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'prodEstimada',
  });
  return prodEstimada;
};