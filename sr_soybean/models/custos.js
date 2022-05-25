'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class custos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  custos.init({
    maoObra: DataTypes.FLOAT,
    maquinas: DataTypes.FLOAT,
    insumos: DataTypes.FLOAT,
    valorSementes: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'custos',
  });
  return custos;
};