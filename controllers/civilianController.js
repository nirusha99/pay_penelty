const Civilian = require('../models/civilian.models');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();

// Authentication middleware
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Extract the token from the Authorization header

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, 'your_secret_key', (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Failed to authenticate token' });
    }

    req.userId = decoded.id; // Attach the decoded user ID to the request object
    next();
  });
};
// Civilian Registration Endpoint
app.post('/api/civilian/register', async (req, res) => {
  try {
    const { username, password, /* other civilian-specific data */ } = req.body;

    // Check if the username already exists
    const existingUser = await Civilian.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new civilian user
    const civilianUser = new Civilian({
      username,
      password: hashedPassword,
      /* other civilian-specific data */
    });

    // Save the civilian user to the database
    await civilianUser.save();

    // Generate the JWT token
    const token = jwt.sign({ id: civilianUser._id, username: civilianUser.username }, 'your_secret_key', { expiresIn: '1h' }); // Replace 'your_secret_key' with your actual secret key and set the expiration time as needed

    res.status(201).json({ message: 'Civilian user registered successfully', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Protected API Endpoint
app.get('/api/protected', authenticate, (req, res) => {
  // Access the authenticated user's ID from req.userId
  const userId = req.userId;

  // Handle the protected endpoint logic
  // ...

  res.json({ message: 'Protected endpoint accessed successfully' });
});


// Civilian Login Endpoint
app.post('/api/civilian/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the civilian user by username
    const civilianUser = await Civilian.findOne({ username });
    if (!civilianUser) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, civilianUser.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate the JWT token
    const token = jwt.sign({ id: civilianUser._id, username: civilianUser.username }, 'your_secret_key', { expiresIn: '1h' }); // Replace 'your_secret_key' with your actual secret key and set the expiration time as needed

    res.status(200).json({ message: 'Civilian user logged in successfully', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = app;
