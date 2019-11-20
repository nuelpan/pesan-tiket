const express = require('express');
const router  = express.Router();
const controllerAdmin = require('../controllers/controllerAdmin');

// encoded url
router.use(express.urlencoded({extended: true}));

// Input Route
router.get('/', controllerAdmin.viewHome);
router.post('/', controllerAdmin.createRoute);
router.get('/:id/edit', controllerAdmin.viewEditRoute)
router.post('/:id/edit', controllerAdmin.saveEditRoute)
router.get('/:id/delete', controllerAdmin.deleteRoute)

router.get('/tickets', controllerAdmin.viewTickets)

module.exports = router;