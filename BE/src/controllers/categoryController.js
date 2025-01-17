import categoryService from "../services/categoryService.js";
import AppError from "../utils/AppError.js";
import Response from "../utils/Response.js";

const categoryController = {
  // Add category
  addCategory: async (req, res) => {
    try {
      const category = await categoryService.addCategory(req.body);
      Response.success(res, "Add category success.", category);
    } catch (error) {
      Response.error(res, error.message, error.statusCode || 500);
    }
  },

  // Get all categories
  getAllCategories: async (req, res) => {
    try {
      const categories = await categoryService.getAllCategories();
      Response.success(res, "Get all category success", categories);
    } catch (error) {
      Response.error(res, error.message, error.statusCode || 500);
    }
  },

  // Get a category by id
  getCategoryById: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await categoryService.getCategoryById(id);

      Response.success(res, "Find a category success", category);
    } catch (error) {
      Response.error(res, error.message, error.statusCode || 500);
    }
  },

  // Update a category
  updateCategory: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await categoryService.updateCategory(id, req.body);

      Response.success(res, "Update category success", category);
    } catch (error) {
      Response.error(res, error.message, error.statusCode || 500);
    }
  },

  // Delete a category
  deleteCategory: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await categoryService.deleteCategory(id);

      Response.success(res, "Delete cataegory success", category);
    } catch (error) {
      Response.error(res, error.message, error.statusCode || 500);
    }
  },
};

export default categoryController;
