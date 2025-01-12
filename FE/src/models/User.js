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
  deleteAt: Date
})

export const User = mongoose.model('User',userSchema);