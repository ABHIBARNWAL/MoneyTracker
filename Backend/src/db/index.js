import mongoose from "mongoose";

const connectDB=async()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}`);
        console.log("Connection Established! Database Connected!!")
    } catch (error) {
        throw new Error(error)
    }
}
export default connectDB;