const express = require('express');

const router  = express.Router();
const controllerAdmin = require('../controllers/controllerAdmin');


// encoded url
router.use(express.urlencoded({extended: true}));

// Input Route
router.get('/', controllerAdmin.viewHome);
router.get('/:id/edit', controllerAdmin.viewEditRoute)
router.get('/:id/delete', controllerAdmin.deleteRoute)
router.get('/tickets', controllerAdmin.viewTickets)

router.post('/', controllerAdmin.createRoute);
router.post('/:id/edit', controllerAdmin.saveEditRoute)

module.exports = router;