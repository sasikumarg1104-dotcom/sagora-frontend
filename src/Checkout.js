import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Checkout({ cartItems, dark, placeOrder }) {
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    name: "",
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
    const { name, phone, address: addr, city, pincode } = address;

    if (!name || !phone || !addr || !city || !pincode) {
      alert("Please fill all address fields");
      return;
    }

    // save address
    localStorage.setItem("sagora_address", JSON.stringify(address));

    placeOrder();
  };

  return (
    <div className={`cart-page ${dark ? "dark" : ""}`}>
      {/* BACK */}
      <button
        className="btn-primary"
        style={{ marginBottom: "20px" }}
        onClick={() => navigate("/cart")}
      >
        ← Back to Cart
      </button>

      <h2>Checkout 💳</h2>

      {/* ORDER SUMMARY */}
      <div style={{ marginTop: "20px" }}>
        {cartItems.map((item, index) => (
          <div key={index} className="checkout-card">
            <div>
              <strong>{item.name}</strong>
              <div style={{ opacity: 0.8 }}>
                ₹{item.price} × {item.qty}
              </div>
            </div>
            <strong>₹{item.price * item.qty}</strong>
          </div>
        ))}
      </div>

      <h3 style={{ marginTop: "20px" }}>Total: ₹{total}</h3>

      {/* ADDRESS FORM */}
      <h3 style={{ marginTop: "30px" }}>Delivery Address 📦</h3>

      <div className="address-form">
        <input
          name="name"
          placeholder="Full Name"
          value={address.name}
          onChange={handleChange}
        />
        <input
          name="phone"
          placeholder="Phone Number"
          value={address.phone}
          onChange={handleChange}
        />
        <textarea
          name="address"
          placeholder="Full Address"
          value={address.address}
          onChange={handleChange}
        />
        <input
          name="city"
          placeholder="City"
          value={address.city}
          onChange={handleChange}
        />
        <input
          name="pincode"
          placeholder="Pincode"
          value={address.pincode}
          onChange={handleChange}
        />
      </div>

      {/* PLACE ORDER */}
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
