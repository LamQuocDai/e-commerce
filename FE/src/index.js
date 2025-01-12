import express from "express";
import connectDatabase from "./config/database.js";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import dotenv from "dotenv";

// config dotenv to use .env
dotenv.config();

connectDatabase();

// Server express
const app = express();

// handler req json
app.use(bodyParser.json({limit:"50mb"}));
//use cors
app.use(cors());
// show notice terminal (if req)
app.use(morgan("common"));

app.listen(process.env.PORT, () => {
  console.log("Server is running on PORT 8000 ...");
});