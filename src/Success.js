import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Success({ dark }) {
  const navigate = useNavigate();
  const [orderId, setOrderId] = useState("");

  // Generate fake order ID
  useEffect(() => {
    const id = "SAG" + Math.floor(100000 + Math.random() * 900000);
    setOrderId(id);
  }, []);

  return (
    <div
      className={`cart-page ${dark ? "dark" : ""}`}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          background: dark ? "#1e1e1e" : "#ffffff",
          padding: "40px",
          borderRadius: "18px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          animation: "fadeIn 0.6s ease",
          maxWidth: "420px",
          width: "100%",
        }}
      >
        {/* ICON */}
        <div style={{ fontSize: "64px", marginBottom: "10px" }}>🎉</div>

        <h2 style={{ marginBottom: "10px" }}>
          Order Placed Successfully!
        </h2>

        <p style={{ opacity: 0.8 }}>
          Thank you for shopping with <strong>SAGORA</strong>
        </p>

        {/* ORDER ID */}
        <div
          style={{
            marginTop: "20px",
            padding: "12px",
            borderRadius: "10px",
            background: dark ? "#2a2a2a" : "#f3f3f3",
            fontWeight: "bold",
          }}
        >
          Order ID: {orderId}
        </div>

        {/* BUTTON */}
        <button
          className="btn-primary"
          style={{ marginTop: "30px", width: "100%" }}
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default Success;
