import { Transaction } from "../model/transactions.model.js";
import asyncHandler from "express-async-handler"
const newTransaction=asyncHandler(async(req,res)=>{
    const{name,description,datetime}=req.body;
    if([name,description,datetime].some((field)=>field.trim()===""))
    {
        throw new Error("Some fields are empty")
    }
    const transaction=await Transaction.create(
        {
            name,
            datetime,
            description
        }
    );
    res.status(201)
    .json(transaction)
})

export{newTransaction}