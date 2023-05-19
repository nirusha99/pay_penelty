// Import required modules
const jwt = require('jsonwebtoken');

// Define the authentication middleware
function authenticate(req, res, next) {
  // Extract the token from the request headers, query parameters, or cookies
  const token = req.headers.authorization;

  // Check if the token is present
  if (!token) {
    return res.status(401).json({ message: 'Authorization token not found' });
  }

  try {
    // Verify and decode the token
    const decodedToken = jwt.verify(token, 'your_secret_key');

    // Attach the decoded user information to the request object
    req.user = decodedToken.user;

    // Proceed to the next middleware or the API endpoint
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid authorization token' });
  }
}

// Apply the authentication middleware to your protected API endpoints
app.get('/api/protected', authenticate, (req, res) => {
  // Handle the protected endpoint logic
  res.json({ message: 'You are authorized to access this endpoint' });
});