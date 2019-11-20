const express = require('express');
const router = express.Router();
const controllerUser = require('../controllers/ControllerUser');

// encoded url
router.use(express.urlencoded({extended: true}));

// Input order
router.get('/', controllerUser.viewIndex);
router.post('/', controllerUser.createOrder);
router.get('/order/:id', controllerUser.viewOrder);
router.post('/order/:id', controllerUser.updateOrder);

module.exports = router;