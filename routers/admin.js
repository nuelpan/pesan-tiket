const express = require('express');
const router  = express.Router();

// encoded url
router.use(express.urlencoded({extended: true}));

// Input Route
router.get('/');
router.post('/');

module.exports = router;