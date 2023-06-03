// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const VehicleYear = require('../models/VehicleYear');
const VehicleModel = require('./VehicleModel');

const Pricelist = sequelize.define('Pricelist', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  year_id: { //manufacturing year
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  model_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  varian: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  discount: {
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

Pricelist.belongsTo(VehicleYear, { foreignKey: 'year_id' }); // Define the association
Pricelist.belongsTo(VehicleModel, {foreignKey: 'model_id'});


module.exports = Pricelist;