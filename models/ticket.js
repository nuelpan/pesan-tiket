'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    userId: DataTypes.INTEGER,
    routeId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    status: DataTypes.STRING
  }, {});
  Ticket.associate = function(models) {
    // associations can be defined here
  };
  return Ticket;
};