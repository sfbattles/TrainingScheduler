'use strict';

module.exports = (sequelize, DataTypes) => {
  var Events = sequelize.define(
    'Events',
    {
      id: {
        allowNull : false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTGER
      },
      first: DataTypes.STRING,
      last: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: { isEmail: { msg: 'Email is invalid' } },
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: { args: [7, 20], msg: 'Phone number invalid.' },
          isNumeric: { msg: 'Not a valid phone number.' },
        },
      },
      userRoleId: {
        type: DataTypes.INTEGER,
        allowNull : false,
      },
      aboutMe: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        },
      },
    },
  );
 
};
