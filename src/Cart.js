import { FaPlus, FaMinus, FaTrash, FaArrowLeft } from "react-icons/fa";

function Cart({
  cartItems,
  updateQty,
  removeItem,
  dark,
  goHome,
  goCheckout,
}) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className={`cart-page ${dark ? "dark" : ""}`}>
      {/* BACK */}
      <button className="btn-primary" onClick={goHome}>
        <FaArrowLeft style={{ marginRight: "6px" }} />
        Back to Home
      </button>

      <h2 style={{ margin: "20px 0" }}>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-card-grid">
              {/* PRODUCT INFO */}
              <div>
                <div className="cart-title">{item.name}</div>
                <div className="cart-price">₹{item.price}</div>
              </div>

              {/* QUANTITY */}
              <div className="cart-qty">
                <button
                  className="qty-btn"
                  onClick={() => updateQty(index, -1)}
                >
                  <FaMinus />
                </button>

                <strong>{item.qty}</strong>

                <button
                  className="qty-btn"
                  onClick={() => updateQty(index, 1)}
                >
                  <FaPlus />
                </button>
              </div>

              {/* REMOVE */}
              <button
                className="remove-btn"
                onClick={() => removeItem(index)}
              >
                <FaTrash />
              </button>
            </div>
          ))}

          <h3 style={{ marginTop: "20px" }}>Total: ₹{total}</h3>

          <button
            className="btn-primary"
            style={{ marginTop: "20px" }}
            onClick={goCheckout}
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
