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
      // createdUserId: {
      //   type: Sequelize.INTEGER,
      //    references: {
      //      model: 'User',
      //      key: 'id'
      //    },
      //    onUpdate: 'CASCADE',
      //    onDelete: 'SET NULL',
      // },
      location: {
        type: Sequelize.STRING
      },
      startingDayAndTime: {
        type: Sequelize.DATE
      },
      endingDayAndTime: {
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