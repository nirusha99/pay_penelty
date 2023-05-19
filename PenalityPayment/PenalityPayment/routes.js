const express = require('express');
const router = express.Router();
const policeController = require('./controllers/policeController');
const civilianController = require('./controllers/civilianController');

// Police registration route
router.post('/police/register', policeController.register);

// Civilian registration route
router.post('/civilian/register', civilianController.register);



module.exports = router;