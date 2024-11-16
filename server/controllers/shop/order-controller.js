const Order = require("../../models/Order");
const Cart = require("../../models/Cart");
const Product = require("../../models/Product");

// Create Order
const createOrder = async (req, res) => {
  try {
    const {
      userId,
      cartId,
      cartItems,
      addressInfo,
      paymentMethod,
      totalAmount,
      transactionId = null,
      screenshotUrl = null,
    } = req.body;

    // Validate required fields
    if (!userId || !cartId || !cartItems || !addressInfo || !paymentMethod || totalAmount === undefined) {
      return res.status(400).json({ success: false, message: "Missing required fields." });
    }

    // Validate cart existence and content
    const cart = await Cart.findById(cartId);
    if (!cart || cart.cartItems.length === 0) {
      return res.status(400).json({ success: false, message: "Invalid or empty cart." });
    }

    // Check stock levels
    for (const item of cartItems) {
      const product = await Product.findById(item.productId);
      if (!product || product.totalStock < item.quantity) {
        return res.status(400).json({ success: false, message: `Insufficient stock for product: ${item.title}` });
      }
    }

    // Create the order
    const newOrder = new Order({
      userId,
      cartId,
      cartItems,
      addressInfo,
      paymentMethod,
      paymentStatus: paymentMethod === "cod" ? "pending" : "paid",
      totalAmount,
      transactionId,
      screenshotUrl,
    });

    const savedOrder = await newOrder.save();

    // Clear the cart and update stock
    await Cart.findByIdAndDelete(cartId);
    for (const item of cartItems) {
      await Product.findByIdAndUpdate(item.productId, { $inc: { totalStock: -item.quantity } });
    }

    res.status(201).json({ success: true, message: "Order created successfully", data: savedOrder });
  } catch (error) {
    console.error("Error creating order:", error.message);
    res.status(500).json({ success: false, message: "Error creating order" });
  }
};

// Get all orders by user
const getAllOrdersByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { page = 1, limit = 10, sortBy = "orderDate", order = "desc" } = req.query;

    const orders = await Order.find({ userId })
      .sort({ [sortBy]: order === "desc" ? -1 : 1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const totalOrders = await Order.countDocuments({ userId });

    if (!orders.length) {
      return res.status(404).json({ success: false, message: "No orders found!" });
    }

    res.status(200).json({
      success: true,
      data: orders,
      totalOrders,
      totalPages: Math.ceil(totalOrders / limit),
      currentPage: page,
    });
  } catch (error) {
    console.error("Error fetching orders:", error.message);
    res.status(500).json({ success: false, message: "Some error occurred!" });
  }
};

// Get order details
const getOrderDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findById(id).populate({
      path: "cartItems.productId",
      select: "title image price",
    });

    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found!" });
    }

    res.status(200).json({ success: true, data: order });
  } catch (error) {
    console.error("Error fetching order details:", error.message);
    res.status(500).json({ success: false, message: "Some error occurred!" });
  }
};

module.exports = {
  createOrder,
  getAllOrdersByUser,
  getOrderDetails,
};
