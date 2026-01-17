import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

function SubCategoryPage({ products, addToCart, dark }) {
  const { category, subCategory } = useParams();
  const navigate = useNavigate();

  // Filter products by category + subCategory
  const filteredProducts = products.filter(
    (p) =>
      p.category === category &&
      p.subCategory === subCategory
  );

  return (
    <div
      className={`cart-page ${dark ? "dark" : ""}`}
      style={{ padding: "40px" }}
    >
      {/* BACK */}
      <button
        className="btn-primary"
        style={{ marginBottom: "20px" }}
        onClick={() => navigate(`/category/${category}`)}
      >
        ← Back
      </button>

      <h2 style={{ textTransform: "capitalize" }}>
        {subCategory.replace("-", " ")}
      </h2>

      {filteredProducts.length === 0 ? (
        <p>No products available</p>
      ) : (
        <div
          className="product-grid"
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "30px",
            marginTop: "30px",
          }}
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              dark={dark}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SubCategoryPage;
