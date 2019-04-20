'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable( 'Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      startDate: {
        type: Sequelize.DATE
      },
      startTime: {
        type: Sequelize.DATE
      },
      endDate: {
        type: Sequelize.DATE
      },
      endTime: {
        type: Sequelize.DATE
      },
      description: {
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Events');
  }
};