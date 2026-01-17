import { useNavigate } from "react-router-dom";

function Success({ dark }) {
  const navigate = useNavigate();

  return (
    <div
      className={`cart-page ${dark ? "dark" : ""}`}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        animation: "fadeIn 0.6s ease",
      }}
    >
      {/* CHECK ICON */}
      <div
        style={{
          fontSize: "80px",
          marginBottom: "20px",
          animation: "slideUp 0.6s ease",
        }}
      >
        ✅
      </div>

      <h1>Order Placed Successfully!</h1>
      <p style={{ maxWidth: "400px", marginTop: "10px", opacity: 0.85 }}>
        Thank you for shopping with SAGORA.  
        Your order will be delivered soon 🚚
      </p>

      <button
        className="btn-primary"
        style={{ marginTop: "30px" }}
        onClick={() => navigate("/")}
      >
        Continue Shopping
      </button>
    </div>
  );
}

export default Success;
