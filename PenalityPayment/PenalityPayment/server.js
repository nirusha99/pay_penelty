const express = require('express');
const mongoose = require('mongoose');
const { authenticate } = require('./authMiddleware');

const app = express();
const port = 3000; // You can change the port number if needed

mongoose.connect('mongodb+srv://aminajaved1999:1231@cluster0.vntojfl.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Import the routes file
const routes = require('./routes');

// Apply the authentication middleware to protect the routes
app.use(authenticate);

// Add the routes middleware
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
