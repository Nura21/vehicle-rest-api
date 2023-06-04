// routes/userRoutes.js
const express = require('express');
const { authenticateToken } = require('../middlewares/authMiddleware');
// const { validateUser } = require('../middlewares/validationMiddleware');
const { isAdmin } = require('../middlewares/isAdminMiddleware');
const {
  createVehicleModel,
  getVehicleModels,
  getVehicleModelById,
  updateVehicleModel,
  deleteVehicleModel,
} = require('../controllers/vehicleModelController');

const router = express.Router();

router.post('/', isAdmin, createVehicleModel);
router.get('/', authenticateToken, getVehicleModels);
router.get('/:id', authenticateToken, isAdmin, getVehicleModelById);
router.put('/:id', authenticateToken, isAdmin, updateVehicleModel);
router.delete('/:id', authenticateToken, isAdmin, deleteVehicleModel);

module.exports = router;
