import { FaBox, FaClipboardList } from "react-icons/fa";

function AdminSidebar({ setPage, page }) {
  return (
    <div style={styles.sidebar}>
      <h2 style={styles.logo}>SAGORA</h2>

      <div
        style={page === "products" ? styles.active : styles.item}
        onClick={() => setPage("products")}
      >
        <FaBox /> Products
      </div>

      <div
        style={page === "orders" ? styles.active : styles.item}
        onClick={() => setPage("orders")}
      >
        <FaClipboardList /> Orders
      </div>
    </div>
  );
}

export default AdminSidebar;

const styles = {
  sidebar: {
    width: "220px",
    background: "#131921",
    color: "#fff",
    minHeight: "100vh",
    padding: "20px",
  },
  logo: {
    marginBottom: "30px",
    letterSpacing: "3px",
  },
  item: {
    padding: "12px",
    cursor: "pointer",
    marginBottom: "10px",
    borderRadius: "8px",
  },
  active: {
    padding: "12px",
    cursor: "pointer",
    marginBottom: "10px",
    borderRadius: "8px",
    background: "#febd69",
    color: "#000",
  },
};
