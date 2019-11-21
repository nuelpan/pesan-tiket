'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Route extends Model {}  
  Route.init({
    from: DataTypes.STRING,
    to: DataTypes.STRING,
    price: DataTypes.REAL
  }, {hooks: {
    beforeCreate: (instance) => {
      if (instance.from === "" || instance.to === "" || instance.price === "") {
        // console.log(instance.from === "")
        return new Error('Field must not empty')
      }
    }
  } ,sequelize});
  Route.associate = function(models) {
    // associations can be defined here
    Route.belongsToMany(models.User, {through: models.Ticket})
  };
  return Route;
};