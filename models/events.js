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
    createdUserId: {
      type: DataTypes.INTEGER    
},
    location: DataTypes.STRING,
    startingDayAndTime: DataTypes.DATE,
    endingDayAndTime: DataTypes.DATE,
    description: DataTypes.STRING
  }, {});
  Events.associate = function(models) {
    // associations can be defined here
    console.log(models)
    Events.belongsTo(models.Users)
  };
  return Events;
};