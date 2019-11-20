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
    }, {
        hooks: {
            afterFind:(result, option) => {
                if (result.gender === "male") {
                    result.first_name = `Mr. ${result.first_name}`
                } else {
                    result.first_name = `Ms. ${result.first_name}`
                }
            }
        }, sequelize
    });
    User.associate = function (models) {
        // associations can be defined here
        User.belongsToMany(models.Route, {through: models.Ticket})
    };
    return User;
};