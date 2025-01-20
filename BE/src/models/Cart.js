import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quanity: {
        type: Number,
        required: true,
        min: 1,
      },
      option: String,
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  totalPrice: Number,
});

export const Cart = mongoose.model("Cart", cartSchema);
