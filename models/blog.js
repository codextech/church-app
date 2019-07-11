const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Blog = sequelize.define('blog', {
  blogId: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true
  },
  blogTitle: {
    type: Sequelize.STRING,
    allowNull: false
  },
  blogDescription: {
    type: Sequelize.TEXT,
    allowNull: false
  },

  blogImage: Sequelize.STRING,
});

module.exports = Blog;
