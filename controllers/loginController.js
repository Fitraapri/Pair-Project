const express = require("express")
const { compare, hash } = require("../helpers/bcryptjs")
const { Cart, Item, Profile, User } = require("../models/index")

class loginController {
  static loginForm(req, res) {
    res.render('login')
  }

  static postLogin(req, res) {
    const { email, password } = req.body
    if (!email || !password) {
      res.render('ISI DULU BOSS')
    }
    User.findOne({
      where: { email }
    })
      .then(result => {
        const cekPass = compare(password, result.password)
        if (!cekPass) {
          res.render('Password salah')
        }
        res.redirec('/')
      })
      .catch(err => {
        console.log(err)
        res.render(err)
      })
  }
}

module.exports = loginController