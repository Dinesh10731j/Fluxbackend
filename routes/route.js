const express = require("express");
const {
  getStarted,
  Blogs,
  FluxSubscribe,
} = require("../controller/controller");
const Router = express.Router();
Router.get("/blog", Blogs);
Router.post("/getstarted", getStarted);
Router.post("/subscribe", FluxSubscribe);

module.exports = { Router };
