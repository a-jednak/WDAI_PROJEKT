import React, { useState } from "react";

function Basket() {
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket")) || []
  );

  return (
    <div>
      <h1>Your Basket</h1>
      {basket.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        basket.map((item, index) => (
          <div key={index}>
            <h3>{item.title}</h3>
            <p>${item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Basket;
