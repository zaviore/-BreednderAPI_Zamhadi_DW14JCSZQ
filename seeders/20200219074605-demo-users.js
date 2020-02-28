"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          breeder: "Spiderman",
          email: "spiderman@gmail.com",
          password: "kepobanget",
          phone: "083896831233",
          address: "permata bintaro residence",
          roles: "admin",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          breeder: "batman",
          email: "batman@gmail.com",
          password: "batman",
          phone: "083896831233",
          address: "perma ta bintaro residence",
          roles: "user",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          breeder: "kuaci",
          email: "kuaci@gmail.com",
          password: "kuaci",
          phone: "083896831233",
          address: "perma ta bintaro residence",
          roles: "user",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          breeder: "sayurlode",
          email: "sayurlode@gmail.com",
          password: "lode",
          phone: "083896831233",
          address: "perma ta bintaro residence",
          roles: "user",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          breeder: "sayurasam",
          email: "sayurasam@gmail.com",
          password: "sayur",
          phone: "083896831233",
          address: "perma ta bintaro residence",
          roles: "user",
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
