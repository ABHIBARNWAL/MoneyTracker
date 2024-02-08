import {model,Schema} from 'mongoose'

const transactionSchema=new Schema(
    {
        name:{
            type:String,
            required:true
        },
        datatime:{
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