import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const MONGODB = process.env.MONGODB_URI || null;

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${process.env.DB}`,
    );
    console.log("MONGO_DB CONNECTED!!! DB HOST:");
  } catch (error) {
    console.log("MONGODB connection error 4444444", error);
  }
};
export default connectDB;
