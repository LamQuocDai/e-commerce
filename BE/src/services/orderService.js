import { Order } from "../models/Order.js";
import { User } from "../models/User.js";
import AppError from "../utils/AppError.js";

const orderService = {
  addOrder: async (orderData) => {
    const order = new Order(orderData);
    await User.findByIdAndUpdate(order.user, { $push: { orders: order._id }});
    return await order.save();
  },
  getAllOrders: async () => {
    return await Order.find();
  },
  getOrderById: async (id) => {
    if(!id){
      throw new AppError("Id is required", 505);
    }
    const order = await Order.find(id);
    if(!order){
      throw new AppError("Not found order", 504);
    }
    return order;
  },
  udpateOrder: async (id, dataOrder) => {
  },
  deleteOrder: async (id) => {
    if(!id){
      throw new AppError("Id is required", 505);
    }
    const order = await Order.find(id);
    if(!order){
      throw new AppError("Not found order", 504);
    }
    await User.findByIdAndUpdate(order.user, { $pull: { orders: order._id}})
    return await Order.findByIdAndDelete(id);
  },
};

export default orderService;
