'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_pet: {
        type: Sequelize.STRING
      },
      gender_pet: {
        type: Sequelize.ENUM("male","female")
      },
      id_species: {
        type: Sequelize.INTEGER
      },
      age: {
        type: Sequelize.ENUM("adult","young","child")

      },
      id_user: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pets');
  }
};