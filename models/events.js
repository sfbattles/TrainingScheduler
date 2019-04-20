'use strict';
module.exports = (sequelize, DataTypes) => {
  const Events = sequelize.define(
    'Events', {
    id: {
      allowNull : false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    startDate: DataTypes.DATE,
    startTime: DataTypes.DATE,
    endDate: DataTypes.DATE,
    endTime: DataTypes.DATE,
    description: DataTypes.STRING,
    CreatedUserId: DataTypes.INTEGER
  }, {});
  Events.associate = function(models) {
    // associations can be defined here
      
    };
  return Events;
};