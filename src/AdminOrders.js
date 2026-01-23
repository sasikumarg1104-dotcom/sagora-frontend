import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminOrders() {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);

  /* ===== LOAD ORDERS ===== */
  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("sagora_orders")) || [];
    setOrders(saved);
  }, []);

  /* ===== UPDATE STATUS ===== */
  const updateStatus = (id, status) => {
    const updated = orders.map((o) =>
      o.id === id ? { ...o, status } : o
    );

    setOrders(updated);
    localStorage.setItem("sagora_orders", JSON.stringify(updated));
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>📦 Orders</h1>

      <button style={styles.backBtn} onClick={() => navigate("/admin")}>
        ⬅ Back to Dashboard
      </button>

      {orders.length === 0 && (
        <p style={{ marginTop: 20 }}>No orders yet</p>
      )}

      {orders.map((order) => (
        <div key={order.id} style={styles.card}>
          <div style={styles.header}>
            <div>
              <b>Order #{order.id}</b>
              <div style={styles.meta}>
                {order.date} • {order.user}
              </div>
            </div>

            <select
              value={order.status}
              onChange={(e) =>
                updateStatus(order.id, e.target.value)
              }
              style={{
                ...styles.status,
                background:
                  order.status === "Delivered"
                    ? "#d1fae5"
                    : order.status === "Shipped"
                    ? "#e0f2fe"
                    : "#fef3c7",
              }}
            >
              <option value="Placed">Placed</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>

          {/* ITEMS */}
          <div>
            {order.items.map((item, i) => (
              <div key={i} style={styles.item}>
                <span>
                  {item.name} × {item.qty}
                </span>
                <span>₹{item.price * item.qty}</span>
              </div>
            ))}
          </div>

          <div style={styles.total}>
            Total: ₹{order.total}
          </div>

          <div style={styles.address}>
            📍 {order.address}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminOrders;

/* ================= STYLES ================= */
const styles = {
  page: {
    padding: 40,
    background: "#f4f6f8",
    minHeight: "100vh",
  },
  title: {
    marginBottom: 20,
  },
  backBtn: {
    marginBottom: 20,
    padding: "8px 14px",
    borderRadius: 8,
    border: "none",
    background: "#131921",
    color: "#fff",
    cursor: "pointer",
  },
  card: {
    background: "#fff",
    padding: 20,
    borderRadius: 14,
    marginBottom: 20,
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  meta: {
    fontSize: 13,
    opacity: 0.7,
  },
  status: {
    padding: "6px 10px",
    borderRadius: 8,
    border: "1px solid #ccc",
    cursor: "pointer",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    padding: "6px 0",
    fontSize: 14,
  },
  total: {
    marginTop: 10,
    fontWeight: "bold",
  },
  address: {
    marginTop: 6,
    fontSize: 13,
    opacity: 0.8,
  },
};
