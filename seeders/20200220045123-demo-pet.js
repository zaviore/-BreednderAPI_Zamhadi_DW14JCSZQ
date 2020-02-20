"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "pets",
      [
        {

          "nama_pet" : "kevin",
          "gender_pet": "male",
          "id_species": "1",
         "age": "adult",
         "id_user": "1",

         createdAt: new Date(),
         updatedAt: new Date()
        }
,
        {
        
          "nama_pet" : "jin",
          "gender_pet": "male",
          "id_species": "2",
         "age": "adult",
         "id_user": "1",

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
