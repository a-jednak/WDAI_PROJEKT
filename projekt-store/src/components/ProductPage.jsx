import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBasket } from "./BasketContext";

const ProductPage = () => {
  const { productId } = useParams(); // Get product ID from the URL
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]); // Reviews for the product
  const [newReview, setNewReview] = useState({
    username: "",
    content: "",
    stars: 5,
  });
  const { addToBasket } = useBasket();

  useEffect(() => {
    // Fetch product details
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const data = await response.json();
        setProduct(data);

        // Mock reviews for the product
        setReviews([
          { username: "John Doe", content: "Great product!", stars: 5 },
          {
            username: "Jane Smith",
            content: "Good value for the price.",
            stars: 4,
          },
        ]);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleReviewSubmit = () => {
    if (!newReview.username || !newReview.content) {
      alert("Please fill out all fields before submitting your review.");
      return;
    }

    setReviews((prevReviews) => [...prevReviews, newReview]);
    setNewReview({ username: "", content: "", stars: 5 });
  };

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.title}</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "300px", height: "300px", objectFit: "contain" }}
        />
        <div>
          <p>
            <strong>Description:</strong> {product.description}
          </p>
          <p>
            <strong>Price:</strong> ${product.price.toFixed(2)}
          </p>
          <p>
            <strong>Stock:</strong> {product.rating.count}
          </p>
          <button
            onClick={() => addToBasket(product)}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Add to Basket
          </button>
        </div>
      </div>

      <div style={{ marginTop: "40px" }}>
        <h2>Reviews</h2>
        {reviews.length > 0 ? (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {reviews.map((review, index) => (
              <li
                key={index}
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  borderRadius: "10px",
                  marginBottom: "10px",
                }}
              >
                <p>
                  <strong>{review.username}</strong>
                </p>
                <p>{review.content}</p>
                <p>Rating: {"⭐".repeat(review.stars)}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews yet. Be the first to leave one!</p>
        )}

        <div style={{ marginTop: "20px" }}>
          <h3>Leave a Review</h3>
          <input
            type="text"
            placeholder="Your Name"
            value={newReview.username}
            onChange={(e) =>
              setNewReview({ ...newReview, username: e.target.value })
            }
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />
          <textarea
            placeholder="Your Review"
            value={newReview.content}
            onChange={(e) =>
              setNewReview({ ...newReview, content: e.target.value })
            }
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              height: "100px",
            }}
          ></textarea>
          <label>
            Rating:{" "}
            <select
              value={newReview.stars}
              onChange={(e) =>
                setNewReview({ ...newReview, stars: parseInt(e.target.value) })
              }
              style={{ padding: "5px", marginBottom: "10px" }}
            >
              <option value={5}>5 Stars</option>
              <option value={4}>4 Stars</option>
              <option value={3}>3 Stars</option>
              <option value={2}>2 Stars</option>
              <option value={1}>1 Star</option>
            </select>
          </label>
          <br />
          <button
            onClick={handleReviewSubmit}
            style={{
              padding: "10px 20px",
              backgroundColor: "#28A745",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
