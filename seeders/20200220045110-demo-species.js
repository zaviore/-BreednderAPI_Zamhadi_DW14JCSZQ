"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "species",
      [
        {
          
          
         "nama_species": "kumbang",
         createdAt: new Date(),
         updatedAt: new Date()
        }
        , {
          
        
         "nama_species": "kuda",
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
