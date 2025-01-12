import React from "react";
import "./Products.css";
import p1 from "./graphics/p1.png";
import p2 from "./graphics/p2.png";
import p3 from "./graphics/p3.png";

const Products = () => {
  const characters = [
    { id: 1, name: "Agnieszka Dąbek", rating: 10, image: p1 },
    { id: 2, name: "Piesek Adam", rating: 3.8, image: p2 },
    { id: 3, name: "Kotek Ryszard", rating: 4.9, image: p3 },
  ];

  return (
    <main className="products">
      <div className="products-title">Lista produktów</div>
      <ul className="character-list">
        {characters.map((character) => (
          <li key={character.id} className="character-item">
            <img src={character.image} alt={character.name} className="character-image" />
            <div className="character-info">
              <h3 className="character-name">{character.name}</h3>
              <p className="character-rating">{character.rating}</p>
            </div>
            <button className="add-to-cart">Dodaj do koszyka</button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Products;
