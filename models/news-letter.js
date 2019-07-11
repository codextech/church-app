const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const NewsLetter = sequelize.define('newsLetter', {
  newsLetterId: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  isRead: Sequelize.BOOLEAN,
});

module.exports = NewsLetter;
