'use strict';
module.exports = (sequelize, DataTypes) => {
  const Route = sequelize.define('Route', {
    from: DataTypes.STRING,
    to: DataTypes.STRING,
    price: DataTypes.REAL
  }, {});
  Route.associate = function(models) {
    // associations can be defined here
    Route.belongsToMany(models.User, {through: models.Ticket})
  };
  return Route;
};