// routes/police.js

const express = require('express');
const router = express.Router();
const policeController = require('../controllers/police.controller');

// POST request to register a new police officer
router.post('/register', policeController.register);

module.exports = router;    