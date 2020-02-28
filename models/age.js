'use strict';
module.exports = (sequelize, DataTypes) => {
  const age = sequelize.define('age', {
    name_age: DataTypes.STRING
  }, {});
  age.associate = function(models) {
    // associations can be defined here
  };
  return age;
};