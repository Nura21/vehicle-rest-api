const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/User');
const { JWT_SECRET } = require('../config/config');

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ where: { email } });
    
    if (existingUser) {
      return res.status(400).json({ 
        error: 'Email already exists' 
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET);

    res.status(201).json({ 
      user, 
      token 
    });
  } catch (error) {
    console.error('Error registering user:', error);

    res.status(500).json({ 
      error: 'Internal server error' 
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    const passwordMatch = await bcrypt.compare(password, user.password);
    
    if (!user) {
      return res.status(401).json({ 
        error: 'Invalid email or password' 
      });
    }

    if (!passwordMatch) {
      return res.status(401).json({ 
        error: 'Invalid email or password' 
      });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET);

    res.status(200).json({ 
      user, 
      token 
    });
  } catch (error) {
    console.error('Error logging in user:', error);

    res.status(500).json({ 
      error: 'Internal server error' 
    });
  }
};

module.exports = { registerUser, loginUser };
