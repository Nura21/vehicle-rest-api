// routes/userRoutes.js
const express = require('express');
const { authenticateToken } = require('../middlewares/authMiddleware');
// const { validateUser } = require('../middlewares/validationMiddleware');
const { isAdmin } = require('../middlewares/isAdminMiddleware');
const {
  createVehicleBrand,
  getVehicleBrands,
  getVehicleBrandById,
  updateVehicleBrand,
  deleteVehicleBrand,
} = require('../controllers/vehicleBrandController');

const router = express.Router();

router.post('/', isAdmin, createVehicleBrand);
router.get('/', authenticateToken, getVehicleBrands);
router.get('/:id', authenticateToken, isAdmin, getVehicleBrandById);
router.put('/:id', authenticateToken, isAdmin, updateVehicleBrand);
router.delete('/:id', authenticateToken, isAdmin, deleteVehicleBrand);

module.exports = router;
