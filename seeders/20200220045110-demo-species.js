"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "species",
      [
        {
          nama_species: "bird",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nama_species: "horse",
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          nama_species: "bug",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nama_species: "crab",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nama_species: "pig",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nama_species: "monkey",
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
