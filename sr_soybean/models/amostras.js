'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class amostras extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  amostras.init({
    pragas: DataTypes.STRING,
    doencas: DataTypes.STRING,
    falhaPlantio: DataTypes.INTEGER,
    anotacoes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'amostras',
  });
  return amostras;
};