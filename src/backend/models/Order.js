import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  items: Array,
  total: Number,
  address: String,
  status: { type: String, default: "Placed" },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Order", orderSchema);
