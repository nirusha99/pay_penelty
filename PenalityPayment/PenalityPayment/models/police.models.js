// police.model.js

const mongoose = require('mongoose');

const policeSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  // additional fields specific to police registration
  badgeNumber: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  // ...
});

module.exports = mongoose.model('Police', policeSchema);