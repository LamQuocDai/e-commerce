import productService from "../services/productService.js";

const productController = {
  // Add product
  addProduct: async (req, res) => {
    try {
      const user = await productService.addProduct(req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAllProducts: async (req, res) => {},
  getProductById: async (req, res) => {},
  updateProduct: async (req, res) => {},
  deleteProduct: async (req, res) => {},
};

export default productController;
