import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              margin: "20px",
              border: "1px solid #ddd",
              padding: "10px",
              width: "200px",
            }}
          >
            <h3>{product.title}</h3>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100px" }}
            />
            <p>${product.price}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
