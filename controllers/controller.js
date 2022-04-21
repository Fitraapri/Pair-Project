"use strict"
const { User, Item, Cart, Profile } = require('../models')

class Controller {
    static home(req, res) {
        Item.findAll() 
        .then(data => {
            res.render('home', {data})
        })
        .catch(err => {
            console.log(err)
        })
    }
}


module.exports = Controller