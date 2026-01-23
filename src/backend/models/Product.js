import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  subCategory: String,
  images: [String],
  rating: Number,
  stock: String
});

export default mongoose.model("Product", productSchema);
