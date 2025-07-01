const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Example in routes/authRoutes.js
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered.' });
    }
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: 'User registered!' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all users (for testing)
router.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

module.exports = router;