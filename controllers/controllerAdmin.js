const modelRoute = require('../models').Route;
const modelUser = require('../models').User

class controllerAdmin {
    static viewHome(req, res){
      modelRoute.findAll()
      .then(dataRoutes => {
        // res.send(dataRoutes)
        res.render('routes', { title: 'Routes', dataRoutes: dataRoutes, message:null} )
      })
    }

    static createRoute(req, res){
      let routes =[]
      modelRoute.create({
        from: req.body.from,
        to: req.body.to,
        price: req.body.price
      })
      .then(() => {
        return modelRoute.findAll()
      })
      .then((dataRoutes) => {
        routes = dataRoutes;
        const message = {
          type: "success",
          message: "Data Saved"
        }
        res.render('routes', { title: 'Routes', dataRoutes: dataRoutes, message:message})
      })
      .catch(err => {
        console.log('iniroute',routes)
        const message = {
          type: "error",
          message: err.message
        }
        res.send(message)
        res.render('routes', { title: 'Routes', dataRoutes: routes, message:message})
      })
    }

    static viewEditRoute(req,res) {
      modelRoute.findByPk(req.params.id)
      .then(route => {
        res.render('editRoute', {title: "Edit Route", dataRoute: route})
      })
    }

    static saveEditRoute(req, res){
      modelRoute.update({
        from:req.body.from,
        to:req.body.to,
        price:req.body.price
      }, {where:{id:req.params.id}})
      .then(() => {
        const message = {
          type:"primary", 
          message:"Data Saved"
        }
        res.render('routes', { title: 'Routes', dataRoutes: dataRoutes})
      })
    }

    static deleteRoute(req, res){
      modelRoute.destroy({
        where: {
          id: req.params.id
        }
      })
      .then(() => {
        res.redirect('/admin')
      })
    }

    static viewTickets(req, res) {
      modelUser.findAll({include: modelRoute, individualHooks: true})
      .then((dataTickets) => {
        // res.send(dataTickets)
        res.render('tickets', {title: "Tickets", dataTickets: dataTickets})
      })
    }
}

module.exports = controllerAdmin