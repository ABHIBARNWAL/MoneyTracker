import {model,Schema} from 'mongoose'

const transactionSchema=new Schema(
    {
        name:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        datetime:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
    },
    {
        timestamps:true
    }
)
export const Transaction=model('Transaction',transactionSchema);