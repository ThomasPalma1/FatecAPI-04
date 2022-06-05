'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('prodEstimadas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pesoMilGraos: {
        type: Sequelize.FLOAT
      },
      qtdeDezM: {
        type: Sequelize.INTEGER
      },
      distanciaLinhas: {
        type: Sequelize.FLOAT
      },
      plantasHectare: {
        type: Sequelize.FLOAT
      },
      vagensPlanta: {
        type: Sequelize.FLOAT
      },
      graosVagem: {
        type: Sequelize.FLOAT
      },
      prodEstimada: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('prodEstimadas');
  }
};