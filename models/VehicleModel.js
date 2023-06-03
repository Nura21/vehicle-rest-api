// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const VehicleType = require('../models/VehicleType');

const VehicleModel = sequelize.define('VehicleModel', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type_id: {
    type_id: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  karoseri: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  machine: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  transmission: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  history: {
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

VehicleModel.belongsTo(VehicleType, { foreignKey: 'type_id' }); // Define the association


module.exports = VehicleModel;