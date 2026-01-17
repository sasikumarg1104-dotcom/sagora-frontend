import { useParams, useNavigate } from "react-router-dom";

function CategoryPage({ products, dark }) {
  const { category } = useParams();
  const navigate = useNavigate();

  // Extract unique subcategories
  const subCategories = [
    ...new Set(
      products
        .filter((p) => p.category === category)
        .map((p) => p.subCategory)
    ),
  ];

  return (
    <div className={`cart-page ${dark ? "dark" : ""}`}>
      <button
        className="btn-primary"
        onClick={() => navigate("/")}
        style={{ marginBottom: "20px" }}
      >
        ← Back to Categories
      </button>

      <h2 style={{ textTransform: "capitalize" }}>
        {category}
      </h2>

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
        {subCategories.map((sub) => (
          <div
            key={sub}
            className="product-card"
            style={{ cursor: "pointer" }}
            onClick={() =>
              navigate(`/category/${category}/${sub}`)
            }
          >
            <h3 style={{ textTransform: "capitalize" }}>
              {sub}
            </h3>
            <p>View products</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
