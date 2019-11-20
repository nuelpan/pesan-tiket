'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    UserId: DataTypes.INTEGER,
    RouteId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    status: DataTypes.STRING
  }, {});
  Ticket.associate = function(models) {
    // associations can be defined here
  };
  return Ticket;
};