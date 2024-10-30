// controllers/orderController.js
const Order = require("../../models/Order");
const Cart = require("../../models/Cart");
const Product = require("../../models/Product");

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

    // Check if required fields are present
    if (!userId || !cartId || !cartItems || !addressInfo || !paymentMethod || totalAmount === undefined) {
      console.error("Missing required fields in request body");
      return res.status(400).json({
        success: false,
        message: "Required fields are missing",
      });
    }

    // Create new order object
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

    // Save the new order to the database
    const savedOrder = await newOrder.save();
    console.log("Order successfully created:", savedOrder); // Log order creation for verification

    // Clear the cart after order creation
    await Cart.findByIdAndDelete(cartId);

    // Decrease product stock quantities based on the order
    for (const item of cartItems) {
      await Product.findByIdAndUpdate(item.productId, {
        $inc: { totalStock: -item.quantity },
      });
    }

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      data: savedOrder,
    });
  } catch (error) {
    console.error("Error creating order:", error); // Log error for debugging
    res.status(500).json({
      success: false,
      message: "Error creating order",
    });
  }
};

const getAllOrdersByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const orders = await Order.find({ userId });

    if (!orders.length) {
      console.log("No orders found for user:", userId);
      return res.status(404).json({
        success: false,
        message: "No orders found!",
      });
    }

    res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
    });
  }
};

const getOrderDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findById(id);

    if (!order) {
      console.log("Order not found:", id);
      return res.status(404).json({
        success: false,
        message: "Order not found!",
      });
    }

    res.status(200).json({
      success: true,
      data: order,
    });
  } catch (error) {
    console.error("Error fetching order details:", error);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
    });
  }
};

module.exports = {
  createOrder,
  getAllOrdersByUser,
  getOrderDetails,
};
