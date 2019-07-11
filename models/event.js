const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Event = sequelize.define('event', {
  eventId: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true
  },
  eventTitle: {
    type: Sequelize.STRING,
    allowNull: false
  },
  eventShortDescription: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  eventDescription: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  eventImage: Sequelize.STRING,
  eventDate: Sequelize.DATE,
  location: Sequelize.STRING,
});

module.exports = Event;
