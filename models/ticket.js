'use strict';
module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.Sequelize.Model;

    class Ticket extends Model {
    }

    Ticket.init({
        UserId: DataTypes.INTEGER,
        RouteId: DataTypes.INTEGER,
        date: DataTypes.DATE,
        status: DataTypes.STRING
    }, {
        sequelize
    });
    Ticket.associate = function (models) {
        // associations can be defined here
    };
    return Ticket;
};