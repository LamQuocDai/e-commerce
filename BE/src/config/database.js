import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();

// Connect database
const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECT);
    console.log("Connected to MongoDB");
  } catch (e) {
    console.log("MongoDB connection error", e);
    process.exit(1);
  }
};

export default connectDatabase;
