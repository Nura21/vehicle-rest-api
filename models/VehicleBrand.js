// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const VehicleBrand = sequelize.define('VehicleBrand', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  deleted_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = VehicleBrand;
