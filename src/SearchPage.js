import { useLocation } from "react-router-dom";
import ProductCard from "./ProductCard";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchPage({ products, addToCart }) {
  const query = useQuery().get("q") || "";

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="cart-page">
      <h2>Search results for "{query}"</h2>

      <div className="product-grid">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
