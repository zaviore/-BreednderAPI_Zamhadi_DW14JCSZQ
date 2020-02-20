'use strict';
module.exports = (sequelize, DataTypes) => {
  const pet = sequelize.define('pet', {
    nama_pet: DataTypes.STRING,
    gender_pet: DataTypes.ENUM("male","female"),
    id_species: DataTypes.INTEGER,
    age: DataTypes.ENUM("adult","young","child"),
    id_user: DataTypes.INTEGER
  }, {});
  pet.associate = function(models) {
    // associations can be defined here
  };
  return pet;
};