import { Category } from "../models/Category.js";
import AppError from "../utils/AppError.js";

const categoryService = {
  // Add category
  addCategory: async (categoryData) => {
    const category = new Category(categoryData);
    return await category.save();
  },

  // Get all categories
  getAllCategories: async () => {
    return await Category.find();
  },

  // Get a category by id
  getCategoryById: async (id) => {
    const category = await Category.findById(id);

    if (!category) {
      throw new AppError("Not found category", 505);
    }
    return category;
  },

  // Update a category
  updateCategory: async (id, categoryData) => {
    const category = await Category.findById(id);
    if (!category) {
      throw new AppError("Category not found", 505);
    }
    return await Category.findByIdAndUpdate(id, categoryData, { new: true });
  },

  // Delete a category
  deleteCategory: async (id) => {
    const category = await Category.findById(id);
    if (!category) {
      throw new AppError("Category not found", 505);
    }
    return await Category.findByIdAndDelete(id);
  },
};

export default categoryService;
