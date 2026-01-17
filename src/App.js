import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Header";
import ProductCard from "./ProductCard";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Success from "./Success";

function App() {
  const [dark, setDark] = useState(false);

  // 🛒 LOAD CART FROM LOCALSTORAGE
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("sagora_cart");
    return saved ? JSON.parse(saved) : [];
  });

  const navigate = useNavigate();

  // 💾 SAVE CART TO LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("sagora_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // 🌙 TOGGLE THEME
  const toggleTheme = () => setDark(!dark);

  // ➕ ADD TO CART
  const addToCart = (product) => {
    const index = cartItems.findIndex((i) => i.name === product.name);

    if (index !== -1) {
      const updated = [...cartItems];
      updated[index].qty += 1;
      setCartItems(updated);
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  // ➖ UPDATE QUANTITY
  const updateQty = (index, delta) => {
    const updated = [...cartItems];
    updated[index].qty += delta;

    if (updated[index].qty <= 0) {
      updated.splice(index, 1);
    }

    setCartItems(updated);
  };

  // ❌ REMOVE ITEM
  const removeItem = (index) => {
    const updated = [...cartItems];
    updated.splice(index, 1);
    setCartItems(updated);
  };

  // ✅ PLACE ORDER
  const placeOrder = () => {
    setCartItems([]);                       // clear state
    localStorage.removeItem("sagora_cart"); // clear storage
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
      {/* HEADER */}
      <Header
        toggleTheme={toggleTheme}
        cartCount={cartItems.reduce((sum, item) => sum + item.qty, 0)}
        openCart={() => navigate("/cart")}
        goHome={() => navigate("/")}
        dark={dark}
      />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <div style={{ padding: "40px", textAlign: "center" }}>
              <h1>Welcome to SAGORA 🛒</h1>
              <p>World-class shopping experience</p>

              {/* PRODUCT GRID */}
              <div
                className="product-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "30px",
                  marginTop: "40px",
                  maxWidth: "1000px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <ProductCard
                  product={{ name: "Headphones", price: 999 }}
                  addToCart={addToCart}
                  dark={dark}
                />
                <ProductCard
                  product={{ name: "Smart Watch", price: 1999 }}
                  addToCart={addToCart}
                  dark={dark}
                />
                <ProductCard
                  product={{ name: "Bluetooth Speaker", price: 1499 }}
                  addToCart={addToCart}
                  dark={dark}
                />
                <ProductCard
                  product={{ name: "Wireless Mouse", price: 499 }}
                  addToCart={addToCart}
                  dark={dark}
                />
              </div>
            </div>
          }
        />

        {/* CART */}
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

        {/* CHECKOUT */}
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

        {/* SUCCESS */}
        <Route
          path="/success"
          element={<Success dark={dark} />}
        />
      </Routes>
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
