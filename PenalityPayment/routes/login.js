// Route for police login
router.post('/api/police/login', (req, res) => {
    // Retrieve the username and password from the request body
    const { username, password } = req.body;
  
    // Perform authentication and handle login logic for police
    // ...
  
    // Assuming authentication is successful, you can send a success response
    res.json({ message: 'Police login successful' });
  });
  // routes.js or api.js

const express = require('express');
const router = express.Router();

// Route for police login
router.post('/api/police/login', (req, res) => {
  // Retrieve the username and password from the request body
  const { username, password } = req.body;

  // Perform authentication and handle login logic for police
  // ...

  // Assuming authentication is successful, you can send a success response
  res.json({ message: 'Police login successful' });
});

// Route for civilian login
router.post('/api/civilian/login', (req, res) => {
  // Retrieve the username and password from the request body
  const { username, password } = req.body;

  // Perform authentication and handle login logic for civilians
  // ...

  // Assuming authentication is successful, you can send a success response
  res.json({ message: 'Civilian login successful' });
});

module.exports = router;