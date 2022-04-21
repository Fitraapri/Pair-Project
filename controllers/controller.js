const express = require("express");
const { Cart, Item, Profile, User } = require("../models/index")

class Controller {
  static home(req, res) {
    Item
      .findAll()
      .then(Item => {
        res.render('home', { Item })
      })
      .catch(err => {
        res.send(err)
      })
  }

}

module.exports = Controller