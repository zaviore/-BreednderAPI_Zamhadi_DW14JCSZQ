"use strict";
module.exports = (sequelize, DataTypes) => {
  const payment = sequelize.define(
    "payment",
    {
      no_rek: DataTypes.INTEGER,
      proof: DataTypes.STRING,
      status: DataTypes.STRING,
      id_user: DataTypes.STRING
    },
    {}
  );
  payment.associate = function(models) {
    payment.belongsTo(models.user, { foreignKey: "id_user", as: "users" });
  };
  return payment;
};
