'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fazenda extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Fazenda.belongsTo(models.Usuario);
      Fazenda.hasMany(models.Talhao);
    }
  }
  Fazenda.init({
    nomeFazenda: DataTypes.STRING,
    usuarioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Fazenda',
  });
  return Fazenda;
};