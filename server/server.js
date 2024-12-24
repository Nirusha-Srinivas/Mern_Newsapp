const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path"); // Import path for serving static files

// Import your routes
const authRouter = require("./routes/auth/auth-routes");
const adminProductsRouter = require("./routes/admin/products-routes");
const shopProductsRouter = require("./routes/shop/products-routes");
const commonFeatureRouter = require("./routes/common/feature-routes");

// Create a database connection
mongoose
  .connect("mongodb+srv://narasimharaotirumalla:ifZKiljhwSbD6Jf8@cluster0.coqq4.mongodb.net/")
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

// Configure CORS
app.use(
  cors({
    origin: ["http://postboxnews.com", "https://postboxnews.com"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "Cache-Control", "Expires", "Pragma"],
  })
);

// Middleware for parsing cookies and JSON
app.use(cookieParser());
app.use(express.json());

// API routes
app.use("/api/auth", authRouter);
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/shop/products", shopProductsRouter);
app.use("/api/common/feature", commonFeatureRouter);

app.use(express.static(path.join(__dirname, "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
