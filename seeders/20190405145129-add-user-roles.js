'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.bulkInsert('UserRoles', [{
     role: 'admin',
     createdAt: new Date(),
     updatedAt: new Date()
   },
    { 
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
   }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('UserRoles', null, {});
  }
};
