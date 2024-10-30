// models/Order.js
const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  cartId: {
    type: String,
    required: true,
  },
  cartItems: [
    {
      productId: { type: String, required: true },
      title: { type: String, required: true },
      image: String,
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  addressInfo: {
    addressId: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    pincode: { type: String, required: true },
    phone: { type: String, required: true },
    notes: String,
  },
  orderStatus: {
    type: String,
    default: "pending",
    enum: ["pending", "confirmed", "shipped", "delivered", "canceled"],
  },
  paymentMethod: {
    type: String,
    required: true,
    enum: ["cod", "online"],
  },
  paymentStatus: {
    type: String,
    default: "pending",
    enum: ["pending", "paid", "failed"],
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  transactionId: {
    type: String,
    default: null,
  },
  screenshotUrl: {
    type: String,
    default: null,
  },
}, {
  timestamps: { createdAt: 'orderDate', updatedAt: 'orderUpdateDate' }
});

module.exports = mongoose.model("Order", OrderSchema);
