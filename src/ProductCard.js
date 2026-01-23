import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function ProductCard({ product, addToCart, wishlist, toggleWishlist }) {
  const navigate = useNavigate();

  const isWishlisted = wishlist.some(
    (item) => item.id === product.id
  );

  const image =
    product.images?.[0] ||
    product.image ||
    "https://via.placeholder.com/300";

  return (
    <div className="product-card">
      <img
        src={image}
        alt={product.name}
        onClick={() => navigate(`/product/${product.id}`)}
        style={{
          width: "100%",
          height: 180,
          objectFit: "cover",
          borderRadius: 12,
          cursor: "pointer",
        }}
      />

      <h3 onClick={() => navigate(`/product/${product.id}`)}>
        {product.name}
      </h3>

      <p style={{ fontWeight: "bold" }}>₹{product.price}</p>

      <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
        <button className="btn-primary" onClick={() => addToCart(product)}>
          Add to Cart
        </button>

        <button
          onClick={() => toggleWishlist(product)}
          style={{
            border: "none",
            background: "transparent",
            fontSize: 20,
            cursor: "pointer",
            color: isWishlisted ? "red" : "#555",
          }}
        >
          {isWishlisted ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
