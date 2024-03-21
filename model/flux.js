const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGO_URL).then((data)=>console.log("Database connectd successfully"))
.catch((err)=>console.log("Error while connecting database",err));



const Fluxschema = new mongoose.Schema({
    title:String,
    author:String,
    categories:String,
    blog:String,
   
});


const Fluxmodel = mongoose.model("Flux",Fluxschema);


module.exports = {Fluxmodel};