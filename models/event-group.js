const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const EventGroup = sequelize.define('eventGroup', {
  eventGroupId: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  isDefault: Sequelize.BOOLEAN,
  description: Sequelize.STRING,
  image: Sequelize.STRING,
});


module.exports = EventGroup;
