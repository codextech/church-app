const Sequelize = require('sequelize');
const config = require('./config/db-config')[process.env.NODE_ENV || "development"];



const sequelize = new Sequelize(config.database,config.user, config.password, {
  dialect: 'mysql',
  host: config.host,
  define: {
      timestamps: true
  }
});

module.exports = sequelize;
