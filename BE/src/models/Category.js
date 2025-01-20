import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  logo: String,
  description: {
    type: String,
    required: true
  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  }],
  createAt: {
    type: Date,
    default: Date.now()
  },
  deleteAt: Date
})

export const Category = mongoose.model('Category', categorySchema);