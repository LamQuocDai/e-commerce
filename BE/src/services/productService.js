import { Product } from "../models/Product.js";

const productService = {
  // Add Product
  addProduct: async (productDate) => {
    const product = new Product(productData);
    return await product.save();
  },
  getAllProducts: async () => {},
  getProductById: async (id) => {},
  updateProduct: async (id, dataProduct) => {},
  deleteProduct: async (id) => {},
};

export default productService;
