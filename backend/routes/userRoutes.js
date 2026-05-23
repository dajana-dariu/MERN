const express = require('express');
const router = express.Router();

const {
  registerUser,
  loginUser,
  getCurrentUser,
} = require('../controllers/userController');

const { protect } = require('../Middleware/authMiddleware');

// REGISTER
router.post('/register', registerUser);

// LOGIN
router.post('/login', loginUser);

// CURRENT USER (protected route)
router.get('/me', protect, getCurrentUser);

module.exports = router;
