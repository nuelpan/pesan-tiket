const modelUser = require('../models').User;
const modelRoute = require('../models').Route;

class ControllerUser {
    static findAll(req, res) {

    }

    static findOne(req, res) {

    }

    static viewIndex(req, res) {
        modelRoute.findAll().then(dataRoutes => {
            res.render('index', {title: 'home', messages: dataRoutes});
        }).catch(err => {
            res.send(err)
        })

    }

    static createOrder(req, res) {

    }

    static viewOrder(req, res) {
        res.render('order', {title: 'order'});
    }

    static updateOrder(req, res) {

    }
}

module.exports = ControllerUser;