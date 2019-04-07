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
    startingDayAndTime: DataTypes.DATE,
    endingDayAndTime: DataTypes.DATE,
    description: DataTypes.STRING
  }, {});
  Events.associate = function(models) {
    // associations can be defined here
      models.Events.belongsTo(models.Users,
        {
        foreignKey: 'CreatedUserId',
        sourceKey: 'id',
      });
    };
  return Events;
};