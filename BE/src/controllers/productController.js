import productService from "../services/productService.js";
import Response from "../utils/Response.js";

const productController = {
  // Add product
  addProduct: async (req, res) => {
    try {
      const product = await productService.addProduct(req.body);
      Response.success(res, "Create new product success", product);
    } catch (error) {
      Response.error(res, error.message, error.statusCode || 500);
    }
  },
  getAllProducts: async (req, res) => {
    try {
      const products = await productService.getAllProducts();
      Response.success(res, "Get all products success", products);
    }
    catch (error){
      Response.error(res, error.message, error.statusCode || 500);
    }
  },
  getProductById: async (req, res) => {
    try {
      const {id} = req.params;
      const product = await productService.getProductById(id);
      Response.success(res, "Get product by id success", product);
    }
    catch (error){
      Response.error(res, error.message, error.statusCode || 500);
    }
  },
  updateProduct: async (req, res) => {
    try {
      const {id} = req.params;
      const product = await productService.updateProduct(id, req.body);
      Response.success(res, "Update product success", product);
    }
    catch (error){
      Response.error(res, error.message, error.statusCode || 500);
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const {id} = req.params;
      const product = await productService.deleteProduct(id);
      Response.success(res, "Delete product success", product);
    }
    catch (error){
      Response.error(res, error.message, error.statusCode || 500);
    }
  },
};

export default productController;
