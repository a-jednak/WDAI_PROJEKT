import React, { createContext, useState, useContext } from "react";

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  // Add product to basket
  const addToBasket = (product) => {
    setBasket((prevBasket) => {
      const existingProduct = prevBasket.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevBasket.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevBasket, { ...product, quantity: 1 }];
    });
  };

  // Update product quantity
  const updateQuantity = (id, quantity) => {
    setBasket((prevBasket) =>
      prevBasket.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  // Remove product from basket
  const removeFromBasket = (id) => {
    setBasket((prevBasket) => prevBasket.filter((item) => item.id !== id));
  };

  // Clear basket
  const clearBasket = () => setBasket([]);

  return (
    <BasketContext.Provider
      value={{
        basket,
        addToBasket,
        updateQuantity,
        removeFromBasket,
        clearBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => useContext(BasketContext);
