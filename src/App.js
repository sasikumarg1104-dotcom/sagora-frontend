import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Header from "./Header";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Success from "./Success";
import CategoryPage from "./CategoryPage";
import SubCategoryPage from "./SubCategoryPage";

// ✅ SINGLE SOURCE OF TRUTH (VERY IMPORTANT)
import { categories, products } from "./data/products";

function App() {
  const [dark, setDark] = useState(false);

  /* ======================
     CART STATE (LOCALSTORAGE)
  ====================== */
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("sagora_cart");
    return saved ? JSON.parse(saved) : [];
  });

  const navigate = useNavigate();

  /* 💾 SAVE CART */
  useEffect(() => {
    localStorage.setItem("sagora_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  /* 🌙 THEME */
  const toggleTheme = () => setDark((prev) => !prev);

  /* ➕ ADD TO CART */
  const addToCart = (product) => {
    const index = cartItems.findIndex((i) => i.id === product.id);

    if (index !== -1) {
      const updated = [...cartItems];
      updated[index].qty += 1;
      setCartItems(updated);
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  /* ➖ UPDATE QUANTITY */
  const updateQty = (index, delta) => {
    const updated = [...cartItems];
    updated[index].qty += delta;

    if (updated[index].qty <= 0) {
      updated.splice(index, 1);
    }

    setCartItems(updated);
  };

  /* ❌ REMOVE ITEM */
  const removeItem = (index) => {
    const updated = [...cartItems];
    updated.splice(index, 1);
    setCartItems(updated);
  };

  /* ✅ PLACE ORDER */
  const placeOrder = () => {
    setCartItems([]);
    localStorage.removeItem("sagora_cart");
    navigate("/success");
  };

  return (
    <div
      className={dark ? "dark" : ""}
      style={{
        minHeight: "100vh",
        backgroundColor: dark ? "#121212" : "#ffffff",
        color: dark ? "#ffffff" : "#000000",
      }}
    >
      {/* ================= HEADER ================= */}
      <Header
        toggleTheme={toggleTheme}
        cartCount={cartItems.reduce((sum, item) => sum + item.qty, 0)}
        openCart={() => navigate("/cart")}
        goHome={() => navigate("/")}
        dark={dark}
      />

      <Routes>
        {/* ================= HOME (CATEGORIES) ================= */}
        <Route
          path="/"
          element={
            <div style={{ padding: "40px", textAlign: "center" }}>
              <h1>Welcome to SAGORA 🛒</h1>
              <p>World-class shopping experience</p>

              <div
                className="product-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "30px",
                  marginTop: "40px",
                  maxWidth: "1100px",
                  margin: "auto",
                }}
              >
                {categories.map((cat) => (
                  <div
                    key={cat.id}
                    className="product-card"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate(`/category/${cat.slug}`)}
                  >
                    <img
                      src={cat.image}
                      alt={cat.name}
                      style={{
                        width: "100%",
                        height: "160px",
                        objectFit: "cover",
                        borderRadius: "12px",
                      }}
                    />
                    <h3 style={{ marginTop: "12px" }}>{cat.name}</h3>
                    <p style={{ opacity: 0.7 }}>Explore products</p>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        {/* ================= CATEGORY → SUB-CATEGORIES ================= */}
        <Route
          path="/category/:category"
          element={
            <CategoryPage
              products={products}
              dark={dark}
            />
          }
        />

        {/* ================= SUB-CATEGORY → PRODUCTS ================= */}
        <Route
          path="/category/:category/:subCategory"
          element={
            <SubCategoryPage
              products={products}
              addToCart={addToCart}
              dark={dark}
            />
          }
        />

        {/* ================= CART ================= */}
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              updateQty={updateQty}
              removeItem={removeItem}
              dark={dark}
              goHome={() => navigate("/")}
              goCheckout={() => navigate("/checkout")}
            />
          }
        />

        {/* ================= CHECKOUT ================= */}
        <Route
          path="/checkout"
          element={
            <Checkout
              cartItems={cartItems}
              dark={dark}
              placeOrder={placeOrder}
            />
          }
        />

        {/* ================= SUCCESS ================= */}
        <Route path="/success" element={<Success dark={dark} />} />
      </Routes>

      {/* ================= FOOTER ================= */}
      <footer
        style={{
          marginTop: "60px",
          padding: "20px",
          textAlign: "center",
          fontSize: "14px",
          opacity: 0.7,
        }}
      >
        <p>
          SAGORA is an online store offering electronic accessories.
          <br />
          Currently operating in testing phase.
        </p>
      </footer>
    </div>
  );
}

export default App;
