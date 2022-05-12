'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Fazendas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomeFazenda: {
        type: Sequelize.STRING
      },
      // usuarioId: {
      //   type: Sequelize.INTEGER,

      //   references:{
      //     model: 'Usuarios',
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
    await queryInterface.dropTable('Fazendas');
  }
};