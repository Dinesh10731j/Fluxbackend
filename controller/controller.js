const {Fluxmodel} = require("../model/flux")
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


module.exports = {Blogs,getStarted,Home}