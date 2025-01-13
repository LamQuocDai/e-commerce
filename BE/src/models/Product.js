import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  ratings: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true
    },
    review: String
  }],
  avgRating: {
    type: Number,
    default: 0
  },
  quantity:{
    type: Number,
    required:true,
    min: 1,
    default: 0
  },
  size: [{
    name: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 0
    }
  }],
  color: [{
    name: {
      type: String,
      required: true
    },
    code: String,
    quantity: {
      type: Number,
      required: true,
      min: 0
    }
  }],
  status: {
    type: String,
    enum: ['inStock', 'outOfStock'],
    default: 'inStock'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  deleteAt: Date
});

export const Product = mongoose.model('Product', productSchema);