import React from "react";
import "./newHeader.css";
import logo from "./graphics/logo.png";
import home from "./graphics/home.svg";
import profile from "./graphics/profile.svg";
import cart from "./graphics/cart.svg";

const NewHeader = () => {
  return (
    <div>
      <header class="flex-container">
        <div class="logo">
          <img src={logo} />
        </div>
        <div class="title"> Tytuł strony </div>
      </header>
      <nav class="navbar">
        <a href="/main">
          <img class="icon" src={home} />
        </a>
        <a href="/profile">
          <img class="icon" src={profile} />
        </a>
        <a href="/basket">
          <img class="icon" src={cart} />
        </a>
        {/* jakoś tu będzie trzeba podłączyć podstrony, jeszcze nwm jak */}
      </nav>
    </div>
  );
};

export default NewHeader;
