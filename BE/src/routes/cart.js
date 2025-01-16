import express from "express";
import cartController from "../controllers/cartController.js";

const router = express.Router();

router.post("/", cartController.addCart);
router.get("/", cartController.getAllCarts);
router.get("/:id", cartController.getCartById);
router.put("/:id", cartController.updateCart);
router.delete("/:id", cartController.deleteCart);

export default router;
