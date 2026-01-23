import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

/* CREATE ORDER */
router.post("/", async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.json(order);
});

/* USER ORDERS */
router.get("/user/:id", async (req, res) => {
  const orders = await Order.find({ userId: req.params.id });
  res.json(orders);
});

/* ADMIN ANALYTICS */
router.get("/stats", async (req, res) => {
  const orders = await Order.find();
  const totalSales = orders.reduce((s, o) => s + o.total, 0);

  res.json({
    totalOrders: orders.length,
    totalSales
  });
});

export default router;
