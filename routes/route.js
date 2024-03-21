const  express = require('express');
const {getStarted,Blogs,Home} = require('../controller/controller');
const Router = express.Router();
Router.get("/",Home);

Router.get("/blog",Blogs);
Router.post("/getstarted",getStarted);


module.exports = {Router}