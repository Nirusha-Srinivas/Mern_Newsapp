const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    image: String,
    title: String,
    description: String,
    category: String,
    averageReview : Number
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);