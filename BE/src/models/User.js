import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password:{
    type: String,
    required: true
  },
  role:{
    type: String,
    enum: ['user','seller','admin'],
    default: 'user'
  },
  phone: String,
  address: String,
  createAt: {
    type: Date,
    default: Date.now()
  },
  cart:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cart',
  },
  orders: [{
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order',
      required: true
    }
  }],
  deleteAt: Date
})

export const User = mongoose.model('User',userSchema);