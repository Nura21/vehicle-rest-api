// routes/userRoutes.js
const express = require('express');
const { authenticateToken } = require('../middlewares/authMiddleware');
// const { validateUser } = require('../middlewares/validationMiddleware');
const { isAdmin } = require('../middlewares/isAdminMiddleware');
const {
  createVehicleType,
  getVehicleTypes,
  getVehicleTypeById,
  updateVehicleType,
  deleteVehicleType,
} = require('../controllers/vehicleTypeController');

const router = express.Router();

router.post('/', isAdmin, createVehicleType);
router.get('/', authenticateToken, getVehicleTypes);
router.get('/:id', authenticateToken, isAdmin, getVehicleTypeById);
router.put('/:id', authenticateToken, isAdmin, updateVehicleType);
router.delete('/:id', authenticateToken, isAdmin, deleteVehicleType);

module.exports = router;
