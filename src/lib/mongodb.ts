import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      throw new Error("MONGODB_URI is not defined in the environment variables.");
    }

    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(uri);
      console.log("DB connected successfully!");
    }
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
};

export default connectDB;
