const Police = require('../models/police.models');
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


// Police Registration Endpoint
app.post('/api/police/register', async (req, res) => {
  try {
    const { username, password, /* other police-specific data */ } = req.body;

    // Check if the username already exists
    const existingUser = await Police.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new police user
    const policeUser = new Police({
      username,
      password: hashedPassword,
      /* other police-specific data */
    });

    // Save the police user to the database
    await policeUser.save();

    // Generate the JWT token
    const token = jwt.sign({ id: policeUser._id, username: policeUser.username }, 'your_secret_key', { expiresIn: '1h' }); // Replace 'your_secret_key' with your actual secret key and set the expiration time as needed

    res.status(201).json({ message: 'Police user registered successfully', token });
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



// Police Login Endpoint
app.post('/api/police/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the police user by username
    const policeUser = await Police.findOne({ username });
    if (!policeUser) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, policeUser.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate the JWT token
    const token = jwt.sign({ id: policeUser._id, username: policeUser.username }, 'your_secret_key', { expiresIn: '1h' }); // Replace 'your_secret_key' with your actual secret key and set the expiration time as needed

    res.status(200).json({ message: 'Police user logged in successfully', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = app;
