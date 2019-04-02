'use strict';
module.exports = (sequelize, DataTypes) => {
  const UseRoles = sequelize.define('UseRoles', {
    id: {
      allowNull : false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTGER
    },
    role: DataTypes.STRING
  }, {});
  UseRoles.associate = function(models) {
    // associations can be defined here
    
  };
  return UseRoles;
};