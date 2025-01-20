import { User } from "../models/User.js";
import { Cart } from "../models/Cart.js";
import AppError from "../utils/AppError.js";
import { isEmailValid, isPhoneNumber } from "../utils/Validator.js";

const userService = {
  addUser: async (userData) => {
    const user = new User(userData);
    if (!isEmailValid(user.email)) throw new AppError("Email is invalid");
    if (!isPhoneNumber(user.phone))
      throw new AppError("Phone number is invalid");
    await new Cart({ user: user._id }).save();
    return await user.save();
  },
  getAllUsers: async () => {
    return await User.find();
  },
  getUserById: async (id) => {
    if (!id) {
      throw new AppError("Id required", 504);
    }
    const user = User.findById(id);
    if (!user) {
      throw new AppError("Not found user", 505);
    }
    return user;
  },
  updateUser: async (id, userData) => {
    if (!id) {
      throw new AppError("Id required", 504);
    }
    const user = User.findById(id);
    if (!user) {
      throw new AppError("Not found user", 505);
    }
    return await User.findByIdAndUpdate(id, userData, { new: true });
  },
  deleteUser: async (id) => {
    if (!id) {
      throw new AppError("Id required", 504);
    }
    const user = User.findById(id);
    if (!user) {
      throw new AppError("Not found user", 505);
    }
    return await User.findByIdAndDelete(id);
  },
};

export default userService;
