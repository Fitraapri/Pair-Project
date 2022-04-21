"use strict"
const express = require("express")
const Controller = require("./controllers/controller")
const regisController = require("./controllers/regisController")
const app = express()
const port = 3000
const { Cart, Item, Profile, User } = require("./models/index")
const router = require("./routes/index")

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))


app.use('/', router)


app.listen(port, () => {
  console.log(`Listening app in port ${port}`);
})