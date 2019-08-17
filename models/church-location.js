const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const ChurchLocation = sequelize.define('churchLocation', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  location: Sequelize.STRING,
  link: Sequelize.STRING,
});


module.exports = ChurchLocation;
