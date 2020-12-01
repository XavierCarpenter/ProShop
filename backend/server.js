import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";

import productRoutes from "./routes/productRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is runnnig...");
});

// Routes
app.use("/api/products", productRoutes);

// Error Middleware
app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 3005;

app.listen(
  PORT,
  console.log(
    `We Live baby in ${process.env.NODE_ENV} on port ${PORT}!`.yellow.bold
  )
);
