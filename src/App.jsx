import { useState } from "react";

import "./App.css";

import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";

function App() {
  const [page, setPage] = useState("home");

  // =========================
  // HOME PAGE
  // =========================

  if (page === "home") {
    return (
      <div className="landing-page">

        <div className="overlay">

          <div className="landing-content">

            <h1>
              Paradise Nursery
            </h1>

            <p className="tagline">
              Bring Nature Home
            </p>

            <p className="description">
              Discover beautiful houseplants
              and transform your home into a
              fresh, green and peaceful
              paradise.
            </p>

            <button
              className="get-started"
              onClick={() =>
                setPage("plants")
              }
            >
              Get Started
            </button>

            <AboutUs />

          </div>

        </div>

      </div>
    );
  }

  // =========================
  // PLANTS PAGE
  // =========================

  if (page === "plants") {
    return (
      <ProductList
        onCartClick={() =>
          setPage("cart")
        }
        onHomeClick={() =>
          setPage("home")
        }
      />
    );
  }

  // =========================
  // CART PAGE
  // =========================

  if (page === "cart") {
    return (
      <CartItem
        onContinueShopping={() =>
          setPage("plants")
        }
        onHomeClick={() =>
          setPage("home")
        }
      />
    );
  }

  return null;
}

export default App;