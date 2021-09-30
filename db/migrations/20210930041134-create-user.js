'use strict';
const table_name = 'user';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(table_name, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserName: {
        type: Sequelize.STRING, allowNull: false
      },
      Parent: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(table_name);
  }
};