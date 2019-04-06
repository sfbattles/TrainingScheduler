'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      email: 'richard.long.e@gmail.com',
      password: '123456',
      first: 'Richard',
      last: 'Long',
      phone: '2155384446',
      aboutme: 'I am a programmer',
      userRoleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'christine.long.e@gmail.com',
      password: '123456',
      first: 'Christine',
      last: 'Long',
      phone: '2155384446',
      aboutme: 'I am a healthcare provider',
      userRoleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.bulkDelete('users', null, {});
  }
};