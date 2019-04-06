'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    id: {
      allowNull : false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTGER
    },
    name: DataTypes.STRING,
    createdUserId: {
      type: DataTypes.INTEGER,
      references: 'users', // <<< Note, its table's name, not object name
      referencesKey: 'id' // <<< Note, its a column name
},
    location: DataTypes.STRING,
    startingDayAndTime: DataTypes.DATE,
    endingDayAndTime: DataTypes.DATE,
    description: DataTypes.STRING
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
    Event.hasOne(models.users)
  };
  return Event;
};