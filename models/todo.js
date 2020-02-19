'use strict';
module.exports = (sequelize, DataTypes) => {
  const todo = sequelize.define('todo', {
    title: DataTypes.STRING,
    is_done: DataTypes.BOOLEAN,
    create_by: DataTypes.INTEGER
  }, {});
  todo.associate = function(models) {
    // associations can be defined here
  };
  return todo;
};