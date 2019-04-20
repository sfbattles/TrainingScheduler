'use strict';
let faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      email: faker.internet.email(),
      password: '$2b$10$3.9II2U8nSO6eOmXqQTWsuAUsZHo4PmAJ/uIjrOwy5R3WYsIpj..m',
      first: faker.name.firstName(),
      last: faker.name.lastName(),
      phone: '2155384446',
      aboutme: faker.lorem.paragraph() ,
      userRoleId: 1,
      isTrainer: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: faker.internet.email(),
      password: '$2b$10$3.9II2U8nSO6eOmXqQTWsuAUsZHo4PmAJ/uIjrOwy5R3WYsIpj..m',
      first: faker.name.firstName(),
      last: faker.name.lastName(),
      phone: faker.phone.phoneNumber(),
      aboutme: faker.lorem.sentence(),
      userRoleId: 1,
      isTrainer: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: faker.internet.email(),
      password: '$2b$10$3.9II2U8nSO6eOmXqQTWsuAUsZHo4PmAJ/uIjrOwy5R3WYsIpj..m',
      first: faker.name.firstName(),
      last: faker.name.lastName(),
      phone: faker.phone.phoneNumber(),
      aboutme: faker.lorem.sentence(),
      userRoleId: 1,
      isTrainer: faker.random.boolean(),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.bulkDelete('users', null, {});
  }
};
