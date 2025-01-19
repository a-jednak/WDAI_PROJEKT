import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useBasket } from "./BasketContext";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { addToBasket } = useBasket();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const results = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm, products]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product List</h1>
      <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          padding: "12px 20px", // Increased padding for a better feel
          fontSize: "16px", // Font size remains the same
          borderRadius: "25px", // Rounded edges for a modern look
          border: "2px solid #ccc", // Soft border for a subtle look
          outline: "none", // Remove default focus outline
          boxSizing: "border-box", // Ensure padding does not affect the width
          transition: "all 0.3s ease", // Smooth transition on hover/focus
          backgroundColor: "#f9f9f9", // Light background for the input
        }}
        onFocus={(e) => (e.target.style.borderColor = "#f39c12")} // Highlight border on focus
        onBlur={(e) => (e.target.style.borderColor = "#ccc")} // Reset border color when focus is lost
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "10px",
              textAlign: "center",
              backgroundColor: "#fff",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100%", height: "150px", objectFit: "contain" }}
            />
            <h3 style={{ fontSize: "18px", margin: "10px 0" }}>
              <Link to={`/product/${product.id}`}>{product.title}</Link>
            </h3>

            <p style={{ fontSize: "16px", fontWeight: "bold" }}>
              ${product.price.toFixed(2)}
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
        ))}
      </div>
    </div>
  );
};

export default Main;
