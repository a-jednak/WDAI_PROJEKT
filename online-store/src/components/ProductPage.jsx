import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const addReview = () => {
    if (review.trim() === "") return;
    setReviews([...reviews, review]);
    setReview("");
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} style={{ width: "200px" }} />
      <p>{product.description}</p>
      <p>
        Rating: {product.rating?.rate} ⭐ ({product.rating?.count} reviews)
      </p>
      <div>
        <h3>Add Review</h3>
        <textarea value={review} onChange={(e) => setReview(e.target.value)} />
        <button onClick={addReview}>Submit</button>
      </div>
      <div>
        <h3>Reviews</h3>
        {reviews.map((r, index) => (
          <p key={index}>{r}</p>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
