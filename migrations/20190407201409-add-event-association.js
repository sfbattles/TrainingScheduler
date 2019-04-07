
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Events',    //name of the source Model
      'CreatedUserId', //name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',  //name of Target Model
          key: 'id'         //key in Target Model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    );  //addColumn
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('Events', 'CreatedUserId');
  }
};
