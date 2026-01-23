function Wishlist({ wishlist, toggleWishlist, addToCart }) {
  return (
    <div style={{ padding: "40px" }}>
      <h2>My Wishlist ❤️</h2>

      {wishlist.length === 0 && (
        <p>No items in wishlist</p>
      )}

      <div
        className="product-grid"
        style={{ marginTop: "20px" }}
      >
        {wishlist.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />

            <h3>{product.name}</h3>
            <p>₹{product.price}</p>

            <div style={{ display: "flex", gap: "10px" }}>
              <button
                className="btn-primary"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>

              <button
                onClick={() => toggleWishlist(product)}
                style={{
                  border: "none",
                  background: "#ff4d4f",
                  color: "#fff",
                  padding: "10px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
