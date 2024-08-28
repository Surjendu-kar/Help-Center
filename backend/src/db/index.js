import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionString = "mongodb+srv://rahulkar9988:rahulkar@cluster0.h55tn.mongodb.net/Card";
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
