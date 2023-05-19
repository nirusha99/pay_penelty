const mongoose = require('mongoose');

// Create a penalty schema
const penaltySchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  penaltyDescription: {
    type: String,
    required: true
  },
  policeStation: {
    type: String,
    required: true
  },
  vehicleNumber: {
    type: String,
    required: true
  },
  drivingLicense: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    default: 'Unpaid'
  }
});

// Create a penalty model from the schema
const Penalty = mongoose.model('Penalty', penaltySchema);

// Export the Penalty model
module.exports = Penalty;
