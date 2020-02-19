"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          "breeder" : "Spiderman",
          "email" : "spiderman@gmail.com",
          "password": "kepobanget",
          "phone": "083896831233",
         "address": "permata bintaro residence",
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
