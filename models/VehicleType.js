// models/VehicleType.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const VehicleBrand = require('../models/VehicleBrand');

const VehicleType = sequelize.define('VehicleType', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brand_id: {
    type_id: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
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

VehicleType.belongsTo(VehicleBrand, { foreignKey: 'brand_id' }); // Define the association


module.exports = VehicleType;
