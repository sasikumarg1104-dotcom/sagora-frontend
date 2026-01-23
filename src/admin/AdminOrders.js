function AdminOrders() {
  const orders =
    JSON.parse(localStorage.getItem("admin_orders")) || [];

  return (
    <div>
      <h2>Orders</h2>

      {orders.length === 0 && <p>No orders yet</p>}

      {orders.map((o, i) => (
        <div key={i} style={styles.card}>
          <p><b>Order ID:</b> {o.id}</p>
          <p><b>Total:</b> ₹{o.total}</p>
          <p><b>Status:</b> {o.status}</p>
        </div>
      ))}
    </div>
  );
}

export default AdminOrders;

const styles = {
  card: {
    background: "#fff",
    padding: "16px",
    borderRadius: "12px",
    marginBottom: "10px",
  },
};
