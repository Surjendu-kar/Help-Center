import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const connectionString = `${process.env.MONGODB_URI}${DB_NAME}`;
    console.log("Attempting to connect with:", connectionString);

    const connectionInstance = await mongoose.connect(connectionString);

    console.log(
      `\n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
