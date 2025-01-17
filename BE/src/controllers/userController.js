import userService from "../services/userService.js";
import Response from "../utils/Response.js";

const userController = {
  addUser: async (req, res) => {
    try {
      const user = await userService.addUser(req.body);
      Response.success(res, "Add userService success", user);
    } catch (error) {
      Response.error(res, error.message, error.statusCode || 500);
    }
  },
  getAllUsers: async (req, res) => {
    try{
      const users = await userService.getAllUsers();
      Response.success(res, "Get all users success", users);
    } catch (error){
      Response.error(res, error.message, error.statusCode || 500);
    }
  },
  getUserById: async (req, res) => {
    try{
      const { id } = req.params;
      const user = await userService.getUserById(id);
      Response.success(res, "Get a user by id success", user);
    }catch( error){
      Response.error(res, error.message, error.statusCode || 500);
    }
  },
  updateUser: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await userService.updateUser(id, req.body);
      Response.success(res, "Update user success", user);
    } catch (error){
      Response.error(res, error.message, error.statusCode || 500);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await userService.deleteUser(id);
      Response.success(res, "Delete user success", user);
    } catch (error){
      Response.error(res, message.error, error.statusCode || 500);
    }
  },
};

export default userController;
