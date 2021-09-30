'use strict';

const table_name = 'visitor_log';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(table_name, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      RequestUrl: {
        allowNull: false,
        type: Sequelize.STRING
      },
      RequestParameters: {
        allowNull: false,
        type: Sequelize.STRING(500)
      },
      RequestTimestamp: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(table_name);
  }
};