import {app} from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
    path:'./env'
})
app.post('/api/transaction',(req,res)=>{
    
})
connectDB()
.then(
    app.listen(process.env.PORT||5000,()=>{
        console.log(`server in running on http://localhost:${process.env.PORT}/`)
    })
)
.catch((err)=>console.log("Something went wrong",err))