// routes/penalty.js

const express = require('express');
const router = express.Router();
const penaltyController = require('../controllers/penalty.controller');
const Penalty = require('../models/penalty.models');

// POST request to register a new penalty
router.post('/register', penaltyController.register);
const express = require('express');

// API endpoint for handling payment success notification
router.put('/penalties/:id/payment-success', async (req, res) => {
  const penaltyId = req.params.id;

  try {
    // Retrieve the penalty record from the database
    const penalty = await Penalty.findById(penaltyId);

    if (!penalty) {
      return res.status(404).json({ error: 'Penalty not found' });
    }

    // Update the penalty status to "Paid"
    penalty.status = 'Paid';

    // Save the updated penalty record back to the database
    await penalty.save();

    // Send a success response
    return res.status(200).json({ message: 'Payment successfully processed' });
  } catch (error) {
    console.error('Error updating penalty status:', error);
    return res.status(500).json({ error: 'An error occurred while updating penalty status' });
  }
});


router.get('/penalties', async (req, res) => {
    try {
      // Retrieve all penalties for the logged-in user
      const penalties = await Penalty.find({ user: req.user.id });
  
      // Send the penalties as a response
      return res.status(200).json(penalties);
    } catch (error) {
      console.error('Error retrieving penalties:', error);
      return res.status(500).json({ error: 'An error occurred while retrieving penalties' });
    }
  });

module.exports = router;