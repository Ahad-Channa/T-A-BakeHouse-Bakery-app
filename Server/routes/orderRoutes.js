// // routes/orderRoutes.js
// import express from "express";
// import Order from "../models/OrderModel.js";

// const router = express.Router();

// router.post("/", async (req, res) => {
//   try {
//     const { userId, customerName, phone, address, items, totalAmount } = req.body;

//     const newOrder = new Order({
//       userId,
//       customerName,
//       phone,
//       address,
//       items,
//       totalAmount,
//     });

//     await newOrder.save();
//     res.status(201).json({ message: "Order placed successfully", order: newOrder });
//   } catch (error) {
//     console.error("Order placement failed:", error.message);
//     res.status(500).json({ message: "Failed to place order", error });
//   }
// });

// // ✅ "My Orders" using userId from query
// router.get("/my-orders/:userId", async (req, res) => {
//   try {
//     const orders = await Order.find({ userId: req.params.userId }).sort({ createdAt: -1 });
//     res.json(orders);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch orders", error });
//   }
// });

// // ✅ Admin routes (for later)
// router.get("/incoming", async (req, res) => {
//   try {
//     const orders = await Order.find({ status: "pending" }).sort({ createdAt: -1 });
//     res.json(orders);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch incoming orders", error });
//   }
// });

// router.put("/:id", async (req, res) => {
//   try {
//     const { status } = req.body;
//     if (!["confirmed", "rejected"].includes(status)) {
//       return res.status(400).json({ message: "Invalid status" });
//     }

//     const updated = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
//     res.json({ message: `Order ${status}`, order: updated });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to update order", error });
//   }
// });

// export default router;
// routes/orderRoutes.js
import express from "express";
import Order from "../models/OrderModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { userId, customerName, phone, address, items, totalAmount } = req.body;

    const newOrder = new Order({
      userId,
      customerName,
      phone,
      address,
      items,
      totalAmount,
    });

    await newOrder.save();
    res.status(201).json({ message: "Order placed successfully", order: newOrder });
  } catch (error) {
    console.error("Order placement failed:", error.message);
    res.status(500).json({ message: "Failed to place order", error });
  }
});

// ✅ "My Orders" using userId from query
router.get("/my-orders/:userId", async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch orders", error });
  }
});

// ✅ Admin: Get incoming orders with user name populated
router.get("/incoming", async (req, res) => {
  try {
    const orders = await Order.find({
      status: { $in: ["pending", "confirmed"] }, // 🔥 show only pending or confirmed
    })
      .populate("userId", "name")
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch incoming orders", error });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("userId", "name")
      .populate("items.productId", "name image price"); // Include product name, image, price

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch order details", error });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { status } = req.body;
    if (!["confirmed", "rejected", "delivered"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const updated = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.json({ message: `Order ${status}`, order: updated });
  } catch (error) {
    res.status(500).json({ message: "Failed to update order", error });
  }
});

export default router;

