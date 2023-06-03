// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('vehicle_rest_api', 'root', 'qwerty21', {
  host: '127.0.0.1',
  dialect: 'mysql',
});

module.exports = sequelize;
