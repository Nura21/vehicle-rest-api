// routes/userRoutes.js
const express = require('express');
const { authenticateToken } = require('../middlewares/authMiddleware');
// const { validateUser } = require('../middlewares/validationMiddleware');
const { isAdmin } = require('../middlewares/isAdminMiddleware');
const {
  createVehicleYear,
  getVehicleYears,
  getVehicleYearById,
  updateVehicleYear,
  deleteVehicleYear,
} = require('../controllers/vehicleYearController');

const router = express.Router();

router.post('/', isAdmin, createVehicleYear);
router.get('/', authenticateToken, getVehicleYears);
router.get('/:id', authenticateToken, isAdmin, getVehicleYearById);
router.put('/:id', authenticateToken, isAdmin, updateVehicleYear);
router.delete('/:id', authenticateToken, isAdmin, deleteVehicleYear);

module.exports = router;
