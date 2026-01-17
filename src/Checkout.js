import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Checkout({ cartItems, dark, placeOrder }) {
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const [address, setAddress] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    const { name, email, phone, address: addr, city, pincode } = address;

    if (!name || !email || !phone || !addr || !city || !pincode) {
      alert("Please fill all address fields");
      return;
    }

    if (paymentMethod === "cod") {
      localStorage.setItem("sagora_address", JSON.stringify(address));
      localStorage.setItem("sagora_payment", "Cash on Delivery");
      placeOrder();
    } else {
      alert("Online payment will be enabled soon 🚀");
    }
  };

  return (
    <div className={`cart-page ${dark ? "dark" : ""}`}>
      <button
        className="btn-primary"
        style={{ marginBottom: "20px" }}
        onClick={() => navigate("/cart")}
      >
        ← Back to Cart
      </button>

      <h2>Checkout 💳</h2>

      {/* ORDER SUMMARY */}
      {cartItems.map((item, index) => (
        <div key={index} className="checkout-card">
          <div>
            <strong>{item.name}</strong>
            <div>₹{item.price} × {item.qty}</div>
          </div>
          <strong>₹{item.price * item.qty}</strong>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>

      {/* PAYMENT METHOD */}
      <h3 style={{ marginTop: "30px" }}>Payment Method</h3>

      <div style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
        <label>
          <input
            type="radio"
            name="payment"
            checked={paymentMethod === "cod"}
            onChange={() => setPaymentMethod("cod")}
          />{" "}
          Cash on Delivery
        </label>

        <label style={{ opacity: 0.5 }}>
          <input type="radio" disabled /> Online Payment (Coming Soon)
        </label>
      </div>

      {/* ADDRESS */}
      <h3 style={{ marginTop: "30px" }}>Delivery Address 📦</h3>

      <div className="address-form">
        <input name="name" placeholder="Full Name" value={address.name} onChange={handleChange} />
        <input name="email" placeholder="Email" value={address.email} onChange={handleChange} />
        <input name="phone" placeholder="Phone Number" value={address.phone} onChange={handleChange} />
        <textarea name="address" placeholder="Full Address" value={address.address} onChange={handleChange} />
        <input name="city" placeholder="City" value={address.city} onChange={handleChange} />
        <input name="pincode" placeholder="Pincode" value={address.pincode} onChange={handleChange} />
      </div>

      <button
        className="btn-primary"
        style={{ marginTop: "30px" }}
        onClick={handlePlaceOrder}
      >
        Place Order
      </button>
    </div>
  );
}

export default Checkout;
