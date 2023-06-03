// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const VehicleYear = sequelize.define('VehicleYear', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  year: { //manufacturing year
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  kilometer: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  previous_owner: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  maintenance_record: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  accident_history: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  service_history: {
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

module.exports = VehicleYear;