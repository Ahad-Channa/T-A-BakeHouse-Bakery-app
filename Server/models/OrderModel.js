// // models/OrderModel.js
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    customerName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        name: String,
        price: Number,
        quantity: Number,
        image: String, // ✅ Add this line
      },
    ],
    totalAmount: Number,
    status: {
    type: String,
    enum: ["pending", "confirmed", "rejected", "delivered"], // ✅ Add "delivered"
    default: "pending",
  },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
