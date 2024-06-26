const express = require("express");
const CheckToken = require("../middleware/Auth");
const {
  getStarted,
  Blogs,
  FluxSubscribe,
} = require("../controller/controller");
const Router = express.Router();
Router.get("/blog",CheckToken, Blogs);
Router.post("/getstarted",getStarted);
Router.post("/subscribe", FluxSubscribe);

module.exports = { Router };
