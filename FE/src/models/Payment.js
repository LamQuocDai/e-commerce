import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    required: true
  },
  typeOfPay: {
    type: String,
    enum: ['Cash','Bank','eWallet'],
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed', 'refunded'],
    default: 'pending'
  },
  createAt: {
    type: Date,
    default: Date.now
  }
})

export const Payment = mongoose.model('Payment', paymentSchema);