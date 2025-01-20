import { Category } from "../models/Category.js";
import { Product } from "../models/Product.js";
import AppError from "../utils/AppError.js";

const productService = {
  // Add Product
  addProduct: async (productData) => {
    const product = new Product(productData);
    await Category.findByIdAndUpdate(product.category, { $push : {products: product._id}});
    return await product.save();;
  },
  getAllProducts: async () => {
    return await Product.find();
  },
  getProductById: async (id) => {
    if(!id){
      throw new AppError("Id is required", 505);
    }
    const product = await Product.findById(id);
    if(!product){
      throw new AppError("Not found product", 504);
    }
    return product;
  },
  updateProduct: async (id, productData) => {
    if(!id){
      throw new AppError("Id is required", 505);
    }
    const product = await Product.findById(id);
    if(!product){
      throw new AppError("Not found product", 504);
    }
    return await Product.findByIdAndUpdate(id, productData, { new : true });
  },
  deleteProduct: async (id) => {
    if(!id){
      throw new AppError("Id is required", 505);
    }
    const product = await Product.findById(id);
    if(!product){
      throw new AppError("Not found product", 504);
    }
    await Category.findByIdAndUpdate(product.category, { $pull : {products: product._id}});
    return await Product.findByIdAndDelete(id);
  },
};

export default productService;
