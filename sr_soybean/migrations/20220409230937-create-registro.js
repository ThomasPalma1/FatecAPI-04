'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Registros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      distanciaEntreLinhas: {
        type: Sequelize.DOUBLE
      },
      contagemGraoPlanta: {
        type: Sequelize.INTEGER
      },
      doencaTalhao: {
        type: Sequelize.STRING
      },
      falhaPlantio: {
        type: Sequelize.STRING
      },
      anotacao: {
        type: Sequelize.STRING
      },
      numeroPlantio2m: {
        type: Sequelize.INTEGER
      },
      praga: {
        type: Sequelize.STRING
      },
      // talhaoId: {
      //   type: Sequelize.INTEGER,

      //   references:{
      //     model: 'Talhaos',
      //     key: 'id'
      // },

      // onUpdate: 'cascade',
      // onDelete: 'cascade' 
      // },
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
    await queryInterface.dropTable('Registros');
  }
};