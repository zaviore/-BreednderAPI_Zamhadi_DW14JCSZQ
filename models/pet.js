"use strict";
module.exports = (sequelize, DataTypes) => {
  const pet = sequelize.define(
    "pet",
    {
      nama_pet: DataTypes.STRING,
      gender_pet: DataTypes.ENUM("male", "female"),
      id_species: DataTypes.INTEGER,
      age: DataTypes.ENUM("adult", "young", "child"),
      id_user: DataTypes.INTEGER,
      about_pet: DataTypes.STRING,
      foto: DataTypes.STRING
    },
    {}
  );
  pet.associate = function(models) {
    pet.belongsTo(models.user, { foreignKey: "id_user", as: "breeder" });

    pet.belongsTo(models.species, { foreignKey: "id_species", as: "category" });
  };

  return pet;
};
