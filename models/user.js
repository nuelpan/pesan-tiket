'use strict';
module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.Sequelize.Model;

    class User extends Model {
    }

    User.init({
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
            afterFind(attributes, options) {
                let prefix = "";
                let firstNameCapitalize = attributes.dataValues.first_name[0].toUpperCase();
                let firstName = attributes.dataValues.first_name.slice(1);
                let lastNameCapitalize = attributes.dataValues.last_name[0].toUpperCase();
                let lastName = attributes.dataValues.last_name.slice(1);
                if (attributes.dataValues.gender === 'male') {
                    prefix = 'Mr.'
                } else {
                    prefix = 'Mrs.'
                }
                attributes.dataValues.first_name = prefix + firstNameCapitalize + firstName;
                attributes.dataValues.last_name = lastNameCapitalize + lastName;
                attributes.dataValues.gender = attributes.dataValues.gender[0].toUpperCase();
            }
        },
        sequelize
    });
    User.associate = function (models) {
        // associations can be defined here
        User.belongsToMany(models.Route, {through: models.Ticket})
    };
    return User;
};