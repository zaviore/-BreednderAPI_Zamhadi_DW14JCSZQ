'use strict';
module.exports = (sequelize, DataTypes) => {
  const age = sequelize.define('age', {
    id_age: DataTypes.INTEGER,
    nama_age: DataTypes.STRING
  }, {});
  age.associate = function(models) {
    age.hasOne(models.pet,{
      foreignKey:"id_age"
    })
  };
  return age;
};