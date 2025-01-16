import dotenv from "dotenv";
import app from "./app.js";
import connectDatabase from "./config/database.js";

const PORT = process.env.PORT || 8000

// config dotenv to use .env
dotenv.config();

// connect database
connectDatabase();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});