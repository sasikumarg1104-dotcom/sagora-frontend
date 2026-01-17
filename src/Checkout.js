import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaCreditCard,
  FaGooglePay,
  FaMoneyBillWave,
} from "react-icons/fa";

function Checkout({ cartItems, dark, placeOrder }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [method, setMethod] = useState("upi");

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handlePay = () => {
    setLoading(true);
    setTimeout(() => {
      placeOrder();
    }, 1500);
  };

  return (
    <div className={`cart-page ${dark ? "dark" : ""}`}>
      {/* BACK */}
      <button className="btn-primary" onClick={() => navigate("/cart")}>
        <FaArrowLeft style={{ marginRight: "6px" }} />
        Back to Cart
      </button>

      <h2 style={{ marginTop: "20px" }}>Checkout</h2>

      {/* ITEMS */}
      <div style={{ marginTop: "20px" }}>
        {cartItems.map((item, index) => (
          <div key={index} className="checkout-card">
            <div>
              <strong>{item.name}</strong>
              <div style={{ fontSize: "14px", opacity: 0.8 }}>
                ₹{item.price} × {item.qty}
              </div>
            </div>
            <strong>₹{item.price * item.qty}</strong>
          </div>
        ))}
      </div>

      <h3 style={{ marginTop: "20px" }}>Total: ₹{total}</h3>

      {/* PAYMENT METHOD */}
      <h3 style={{ marginTop: "30px" }}>Payment Method</h3>

      <div className="payment-box">
        <label className={`payment-option ${method === "upi" ? "active" : ""}`}>
          <input
            type="radio"
            name="payment"
            checked={method === "upi"}
            onChange={() => setMethod("upi")}
          />
          <FaGooglePay /> UPI
        </label>

        <label className={`payment-option ${method === "card" ? "active" : ""}`}>
          <input
            type="radio"
            name="payment"
            checked={method === "card"}
            onChange={() => setMethod("card")}
          />
          <FaCreditCard /> Card
        </label>

        <label className={`payment-option ${method === "cod" ? "active" : ""}`}>
          <input
            type="radio"
            name="payment"
            checked={method === "cod"}
            onChange={() => setMethod("cod")}
          />
          <FaMoneyBillWave /> Cash on Delivery
        </label>
      </div>

      {/* PAYMENT DETAILS */}
      {method === "upi" && (
        <input
          className="payment-input"
          placeholder="Enter UPI ID (example@upi)"
        />
      )}

      {method === "card" && (
        <>
          <input className="payment-input" placeholder="Card Number" />
          <input className="payment-input" placeholder="MM/YY" />
          <input className="payment-input" placeholder="CVV" />
        </>
      )}

      {method === "cod" && (
        <p style={{ marginTop: "12px", opacity: 0.8 }}>
          Pay with cash when the order is delivered to your address.
        </p>
      )}

      {/* PAY */}
      <button
        className="btn-primary"
        style={{ marginTop: "20px", opacity: loading ? 0.7 : 1 }}
        disabled={loading}
        onClick={handlePay}
      >
        {loading ? (
          <span className="spinner"></span>
        ) : (
          <>
            <FaCheckCircle style={{ marginRight: "6px" }} />
            {method === "cod" ? "Place Order" : `Pay ₹${total}`}
          </>
        )}
      </button>
    </div>
  );
}

export default Checkout;
