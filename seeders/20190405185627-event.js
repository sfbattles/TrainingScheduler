'use strict';
let faker = require('faker');

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
    // name: 'Gardening convention',
    name: "JavaScript 101 Event",
    createdUserId: 2,
    location: faker.address.streetAddress(),
    startDate: '2019-07-10 00:00:00',
    startTime: '2019-07-10 10:00:00',
    endDate: '2019-07-12 12:00:00',
    endTime: '2019-07-12 12:00:00',
    description: 'JavaScript learn modern practices',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    name: 'Node JS Convention',
    createdUserId: 1,
    location: faker.address.streetAddress(),
    startDate: '2019-07-10 00:00:00',
    startTime: '2019-07-10 10:00:00',
    endDate: '2019-07-12 12:00:00',
    endTime: '2019-07-12 18:00:00',
    description: 'Learn backend development',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Angular Convension',
    createdUserId: 1,
    location: faker.address.streetAddress(),
    startDate: '2019-06-10 08:00:00',
    startTime: '2019-06-10 10:00:00',
    endDate: '2019-06-12 12:00:00',
    endTime: '2019-06-12 18:00:00',
    description: 'Learn tips with Angular',
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
