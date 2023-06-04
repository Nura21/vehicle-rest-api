const express = require('express');
const { body } = require('express-validator');
const { registerUser, loginUser } = require('../controllers/authController');
const validationMiddleware = require('../middlewares/validationMiddleware');

const router = express.Router();

router.post('/register', [
  body('name').notEmpty(),
  body('email').isEmail(),
  body('password').notEmpty(),
  validationMiddleware,
], registerUser);

router.post('/login', [
  body('email').isEmail(),
  body('password').notEmpty(),
  validationMiddleware,
], loginUser);

module.exports = router;
