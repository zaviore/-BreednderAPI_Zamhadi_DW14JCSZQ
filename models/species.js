'use strict';
module.exports = (sequelize, DataTypes) => {
  const species = sequelize.define('species', {
    nama_species: DataTypes.STRING
  }, {});
  species.associate = function(models) {
    // associations can be defined here
  };
  return species;
};