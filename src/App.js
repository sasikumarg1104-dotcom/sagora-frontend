// src/App.js
import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";

/* ===== USER PAGES ===== */
import Home from "./Home";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Success from "./Success";
import CategoryPage from "./CategoryPage";
import ProductDetails from "./ProductDetails";
import Login from "./Login";
import Wishlist from "./Wishlist";
import SearchPage from "./SearchPage";
import Header from "./Header";
import Orders from "./Orders";

/* ===== ADMIN PAGES ===== */
import AdminDashboard from "./AdminDashboard";
import AdminLogin from "./AdminLogin";
import AdminOrders from "./AdminOrders";
import AdminAnalytics from "./AdminAnalytics";

/* ===== DATA ===== */
import { products as staticProducts } from "./data/products";

function App() {
  const navigate = useNavigate();

  /* ================= AUTH ================= */
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("sagora_user"));
    } catch {
      return null;
    }
  });

  /* ================= PRODUCTS ================= */
  const [products] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("sagora_products")) ||
      staticProducts
    );
  });

  /* ================= CART ================= */
  const [cartItems, setCartItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("sagora_cart")) || [];
    } catch {
      return [];
    }
  });

  /* ================= WISHLIST ================= */
  const [wishlist, setWishlist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("sagora_wishlist")) || [];
    } catch {
      return [];
    }
  });

  /* ================= STORAGE ================= */
  useEffect(() => {
    localStorage.setItem("sagora_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("sagora_wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("sagora_user", JSON.stringify(user));
  }, [user]);

  /* ================= CART FUNCTIONS ================= */
  const addToCart = (product) => {
    const idx = cartItems.findIndex((i) => i.id === product.id);
    if (idx !== -1) {
      const updated = [...cartItems];
      updated[idx].qty += 1;
      setCartItems(updated);
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const updateQty = (index, delta) => {
    const updated = [...cartItems];
    updated[index].qty += delta;
    if (updated[index].qty <= 0) updated.splice(index, 1);
    setCartItems(updated);
  };

  const removeItem = (index) => {
    const updated = [...cartItems];
    updated.splice(index, 1);
    setCartItems(updated);
  };

  /* ================= WISHLIST ================= */
  const toggleWishlist = (product) => {
    if (wishlist.some((i) => i.id === product.id)) {
      setWishlist(wishlist.filter((i) => i.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  /* ================= PLACE ORDER ================= */
  const placeOrder = (address) => {
    const oldOrders =
      JSON.parse(localStorage.getItem("sagora_orders")) || [];

    const newOrder = {
      id: Date.now(),
      user: user?.email || "Guest",
      items: cartItems,
      total: cartItems.reduce(
        (sum, i) => sum + i.price * i.qty,
        0
      ),
      address,
      date: new Date().toLocaleString(),
      status: "Placed",
    };

    localStorage.setItem(
      "sagora_orders",
      JSON.stringify([...oldOrders, newOrder])
    );

    setCartItems([]);
    localStorage.removeItem("sagora_cart");
    navigate("/success");
  };

  /* ================= LOGOUT ================= */
  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <>
      <Header
        user={user}
        cartCount={cartItems.reduce((sum, i) => sum + i.qty, 0)}
        wishlistCount={wishlist.length}
        logout={logout}
      />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <Home
              addToCart={addToCart}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
            />
          }
        />

        {/* CATEGORY */}
        <Route
          path="/category/:category"
          element={
            <CategoryPage
              products={products}
              addToCart={addToCart}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
            />
          }
        />
        <Route
  path="/orders"
  element={
    user ? (
      <Orders user={user} />
    ) : (
      <Navigate to="/login" replace />
    )
  }
/>


        {/* PRODUCT */}
        <Route
          path="/product/:id"
          element={
            <ProductDetails
              products={products}
              addToCart={addToCart}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
            />
          }
        />

        {/* SEARCH */}
        <Route
          path="/search"
          element={
            <SearchPage
              products={products}
              addToCart={addToCart}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
            />
          }
        />

        {/* WISHLIST */}
        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
              addToCart={addToCart}
            />
          }
        />

        {/* CART */}
        <Route
          path="/cart"
          element={
            user ? (
              <Cart
                cartItems={cartItems}
                updateQty={updateQty}
                removeItem={removeItem}
                goCheckout={() => navigate("/checkout")}
              />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* CHECKOUT */}
        <Route
          path="/checkout"
          element={
            user ? (
              <Checkout
                cartItems={cartItems}
                placeOrder={placeOrder}
              />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* USER ORDERS */}
        <Route
          path="/orders"
          element={
            user ? (
              <AdminOrders user={user} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* ADMIN DASHBOARD */}
        <Route
          path="/admin"
          element={
            user?.role === "admin" ? (
              <AdminDashboard />
            ) : (
              <AdminLogin />
            )
          }
        />

        {/* ADMIN ANALYTICS */}
        <Route
          path="/admin/analytics"
          element={
            user?.role === "admin" ? (
              <AdminAnalytics />
            ) : (
              <AdminLogin />
            )
          }
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login setUser={setUser} />}
        />

        {/* SUCCESS */}
        <Route path="/success" element={<Success />} />
      </Routes>
    </>
  );
}

export default App;
