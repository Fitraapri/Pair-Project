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

    static register(req, res) {
        res.render('register')
    }

    // static regPost(req, res) {
    //     let data = {
    //         name: req.body.name,
    //         name: req.body.name,
    //         name: req.body.name,
    //         name: req.body.name
    //     }
    // }
}


module.exports = Controller