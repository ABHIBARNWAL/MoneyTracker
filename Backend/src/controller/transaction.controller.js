import { Transaction } from "../model/transactions.model.js";
import asyncHandler from "express-async-handler"
const allTransaction=asyncHandler(async(req,res)=>{
    const transactions=await Transaction.find();
    return res.status(200)
    .json(transactions)
})
const newTransaction=asyncHandler(async(req,res)=>{
    const{name,price,description,datetime}=req.body;
    // console.log(req.body);
    if([name,price,description,datetime].some((field)=>field.trim()===""))
    {
        throw new Error("Some fields are empty")
    }
    const transaction=await Transaction.create(
        {
            name,
            price,
            datetime,
            description
        }
    );
    res.status(201)
    .json(transaction)
})

export{newTransaction,allTransaction}