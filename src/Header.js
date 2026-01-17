import { FaShoppingCart, FaMoon, FaSun } from "react-icons/fa";

function Header({ toggleTheme, cartCount, openCart, goHome, dark }) {
  return (
    <div className="header">
      {/* LOGO */}
      <h2 style={{ cursor: "pointer" }} onClick={goHome}>
        SAGORA
      </h2>

      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        {/* THEME TOGGLE */}
        <button className="btn-primary" onClick={toggleTheme}>
          {dark ? <FaSun /> : <FaMoon />}
        </button>

        {/* CART */}
        <div
          onClick={openCart}
          style={{
            position: "relative",
            cursor: "pointer",
            fontSize: "20px",
          }}
        >
          <FaShoppingCart />

          {cartCount > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-10px",
                background: "#febd69",
                color: "#000",
                borderRadius: "50%",
                padding: "2px 6px",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
