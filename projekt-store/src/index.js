import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { BasketProvider } from "./components/BasketContext"; // Import provider
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BasketProvider>
      {" "}
      {/* Wrapping the entire app */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BasketProvider>
  </React.StrictMode>
);
