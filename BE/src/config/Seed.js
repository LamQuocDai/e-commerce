import { User } from "../models/User.js";

export const seedAdminUser = async () => {
  try {
    // Check admin existed
    const adminExists = await User.findOne({ role: "admin" });

    if (adminExists) {
      return;
    }

    const adminUser = new User({
      username: "Admin",
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
      role: "admin",
    });

    await adminUser.save();
    console.log("Created Admin account");
  } catch (error) {
    console.error("Create Admin account failure: ", error);
  }
};
