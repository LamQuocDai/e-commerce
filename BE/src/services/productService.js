import {Product} from "../models/Product.js"

const productService = {

  // Add Product
  addProduct: async (productDate) => {
    const product = new Product(productData);
    return await product.save();
  }
}

export default productService;