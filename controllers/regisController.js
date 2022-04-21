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
        const errors = {}
        if(err.name == 'SequelizeValidationError') {
          err.errors.forEach(el => {
            if(errors[el.path]) {
              errors[el.path].push(el.message)
            } else {
              errors[el.path] = [el.message]
            } 
          })
          return res.render('register', {errors})
        }
        res.send(err)
      })
  }
}

module.exports = regisController