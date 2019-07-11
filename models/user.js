const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const User = sequelize.define('user', {
  userId: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },

});


module.exports = User;
