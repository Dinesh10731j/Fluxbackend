const jwt = require("jsonwebtoken")
const CheckToken =(req,res,next)=>{

const token = req.headers['Authorization'][0];

const verifiedToken = jwt.verify(token,process.env.Signature);

if(verifiedToken){
    res.send({msg:"Authorized Token"});
    next();
}else{
    res.status(401).send({msg:"Unauthorized"});
}

}



module.exports=CheckToken;