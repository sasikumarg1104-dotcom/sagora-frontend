import { useNavigate } from "react-router-dom";

function Cart({ cartItems, updateQty, removeItem }) {
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="cart-page">
      {/* ✅ BACK TO HOME */}
      <button
        className="btn-primary"
        onClick={() => navigate("/")}
        style={{ marginBottom: "20px" }}
      >
        ← Back to Home
      </button>

      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={item.id} className="cart-card-grid">
              <div>
                <div className="cart-title">{item.name}</div>
                <div className="cart-price">₹{item.price}</div>
              </div>

              <div className="cart-qty">
                <button
                  className="qty-btn"
                  onClick={() => updateQty(index, -1)}
                >
                  −
                </button>
                <strong>{item.qty}</strong>
                <button
                  className="qty-btn"
                  onClick={() => updateQty(index, 1)}
                >
                  +
                </button>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeItem(index)}
              >
                🗑
              </button>
            </div>
          ))}

          <h3 style={{ marginTop: "20px" }}>Total: ₹{total}</h3>

          <button
            className="btn-primary"
            style={{ marginTop: "20px" }}
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
