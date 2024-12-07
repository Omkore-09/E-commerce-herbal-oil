import React, { useState, useEffect } from "react";
import axios from "axios";

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    name: "",
    phone: "",
    rating: 0,
    content: "",
  });
  const [error, setError] = useState(null);

  // Fetch recent reviews
  useEffect(() => {
    axios
      .get("https://e-commerce-herbal-oil-backend.onrender.com/api/reviews/recent") // Ensure backend port is correct
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Input validation
    if (!newReview.name || !newReview.phone || !newReview.rating || !newReview.content) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await axios.post("https://e-commerce-herbal-oil-backend.onrender.com/api/reviews", newReview);
      setReviews([response.data, ...reviews]); // Prepend the new review to the list
      setNewReview({ name: "", phone: "", rating: 0, content: "" });
      setError(null); // Clear errors on successful submission
    } catch (err) {
      console.error("Error submitting review:", err);
      setError("Failed to submit the review. Please try again.");
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4 text-center">Customer Reviews</h3>

      {/* Display reviews */}
      <div className="space-y-4">
        {Array.isArray(reviews) && reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review._id} className="bg-white p-4 rounded shadow-md">
              <p className="text-gray-800 font-bold">
                {review.name} ({review.phone})
              </p>
              <p className="text-yellow-500">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </p>
              <p className="text-gray-800">{review.content}</p>
              <span className="text-sm text-gray-500">
                {new Date(review.createdAt).toLocaleString()}
              </span>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No reviews yet. Be the first to leave a review!</p>
        )}
      </div>

      {/* Review submission form */}
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded focus:outline-none focus:ring"
          value={newReview.name}
          onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Your Phone Number"
          className="w-full p-3 border rounded focus:outline-none focus:ring"
          value={newReview.phone}
          onChange={(e) => setNewReview({ ...newReview, phone: e.target.value })}
        />
        <select
          className="w-full p-3 border rounded focus:outline-none focus:ring"
          value={newReview.rating}
          onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
        >
          <option value="0">Select Rating</option>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>
        <textarea
          className="w-full p-3 border rounded focus:outline-none focus:ring"
          rows="4"
          placeholder="Write your review here..."
          value={newReview.content}
          onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
        />
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded mt-2 hover:bg-green-600 transition"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default CustomerReviews;
