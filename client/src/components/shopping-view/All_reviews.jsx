import React, { useState, useEffect } from "react";
import axios from "axios";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all reviews from the database
    axios
      .get("https://e-commerce-herbal-oil-backend.onrender.com/api/reviews") // Ensure this endpoint returns all reviews
      .then((response) => {
        setReviews(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching all reviews:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4 text-center">All Reviews</h3>

      {loading ? (
        <p className="text-center text-gray-600">Loading reviews...</p>
      ) : reviews.length > 0 ? (
        <div className="space-y-4">
          {reviews.map((review) => (
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
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No reviews found.</p>
      )}
    </div>
  );
};

export default AllReviews;
