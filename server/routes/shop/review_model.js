const express = require("express");
const router = express.Router();
const Review = require("../../models/Review"); // Mongoose model

// Add a review
router.post("/", async (req, res) => {
  const { name, phone, rating, content } = req.body;

  // Validate required fields
  if (!name || !phone || !rating || !content) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Create a new review
    const newReview = await Review.create({ name, phone, rating, content });
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: "Error saving review", error });
  }
});

// Get recent reviews (limit to 3 most recent)
router.get("/recent", async (req, res) => {
  try {
    const recentReviews = await Review.find().sort({ createdAt: -1 }).limit(3);
    res.status(200).json(recentReviews);
  } catch (error) {
    res.status(500).json({ message: "Error fetching recent reviews", error });
  }
});

// Get all reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reviews", error });
  }
});

// Get a single review by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const review = await Review.findById(id);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ message: "Error fetching review", error });
  }
});

// Update a review by ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, phone, rating, content } = req.body;

  try {
    const updatedReview = await Review.findByIdAndUpdate(
      id,
      { name, phone, rating, content },
      { new: true, runValidators: true }
    );

    if (!updatedReview) {
      return res.status(404).json({ message: "Review not found" });
    }

    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(500).json({ message: "Error updating review", error });
  }
});

// Delete a review by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedReview = await Review.findByIdAndDelete(id);
    if (!deletedReview) {
      return res.status(404).json({ message: "Review not found" });
    }

    res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting review", error });
  }
});

module.exports = router;
