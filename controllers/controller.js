const express = require("express");
const { Cart, Item, Profile, User } = require("../models/index")
const formatPrice = require('../helpers/formatPrice')

class Controller {
  static home(req, res) {
    Item
      .findAll()
      .then(Item => {
        res.render('home', { Item, formatPrice })
      })
      .catch(err => {
        res.send(err)
      })
  }

  static buy(req, res) {
    let { id } = req.params
    Item
      .findAll({
        where: {
          id: +id
        }
      })
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.send(err)
      })
  }

}

module.exports = Controller