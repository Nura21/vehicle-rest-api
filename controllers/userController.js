// controllers/userController.js
const User = require('../models/User');

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

exports.getUserById = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(user);
    }
  } catch (error) {
    next(error);
  }
};

exports.createUser = async (req, res, next) => {
  const { name, email } = req.body;
  try {
    const user = await User.create({ name, email });
    res.status(201).json({ id: user.id });
  } catch (error) {
    next(error);
  }
};

exports.updateUser = async (req, res, next) => {
  const userId = req.params.id;
  const { name, email } = req.body;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      await user.update({ name, email });
      res.json({ message: 'User updated successfully' });
    }
  } catch (error) {
    next(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      await user.destroy();
      res.json({ message: 'User deleted successfully' });
    }
  } catch (error) {
    next(error);
  }
};
