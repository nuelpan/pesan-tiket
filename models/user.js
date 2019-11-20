'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        gender: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true,
            },
            unique: {
                args: true,
                msg: 'Email address already in use!'
            }
        },
        password: DataTypes.STRING,
        secret: DataTypes.STRING,
        is_login: DataTypes.BOOLEAN
    }, {});
    User.associate = function (models) {
        // associations can be defined here
        User.belongsToMany(models.Route, {through: models.Ticket})
    };
    return User;
};