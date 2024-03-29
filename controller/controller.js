const {Fluxmodel} = require("../model/flux");
const FluxUserSubscribe = require("../model/fluxsignup");
const Home = (req,res)=>{
    res.send({msg:"Hello from Home"})
}

const Blogs =  async (req,res)=>{
    try{
        const fluxBloggers = await Fluxmodel.find({});

        res.status(200).json({data:fluxBloggers});
    }catch(err){
        res.status(500).send({msg:"Internal server"});
    }
   
   
}
const getStarted =  async (req,res)=>{
    try{
      
 const {title,author,categories,blog} = await req.body;

 const fluxuser = await Fluxmodel.create({title:title,author:author,categories:categories,blog:blog});
 console.log(fluxuser)
 res.status(201).send({msg:"Created successfully"})

    }catch(err){
        res.status(500).send("Internal server error ",err)
    }

 

}



const FluxSubscribe = async (req,res)=>{
try{
    const {useremail}= req.body;

    const AlreadyExists = await FluxUserSubscribe.findOne({useremail:useremail});

    if(AlreadyExists){
        return res.status(409).send({msg:"User already exists"});
    }

    const Subecribeusers = await FluxUserSubscribe.create({useremail:useremail});
    console.log(Subecribeusers);
    if(Subecribeusers){
        return res.status(201).send({msg:"Subcribe Successful"});
    }
   
}catch(err){
    res.status(500).send({msg:"Internal server error"});
}
    

}


module.exports = {Blogs,getStarted,Home,FluxSubscribe}