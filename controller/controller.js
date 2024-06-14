const {Fluxmodel} = require("../model/flux");
const{FluxUserModel} = require("../model/fluxsignup");
const {sendEmail} = require("../services/EmailService");

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



const FluxSubscribe = async (req, res) => {
  try {
    let { useremail } = req.body;
console.log(useremail)
    // Normalize the email to lowercase and trim whitespace
    useremail = useremail.toLowerCase().trim();

    const AlreadyExists = await FluxUserModel.findOne({ useremail });

    if (AlreadyExists) {
      return res.status(409).send({ msg: "User already exists" });
    }

    const Subecribeusers = await FluxUserModel.create({ useremail });
    console.log(Subecribeusers);

    if (Subecribeusers) {
      await sendEmail(useremail, "Thank you for subscribing to Flux!");
      return res.status(201).send({ msg: "Subscribe Successful" });
    }
  } catch (err) {
    console.error('Error in subscription:', err);
    res.status(500).send({ msg: "Internal server error" });
  }
};

module.exports = {Blogs,getStarted,FluxSubscribe}