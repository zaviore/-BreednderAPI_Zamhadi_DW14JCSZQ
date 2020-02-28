"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "pets",
      [
        {
          nama_pet: "kevin",
          gender_pet: "male",
          id_species: "1",
          age: "adult",
          id_user: "1",

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nama_pet: "jin",
          gender_pet: "male",
          id_species: "2",
          age: "adult",
          id_user: "2",

          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          nama_pet: "elora",
          gender_pet: "female",
          id_species: "2",
          age: "adult",
          id_user: "3",

          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          nama_pet: "oppai",
          gender_pet: "female",
          id_species: "3",
          age: "adult",
          id_user: "4",

          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          nama_pet: "jun",
          gender_pet: "male",
          id_species: "5",
          age: "adult",
          id_user: "5",

          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
