import express from "express";
import cors from 'cors';
const app=express()

app.use(cors(
    {
        origin:process.env.CORS_ORIGIN,
        credential:true
    }
))

app.use(express.json())


import router from "./routes/api.routes.js";
app.use('/api',router);



export{app};