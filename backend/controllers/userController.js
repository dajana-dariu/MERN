const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error('All fields are mandatory');
  }

  const userExists = await User.findOne({ email }); // Rregulluar edhe typo "userExcists" -> userExists
  if (userExists) {
    res.status(400);
    throw new Error('User exists');
  }

  // Këto rreshta duhet të jenë BRENDA funksionit registerUser
  const salt = await bcrypt.genSalt(10); // Ndryshuar nga getSalt në genSalt
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateJWTtoken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
}); // Kllapa mbyllëse e funksionit registerUser tani është këtu ku duhet!

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: 'LogiIn user succesful' });
});

const getCurrentUser = asyncHandler(async (req, res) => {
  res.json({ message: 'Current User Data' });
});

const generateJWTtoken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '5d' });

module.exports = { registerUser, loginUser, getCurrentUser };
