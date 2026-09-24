import {
  useSelector,
  useDispatch,
} from "react-redux";

import {
  removeItem,
  updateQuantity,
} from "./CartSlice";

const fallbackImage =
  "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80";

function CartItem({
  onContinueShopping,
  onHomeClick,
}) {

  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const totalItems =
    cartItems.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );

  const totalAmount =
    cartItems.reduce(
      (total, item) =>
        total +
        item.price *
          item.quantity,
      0
    );

  const increaseQuantity = (
    item
  ) => {

    dispatch(
      updateQuantity({
        id: item.id,
        quantity:
          item.quantity + 1,
      })
    );
  };

  const decreaseQuantity = (
    item
  ) => {

    dispatch(
      updateQuantity({
        id: item.id,
        quantity:
          item.quantity - 1,
      })
    );
  };

  const deleteItem = (id) => {

    dispatch(
      removeItem(id)
    );
  };

  const handleCheckout = () => {

    alert(
      "Checkout Coming Soon! Thank you for shopping with Paradise Nursery."
    );
  };

  return (
    <div className="cart-page">

      {/* NAVBAR */}

      <nav className="navbar">

        <div className="nav-logo">
          🌿 Paradise Nursery
        </div>

        <div className="nav-links">

          <button
            onClick={onHomeClick}
          >
            Home
          </button>

          <button
            onClick={
              onContinueShopping
            }
          >
            Plants
          </button>

          <button className="active-nav">
            🛒 Cart ({totalItems})
          </button>

        </div>

      </nav>

      {/* HEADER */}

      <header className="cart-header">

        <h1>
          🛒 Shopping Cart
        </h1>

        <p>
          Review your plants before
          checkout.
        </p>

      </header>

      {/* EMPTY CART */}

      {cartItems.length === 0 ? (

        <div className="empty-cart">

          <div className="empty-cart-icon">
            🛒
          </div>

          <h2>
            Your cart is empty
          </h2>

          <p>
            Add some beautiful plants
            to your cart.
          </p>

          <button
            className="continue-shopping"
            onClick={
              onContinueShopping
            }
          >
            Continue Shopping
          </button>

        </div>

      ) : (

        <div className="cart-container">

          {/* ITEMS */}

          <div className="cart-items">

            {cartItems.map(
              (item) => (

                <div
                  className="cart-item"
                  key={item.id}
                >

                  <img
                    className="cart-item-image"
                    src={item.image}
                    alt={item.name}
                    onError={(
                      event
                    ) => {
                      event.currentTarget.onerror =
                        null;

                      event.currentTarget.src =
                        fallbackImage;
                    }}
                  />

                  <div className="cart-item-details">

                    <h2>
                      {item.name}
                    </h2>

                    <p className="unit-price">
                      Unit Price:
                      {" "}
                      ₹{item.price}
                    </p>

                    <div className="quantity-controls">

                      <button
                        onClick={() =>
                          decreaseQuantity(
                            item
                          )
                        }
                      >
                        −
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(
                            item
                          )
                        }
                      >
                        +
                      </button>

                    </div>

                    <p className="item-total">
                      Total: ₹
                      {item.price *
                        item.quantity}
                    </p>

                    <button
                      className="delete-button"
                      onClick={() =>
                        deleteItem(
                          item.id
                        )
                      }
                    >
                      🗑 Delete
                    </button>

                  </div>

                </div>

              )
            )}

          </div>

          {/* SUMMARY */}

          <aside className="cart-summary">

            <h2>
              Cart Summary
            </h2>

            <p>
              Total Items:{" "}
              {totalItems}
            </p>

            <h3>
              Total Amount: ₹
              {totalAmount}
            </h3>

            <button
              className="checkout-button"
              onClick={
                handleCheckout
              }
            >
              Checkout
            </button>

            <button
              className="continue-shopping"
              onClick={
                onContinueShopping
              }
            >
              Continue Shopping
            </button>

          </aside>

        </div>

      )}

    </div>
  );
}

export default CartItem;