const express = require("express");
const CheckToken = require("../middleware/Auth")
const {
  getStarted,
  Blogs,
  FluxSubscribe,
} = require("../controller/controller");
const Router = express.Router();
Router.get("/blog", Blogs);
Router.post("/getstarted",CheckToken, getStarted);
Router.post("/subscribe", FluxSubscribe);

module.exports = { Router };
