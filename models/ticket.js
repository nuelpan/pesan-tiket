'use strict';
module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.Sequelize.Model;

    class Ticket extends Model {
    }

    Ticket.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        UserId: DataTypes.INTEGER,
        RouteId: DataTypes.INTEGER,
        date: DataTypes.DATE,
        status: DataTypes.STRING
    }, {
        sequelize
    });
    Ticket.associate = function (models) {
        // associations can be defined here
        Ticket.belongsTo(models.Route);
        Ticket.belongsTo(models.User);
    };
    return Ticket;
};