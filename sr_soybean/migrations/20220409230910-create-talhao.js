'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Talhaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dataSemeadura: {
        type: Sequelize.DATE
      },
      dataTalhaoExistente: {
        type: Sequelize.DATE
      },
      latitude: {
        type: Sequelize.STRING
      },
      dataColheita: {
        type: Sequelize.DATE
      },
      cultivares: {
        type: Sequelize.STRING
      },
      longitude: {
        type: Sequelize.STRING
      },
      areaPlantada: {
        type: Sequelize.INTEGER
      },
      custoProducao: {
        type: Sequelize.DOUBLE
      },
      fazendaId: {
        type: Sequelize.INTEGER,

        references:{
          model: 'Fazendas',
          key: 'id'
      },

      onUpdate: 'cascade',
      onDelete: 'cascade' 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Talhaos');
  }
};