function ProductCard({ product, addToCart, dark }) {
  return (
    <div
      style={{
        backgroundColor: dark ? "#1e1e1e" : "#ffffff",
        color: dark ? "#ffffff" : "#000",
        padding: "14px",
        borderRadius: "10px",
        boxShadow: "0 6px 18px rgba(0,0,0,.12)",
      }}
    >
      <img
        src="https://picsum.photos/300"
        alt={product.name}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />

      <h3>{product.name}</h3>
      <p><b>₹{product.price}</b></p>

      <button
        onClick={() => addToCart(product)}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#febd69",
          border: "none",
          borderRadius: "6px",
          fontWeight: "bold",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
