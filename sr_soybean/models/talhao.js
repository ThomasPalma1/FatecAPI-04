'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Talhao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Talhao.belongsTo(models.Fazenda);
      // Talhao.hasMany(models.Registro);
    }
  }
  Talhao.init({
    nomeCampo: DataTypes.STRING,
    //dataSemeadura: DataTypes.DATE,
    //dataTalhaoExistente: DataTypes.DATE,
    latitude: DataTypes.STRING,
    //dataColheita: DataTypes.DATE,
    //cultivares: DataTypes.STRING,
    longitude: DataTypes.STRING,
    areaPlantada: DataTypes.FLOAT,
    //custoProducao: DataTypes.FLOAT
    // fazendaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Talhao',
  });
  return Talhao;
};