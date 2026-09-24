import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const fallbackImage =
  "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80";

const products = [
  // =========================
  // INDOOR PLANTS
  // =========================
  {
    id: 1,
    name: "Snake Plant",
    price: 299,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 349,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1571554889092-0a39208ec07f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Monstera",
    price: 499,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1775457114571-ecc5cedd7ebb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "ZZ Plant",
    price: 399,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1672151961798-2a9f6f8f0f14?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Spider Plant",
    price: 249,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1680801969214-8f2b7a6f2f4a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Rubber Plant",
    price: 449,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=600&q=80",
  },

  // =========================
  // SUCCULENTS
  // =========================
  {
    id: 7,
    name: "Aloe Vera",
    price: 199,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    name: "Jade Plant",
    price: 249,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1748076939613-c20868817e3d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 9,
    name: "Echeveria",
    price: 179,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 10,
    name: "Haworthia",
    price: 189,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1533460004989-cef01064af7e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 11,
    name: "Zebra Haworthia",
    price: 229,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 12,
    name: "String of Pearls",
    price: 299,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=600&q=80",
  },

  // =========================
  // FLOWERING PLANTS
  // =========================
  {
    id: 13,
    name: "Rose Plant",
    price: 299,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 14,
    name: "Jasmine Plant",
    price: 279,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1760379334685-91c16f7d6f3c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 15,
    name: "Lavender",
    price: 329,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 16,
    name: "Anthurium",
    price: 399,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1591958911259-bee2173bdccc?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 17,
    name: "Orchid",
    price: 499,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1748799913554-5c3f0b5d0d4e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 18,
    name: "Gerbera",
    price: 249,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80",
  },
];

function ProductList({ onCartClick, onHomeClick }) {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  const isInCart = (productId) => {
    return cartItems.some(
      (item) => item.id === productId
    );
  };

  const categories = [
    "Indoor Plants",
    "Succulents",
    "Flowering Plants",
  ];

  return (
    <div className="plants-page">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="nav-logo">
          🌿 Paradise Nursery
        </div>

        <div className="nav-links">

          <button onClick={onHomeClick}>
            Home
          </button>

          <button className="active-nav">
            Plants
          </button>

          <button onClick={onCartClick}>
            🛒 Cart ({cartCount})
          </button>

        </div>

      </nav>

      {/* ================= PAGE HEADER ================= */}

      <section className="plants-header">

        <h1>Our Plants</h1>

        <p>
          Choose from our collection of beautiful
          houseplants.
        </p>

      </section>

      {/* ================= PRODUCT CATEGORIES ================= */}

      {categories.map((category) => {

        const categoryProducts = products.filter(
          (product) =>
            product.category === category
        );

        return (
          <section
            className="category-section"
            key={category}
          >

            <div className="category-title">
              <h2>{category}</h2>
            </div>

            <div className="product-grid">

              {categoryProducts.map((product) => (

                <article
                  className="product-card"
                  key={product.id}
                >

                  {/* PRODUCT IMAGE */}

                  <img
                    className="product-image"
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src =
                        fallbackImage;
                    }}
                  />

                  {/* PRODUCT DETAILS */}

                  <div className="product-details">

                    <h3>
                      {product.name}
                    </h3>

                    <p className="product-price">
                      ₹{product.price}
                    </p>

                    <button
                      className={
                        isInCart(product.id)
                          ? "add-button added"
                          : "add-button"
                      }
                      disabled={isInCart(
                        product.id
                      )}
                      onClick={() =>
                        handleAddToCart(product)
                      }
                    >
                      {isInCart(product.id)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>

                  </div>

                </article>

              ))}

            </div>

          </section>
        );
      })}

    </div>
  );
}

export default ProductList;