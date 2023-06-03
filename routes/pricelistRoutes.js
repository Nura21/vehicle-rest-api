// routes/userRoutes.js
const express = require('express');
const { authenticateToken } = require('../middlewares/authMiddleware');
const { validateUser } = require('../middlewares/validationMiddleware');
const { isAdmin } = require('../middlewares/isAdminMiddleware');
const {
  createPricelist,
  getPricelists,
  getPricelistById,
  updatePricelist,
  deletePricelist,
} = require('../controllers/pricelistController');

const router = express.Router();

router.post('/', validateUser, isAdmin, createPricelist);
router.get('/', authenticateToken, getPricelists);
router.get('/:id', authenticateToken, isAdmin, getPricelistById);
router.put('/:id', authenticateToken, isAdmin, validatePricelist, updatePricelist);
router.delete('/:id', authenticateToken, isAdmin, deletePricelist);

module.exports = router;
