'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      email: 'richard.long.e@gmail.com',
      password: '$2b$10$3.9II2U8nSO6eOmXqQTWsuAUsZHo4PmAJ/uIjrOwy5R3WYsIpj..m',
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
      password: '$2b$10$3.9II2U8nSO6eOmXqQTWsuAUsZHo4PmAJ/uIjrOwy5R3WYsIpj..m',
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
