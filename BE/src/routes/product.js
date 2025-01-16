import express from "express";
import productController from "../controllers/ProductController.js";

const router = express.Router();

// insert new product (post method)
router.post("/", productController.addProduct);

export default router;