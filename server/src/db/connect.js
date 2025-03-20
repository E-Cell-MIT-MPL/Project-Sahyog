import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URI || null;

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    if (!MONGODB_URI) throw Error("No MongoDB URI provided");

    await mongoose.connect(MONGODB_URI, {
      dbName: "test",
    });

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Server: MongoDB connection error - ", error);
  }
};

export default dbConnect;
