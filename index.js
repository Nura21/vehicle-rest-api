// index.js
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const pricelistRoutes = require('./routes/pricelistRoutes');
const vehicleBrandRoutes = require('./routes/vehicleBrandRoutes');
const vehicleModelRoutes = require('./routes/vehicleModelRoutes');
const vehicleTypeRoutes = require('./routes/vehicleTypeRoutes');
const vehicleYearRoutes = require('./routes/vehicleYearRoutes');
const sequelize = require('./config/database');

// Create Express app
const app = express();
app.use(bodyParser.json());

// Define routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/pricelists', pricelistRoutes);
app.use('/api/vehicle-brands', vehicleBrandRoutes);
app.use('/api/vehicle-models', vehicleModelRoutes);
app.use('/api/vehicle-types', vehicleTypeRoutes);
app.use('/api/vehicle-years', vehicleYearRoutes);

// Sync Sequelize models with the database
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
    return sequelize.sync();
  })
  .then(() => {
    console.log('Sequelize models synced with the database');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
