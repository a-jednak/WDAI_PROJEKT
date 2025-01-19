import React from "react";
import { useBasket } from "./BasketContext";

const Basket = () => {
  const { basket, updateQuantity, removeFromBasket, clearBasket } = useBasket();

  const totalPrice = basket.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Basket</h1>
      {basket.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <div>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {basket.map((product) => (
              <li
                key={product.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                  border: "1px solid #ddd",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "contain",
                  }}
                />
                <div style={{ flex: 1, marginLeft: "20px" }}>
                  <h3>{product.title}</h3>
                  <p>${product.price.toFixed(2)}</p>
                  <div>
                    <label>
                      Quantity:{" "}
                      <input
                        type="number"
                        value={product.quantity}
                        min="1"
                        onChange={(e) =>
                          updateQuantity(product.id, parseInt(e.target.value))
                        }
                        style={{ width: "50px" }}
                      />
                    </label>
                  </div>
                </div>
                <button
                  onClick={() => removeFromBasket(product.id)}
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "#FF0000",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button
            onClick={clearBasket}
            style={{
              padding: "10px 20px",
              backgroundColor: "#28A745",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Check Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Basket;
