import orderService from "../services/orderService.js";
import Respone from "../utils/Response.js";

const orderController = {
  addOrder: async (req, res) => {
    try {
      const order = orderService.addOrder(req.body);
      Respone.success(res, "Create new order success", order);
    } catch (error) {
      Respone.error(res, error.message, error.statusCode || 500);
    }
  },
  getAllOrders: async (req, res) => {
    try {
      const orders = orderService.getAllOrders();
      Respone.success(res, "Get all orders success", orders);
    } catch (error) {
      Respone.error(res, error.message, error.statusCode || 500);
    }
  },
  getOrderById: async (req, res) => {
    try {
      const { id } = req.params;
      const order = orderService.getOrderById(id);
      Respone.success(res, "Get order by id success", order);
    } catch (error) {
      Respone.error(res, error.message, error.statusCode || 500);
    }
  },
  udpateOrder: async (req, res) => {
    try {
      const { id } = req.params;
      const order = orderService.udpateOrder(id, req.body);
      Respone.success(res, "Update order success", order);
    } catch (error) {
      Respone.error(res, error.message, error.statusCode || 500);
    }
  },
  deleteOrder: async (req, res) => {
    try {
      const { id } = req.params;
      const order = orderService.deleteOrder(id);
      Respone.success(res, "Delete order success", order);
    } catch (error) {
      Respone.error(res, error.message, error.statusCode || 500);
    }
  },
};

export default orderController;
