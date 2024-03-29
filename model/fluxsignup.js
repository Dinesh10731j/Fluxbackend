const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("Connection successful")).
catch((err)=>console.log(err));


const FluxuserSchema = new mongoose.Schema({
    useremail:{
        type:String,
        unique:true,
    }

});


const FluxUserModel = mongoose.model("fluxuser",FluxuserSchema);


module.exports  =FluxUserModel;