import mongoose from "mongoose";
import { seedAdminUser } from "./Seed.js";

// Connect database
const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECT);
    console.log("Connected to MongoDB");
    try {
      await seedAdminUser();
    } catch (error) {
      console.error("Error seeding database: ", error);
    }
  } catch (e) {
    console.log("MongoDB connection error", e);
    process.exit(1);
  }
};

export default connectDatabase;
