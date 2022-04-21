const express = require("express")
const { Cart, Item, Profile, User } = require("../models/index")

class regisController {
  static regisForm(req, res) {
    res.render('register')
  }

  static postRegister(req, res) {
    const { name, email, password, address, role } = req.body
    User.create({ name, email, password, address, role })
      .then(newUser => {
        res.redirect('/')
      })
      .catch(err => {
        res.send(err)
      })
  }
}

module.exports = regisController