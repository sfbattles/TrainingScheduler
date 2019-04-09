'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Events',[{
     name: 'NodeJs Walk Threw',
     createdUserId: 1,
     location: '120 braithwaite lane',
     startingDayAndTime: '2019-05-05 09:00:00',
     endingDayAndTime: '2019-05-05 11:00:00',
     description: 'learn node with model and migrations and seeding',
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
    name: 'Angular 7.0',
    createdUserId: 1,
    location: 'dairy queen',
    startingDayAndTime: '2019-04-24 10:00:00',
    endingDayAndTime: '2019-04-24 11:00:00',
    description: 'Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Angular Tips and tricks',
    createdUserId: 1,
    location: 'dairy queen',
    startingDayAndTime: '2019-06-10 10:00:00',
    endingDayAndTime: '2019-06-10 12:00:00',
    description: 'Learn one way tips with Angular',
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
   return queryInterface.bulkDelete('Events', null, {});
  }
};
