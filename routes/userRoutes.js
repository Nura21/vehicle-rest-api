// routes/userRoutes.js
const express = require('express');
const { authenticateToken } = require('../middlewares/authMiddleware');
const { validateUser } = require('../middlewares/validationMiddleware');
const { isAdmin } = require('../middlewares/isAdminMiddleware');
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

const router = express.Router();

router.post('/', validateUser, isAdmin, createUser);
router.get('/', authenticateToken, getUsers);
router.get('/:id', authenticateToken, isAdmin, getUserById);
router.put('/:id', authenticateToken, isAdmin, validateUser, updateUser);
router.delete('/:id', authenticateToken, isAdmin, deleteUser);

module.exports = router;
