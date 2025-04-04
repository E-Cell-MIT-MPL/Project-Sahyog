import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || null;
const DB = process.env.DB;

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    if (!MONGODB_URI) throw Error("No MongoDB URI provided");
    if (!DB) throw Error("No MongoDB Database name provided");

    await mongoose.connect(MONGODB_URI, {
      dbName: DB,
    });

    console.log("Server: Connected to MongoDB");
  } catch (error) {
    console.log("Server: MongoDB connection error - ", error);
  }
};

export default connectDB;
