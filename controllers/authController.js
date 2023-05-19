const jwt = require('jsonwebtoken');

// Handle user login
exports.login = (req, res) => {
  // Validate user credentials and authenticate the user

  // Assuming you have a user object containing relevant user information after authentication
  const user = {
    id: 'user123',
    username: 'exampleuser',
    role: 'police' // or 'civilian'
  };

  const { secretKey } = require('./config');

  // Generate the JWT token
  const token = jwt.sign({ id: policeUser._id, username: policeUser.username }, secretKey, { expiresIn: '1h' });

  // Include the token in the response
  res.json({ token });
};
