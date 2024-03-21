const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const {Router} = require("./routes/route")
const app = express();
app.use(express.json());
app.use(morgan("combined"));
app.use(cors());
app.use("/",Router);


app.listen(process.env.PORT,()=>{
    console.log(`server listening to:${process.env.PORT}`);
})
