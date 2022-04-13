'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Registro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       Registro.belongsTo(models.Talhao)
    }
  }
  Registro.init({
    distanciaEntreLinhas: DataTypes.DOUBLE,
    contagemGraoPlanta: DataTypes.INTEGER,
    doencaTalhao: DataTypes.STRING,
    falhaPlantio: DataTypes.STRING,
    anotacao: DataTypes.STRING,
    numeroPlantio2m: DataTypes.INTEGER,
    praga: DataTypes.STRING,
    talhaoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Registro',
  });
  return Registro;
};