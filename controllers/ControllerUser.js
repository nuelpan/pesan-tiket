const modelUser = require('../models').User;
const modelRoute = require('../models').Route;
const modelTicket = require('../models').Ticket;

class ControllerUser {
    static findAll(req, res) {

    }

    static findOne(req, res) {

    }

    static viewIndex(req, res) {
        const data = {};
        modelRoute.findAll().then(dataRoutes => {
            data.title = 'home';
            data.routeMessages = dataRoutes;
            return modelUser.findOne({
                where: {
                    email: 'michael.wenceslaus@gmail.com',
                    password: 'password'
                }
            })
        }).then(dataUser => {
            data.userMessages = dataUser;
            res.render('index', data);
        }).catch(err => {
            res.send(err)
        })
    }

    static createOrder(req, res) {
        modelTicket.create({
            UserId: req.body.UserId,
            RouteId: req.body.RouteId,
            date: req.body.date,
            status: 'ordered'
        }).then(() => {
            res.send('Data berhasil disimpan');
        }).catch(err => {
            res.send(err)
        })
    }

    static viewOrder(req, res) {
        modelTicket.findAll({
            where: {UserId: req.params.id},
            include: [modelUser, modelRoute]
        }).then(dataTicket => {
            console.log(dataTicket[0].dataValues.Route);
            res.render('order', {
                title: 'order',
                userMessages: req.params.id,
                orderMessage: dataTicket
            });
        }).catch(err => {
            res.send(err)
        })

        // modelUser.findOne({
        //     include: modelRoute,
        //     where: {
        //         id: req.params.id,
        //         email: 'michael.wenceslaus@gmail.com',
        //         password: 'password'
        //     }
        // }).then((dataOrder) => {
        //     console.log(dataOrder.dataValues.Routes[2].Ticket);
        //     res.render('order', {
        //         title: 'order',
        //         userMessages: req.params.id,
        //         orderMessage: dataOrder
        //     });
        // }).catch(err => {
        //     res.send(err)
        // });
    }
}

module.exports = ControllerUser;