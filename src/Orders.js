// src/Orders.js
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Orders({ user }) {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const allOrders =
      JSON.parse(localStorage.getItem("sagora_orders")) || [];

    const userOrders = allOrders.filter(
      (o) => o.user === user?.email
    );

    setOrders(userOrders.reverse());
  }, [user]);

  return (
    <div style={styles.page}>
      <h1>My Orders</h1>

      <button style={styles.backBtn} onClick={() => navigate("/")}>
        ⬅ Back to Home
      </button>

      {orders.length === 0 && (
        <p style={{ marginTop: 20 }}>
          You have not placed any orders yet.
        </p>
      )}

      {orders.map((order) => (
        <div key={order.id} style={styles.card}>
          <div style={styles.header}>
            <div>
              <b>Order ID:</b> #{order.id}
            </div>
            <div>{order.date}</div>
          </div>

          <div style={{ marginTop: 10 }}>
            {order.items.map((item, i) => (
              <div key={i} style={styles.item}>
                <span>
                  {item.name} × {item.qty}
                </span>
                <span>₹{item.price * item.qty}</span>
              </div>
            ))}
          </div>

          <hr />

          <div style={styles.footer}>
            <b>Total: ₹{order.total}</b>
            <span style={{ color: "#ff9900" }}>
              {order.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Orders;

/* ================= STYLES ================= */
const styles = {
  page: {
    padding: 40,
    background: "#f4f6f8",
    minHeight: "100vh",
  },
  backBtn: {
    marginBottom: 20,
  },
  card: {
    background: "#fff",
    padding: 20,
    borderRadius: 12,
    marginTop: 20,
    boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 14,
    opacity: 0.8,
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 6,
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 10,
    fontWeight: "bold",
  },
};
