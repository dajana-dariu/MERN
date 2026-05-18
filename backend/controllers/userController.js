const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const { get } = require('mongoose');

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('All fields are mandatory');
  }
  const userExcists = await User.findOne({ email });
  if (userExcists) {
    res.status(400);
    throw new Error('User exists');
  }
});

const salt = await bcrypt.getSalt(10);
const hashedPassword = await bcrypt.hash(password, salt);
const user = await User.create({ name, email, password: hashedPassword });
if (user) {
  res.status(201).json({
    _id: user.id,
    name: user.name,
    email: user.email,
    token: generateJWTtoken(user._id),
  });
}

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: 'LogiIn user succesful' });
});
const getCurrentUser = asyncHandler(async (req, res) => {
  res.json({ message: 'Current User Data' });
});

const generateJWTtoken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '5d' });
module.exports = { registerUser, loginUser, getCurrentUser };
