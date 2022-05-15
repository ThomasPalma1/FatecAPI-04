'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('amostras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pragas: {
        type: Sequelize.STRING
      },
      doencas: {
        type: Sequelize.STRING
      },
      falhaPlantio: {
        type: Sequelize.INTEGER
      },
      anotacoes: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('amostras');
  }
};