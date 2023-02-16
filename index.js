import dotenv from "dotenv"
dotenv.config({ path: "./.env" });

import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"

import postRoutes from "./routes/posts.js";
const app = express();


const corsOpts = {
    origin: 'https://memories-arbab.onrender.com/',
    credentials: true,
    methods: ['GET','POST','HEAD','PUT','PATCH','DELETE'],
    allowedHeaders: ['Content-Type'],
    exposedHeaders: ['Content-Type']
};
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors(corsOpts));
app.use("/posts",postRoutes);

mongoose.set('strictQuery', false);
const port = process.env.PORT;
const connection_url = process.env.DATABASE;
mongoose.connect(connection_url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    app.listen(port,()=>{
        console.log(`server started at ${port}`);
    })
}).catch((error)=>{
    console.log(error.message);
})

