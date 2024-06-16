const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv");
dotenv.config();




mongoose
  .connect(process.env.MONGO_URL)
  .then((data) => console.log("Database connectd successfully"))
  .catch((err) => console.log("Error while connecting database", err));

const Fluxschema = new mongoose.Schema({
  title: String,
  author: String,
  categories: String,
  blog: String,
  isAdmin: {
    type: Boolean,
    default: false,
  },
});



Fluxschema.methods.generateToken =async()=>{
  try{
    return jwt.sign({
userId:this._id,
  author:thi.author,
  isAdmin:this.isAdmin,
    },process.env.Signature,{
      expiresIn:"2d"
    })

  }catch(err){
console.log(err);
  }
  

}

const Fluxmodel = mongoose.model("Flux", Fluxschema);

module.exports = { Fluxmodel };
