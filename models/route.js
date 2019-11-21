'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Route extends Model {}  
  Route.init({
    from: DataTypes.STRING,
    to: DataTypes.STRING,
    price: DataTypes.REAL
  }, {
    validate: {
      checkField() {
        if (this.from === "" || this.to === "" || this.price === "") {
          throw new Error('Field must not empty')
        }
    },
  } ,sequelize});
  Route.associate = function(models) {
    // associations can be defined here
    Route.belongsToMany(models.User, {through: models.Ticket})
  };
  return Route;
};