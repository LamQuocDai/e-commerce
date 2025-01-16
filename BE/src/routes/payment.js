import express from "express";
import paymentController from "../controllers/paymentController.js";

const router = express.Router();

router.post("/", paymentController.addController);
router.get("/", paymentController.getAllPayments);
router.get("/:id", paymentController.getPaymentById);
router.put("/:id", paymentController.updatePayment);
router.delete("/:id", paymentController.deletePayment);

export default router;
