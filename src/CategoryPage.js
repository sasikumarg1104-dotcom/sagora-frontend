import { useParams } from "react-router-dom";
import { useState } from "react";
import ProductCard from "./ProductCard";

// category === "home-kitchen"


function CategoryPage({
  products,
  addToCart,
  wishlist,
  toggleWishlist,
}) {
  const { category } = useParams();

  const [price, setPrice] = useState(5000);
  const [rating, setRating] = useState(0);
  const [subCategory, setSubCategory] = useState("");

  const filtered = products.filter((p) => {
    return (
      p.category === category &&
      p.price <= price &&
      p.rating >= rating &&
      (subCategory === "" || p.subCategory === subCategory)
    );
  });

  const subCategories = [
    ...new Set(
      products
        .filter((p) => p.category === category)
        .map((p) => p.subCategory)
    ),
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ textAlign: "center" }}>
        {category.replace("-", " ").toUpperCase()}
      </h2>

      {/* FILTERS */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          margin: "30px 0",
          flexWrap: "wrap",
        }}
      >
        {/* PRICE */}
        <div>
          <label>Max Price: ₹{price}</label>
          <input
            type="range"
            min="100"
            max="5000"
            step="100"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>

        {/* RATING */}
        <div>
          <label>Min Rating</label>
          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          >
            <option value="0">All</option>
            <option value="4">4 ⭐+</option>
            <option value="4.5">4.5 ⭐+</option>
          </select>
        </div>

        {/* SUBCATEGORY */}
        <div>
          <label>Subcategory</label>
          <select
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
          >
            <option value="">All</option>
            {subCategories.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="product-grid">
        {filtered.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            addToCart={addToCart}
            wishlist={wishlist}
            toggleWishlist={toggleWishlist}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
