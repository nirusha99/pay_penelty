// controllers/penalty.controller.js

const Penalty = require('../models/penalty.model');

async function register(req, res) {
  // Extract relevant data from the request body
  const { date, penaltyDescription, policeStation, vehicleNumber, drivingLicense, amount } = req.body;

  try {
    // Create a new instance of the Penalty model
    const newPenalty = new Penalty({
      date,
      penaltyDescription,
      policeStation,
      vehicleNumber,
      drivingLicense,
      amount
    });

    // Save the new penalty to the database
    const savedPenalty = await newPenalty.save();

    // Return a success message or relevant data
    res.status(201).json(savedPenalty);
  } catch (error) {
    // Handle any errors that occur during registration
    res.status(500).json({ error: 'An error occurred during penalty registration' });
  }
}

module.exports = {
  register
};