import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import productRoute from "./routes/product.js";
import categoryRoute from "./routes/category.js";
import userRoute from "./routes/user.js";
import paymentRoute from "./routes/payment.js";
import cartRoute from "./routes/cart.js";
import orderRoute from "./routes/order.js";

// Server express
const app = express();

// handler req json
app.use(bodyParser.json({ limit: "50mb" }));
//use cors
app.use(cors());
// show notice terminal (if req)
app.use(morgan("common"));

// ROUTES
// Product
app.use("/api/product", productRoute);

// Category
app.use("/api/category", categoryRoute);

// User
app.use("/api/user", userRoute);

// Payment
app.use("/api/payment", paymentRoute);

// Cart
app.use("/api/cart", cartRoute);

// Order
app.use("/api/order", orderRoute);

export default app;
