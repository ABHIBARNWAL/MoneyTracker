import mongoose from "mongoose";

const connectDB=async()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}`);
        console.log("Connection Established! Database Connected!!")
    } catch (error) {
        console.error("MongoDB connection Failed: ", error);
        process.exit(1);
    }
}
export default connectDB;