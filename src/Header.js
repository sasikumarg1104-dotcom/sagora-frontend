import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.png";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaBox,
} from "react-icons/fa";

function Header({ cartCount = 0, user }) {
  const navigate = useNavigate();

  return (
    <header style={styles.header}>
      {/* LOGO */}
      <div style={styles.logoBox} onClick={() => navigate("/")}>
        <img src={logo} alt="SAGORA" style={styles.logoImg} />
      </div>

      {/* SEARCH */}
      <div style={styles.searchBox}>
        <input
          type="text"
          placeholder="Search for products..."
          style={styles.searchInput}
        />
        <button style={styles.searchBtn}>
          <FaSearch />
        </button>
      </div>

      {/* RIGHT ACTIONS */}
      <div style={styles.actions}>
        <FaHeart
          style={styles.icon}
          onClick={() => navigate("/wishlist")}
        />

        {/* ADMIN */}
        {user?.role === "admin" && (
          <span
            style={styles.admin}
            onClick={() => navigate("/admin")}
          >
            Admin
          </span>
        )}

        {/* CART */}
        <div style={styles.cartBox} onClick={() => navigate("/cart")}>
          <FaShoppingCart style={styles.icon} />
          {cartCount > 0 && (
            <span style={styles.badge}>{cartCount}</span>
          )}
        </div>

        {/* MY ORDERS */}
        {user && (
          <div
            style={styles.orders}
            onClick={() => navigate("/orders")}
          >
            <FaBox />
            <span>My Orders</span>
          </div>
        )}

        {/* USER */}
        <FaUser
          style={styles.icon}
          onClick={() => navigate("/login")}
        />
      </div>
    </header>
  );
}

export default Header;
const styles = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    height: "64px",
    background: "linear-gradient(90deg,#131921,#1f2937)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 24px",
    color: "#fff",
  },

  logoBox: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },

  logoImg: {
    height: "36px",
    objectFit: "contain",
  },

  searchBox: {
    display: "flex",
    width: "40%",
    maxWidth: "420px",
  },

  searchInput: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px 0 0 8px",
    border: "none",
    outline: "none",
  },

  searchBtn: {
    padding: "0 14px",
    borderRadius: "0 8px 8px 0",
    border: "none",
    background: "#febd69",
    cursor: "pointer",
  },

  actions: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },

  icon: {
    fontSize: "18px",
    cursor: "pointer",
  },

  admin: {
    color: "#febd69",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "14px",
  },

  cartBox: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },

  badge: {
    position: "absolute",
    top: "-6px",
    right: "-10px",
    background: "red",
    color: "#fff",
    fontSize: "11px",
    borderRadius: "50%",
    padding: "2px 6px",
  },

  orders: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "14px",
    color: "#febd69",
  },
};
