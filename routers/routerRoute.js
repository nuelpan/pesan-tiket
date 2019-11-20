const express = require('express');
const router  = express.Router();

// encoded url
router.use(express.urlencoded({extended: true}));

// View Route
router.get('/');

// Input Route
router.get('/input');
router.post('/input');

module.exports = router;