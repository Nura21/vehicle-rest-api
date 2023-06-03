// routes/userRoutes.js
const express = require('express');
const { authenticateToken } = require('../middlewares/authMiddleware');
const { validateUser } = require('../middlewares/validationMiddleware');
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

const router = express.Router();

router.post('/', validateUser, createUser);
router.get('/', authenticateToken, getUsers);
router.get('/:id', authenticateToken, getUserById);
router.put('/:id', authenticateToken, validateUser, updateUser);
router.delete('/:id', authenticateToken, deleteUser);

module.exports = router;
