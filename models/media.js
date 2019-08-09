const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Media = sequelize.define('media', {
  mediaId: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  image: Sequelize.STRING,

  video: Sequelize.STRING,
});

module.exports = Media;
