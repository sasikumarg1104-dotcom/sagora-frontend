import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* ===== DEFAULT PRODUCT ===== */
const emptyProduct = {
  name: "",
  price: "",
  category: "",
  subCategory: "",
  images: [""],
  rating: "4",
  stock: "in",
};

function AdminDashboard() {
  const navigate = useNavigate();

  /* ===== PRODUCTS ===== */
  const [products, setProducts] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("sagora_products")) || [];
    } catch {
      return [];
    }
  });

  const [product, setProduct] = useState(emptyProduct);
  const [editingId, setEditingId] = useState(null);

  /* ===== SAVE / UPDATE ===== */
  const saveProduct = () => {
    if (!product.name || !product.price || !product.category) {
      alert("Please fill all required fields");
      return;
    }

    const prepared = {
      ...product,
      price: Number(product.price),
      rating: Number(product.rating),
      images: product.images.filter((img) => img.trim() !== ""),
    };

    let updatedProducts;

    if (editingId) {
      updatedProducts = products.map((p) =>
        p.id === editingId ? { ...prepared, id: editingId } : p
      );
    } else {
      updatedProducts = [
        ...products,
        { ...prepared, id: Date.now() },
      ];
    }

    setProducts(updatedProducts);
    localStorage.setItem(
      "sagora_products",
      JSON.stringify(updatedProducts)
    );

    resetForm();
  };

  /* ===== EDIT ===== */
  const editProduct = (p) => {
    setEditingId(p.id);
    setProduct({
      name: p.name || "",
      price: p.price || "",
      category: p.category || "",
      subCategory: p.subCategory || "",
      images:
        Array.isArray(p.images) && p.images.length > 0
          ? p.images
          : p.image
          ? [p.image]
          : [""],
      rating: String(p.rating || "4"),
      stock: p.stock || "in",
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ===== DELETE ===== */
  const deleteProduct = (id) => {
    if (!window.confirm("Delete this product?")) return;

    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
    localStorage.setItem(
      "sagora_products",
      JSON.stringify(updated)
    );
  };

  /* ===== IMAGE HANDLING ===== */
  const updateImage = (index, value) => {
    const imgs = [...product.images];
    imgs[index] = value;
    setProduct({ ...product, images: imgs });
  };

  const addImage = () =>
    setProduct({
      ...product,
      images: [...product.images, ""],
    });

  const resetForm = () => {
    setProduct(emptyProduct);
    setEditingId(null);
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Admin Dashboard</h1>

      <div style={styles.grid}>
        {/* ===== FORM ===== */}
        <div style={styles.card}>
          <h3>{editingId ? "Edit Product" : "Add Product"}</h3>

          <input
            style={styles.input}
            placeholder="Product Name *"
            value={product.name}
            onChange={(e) =>
              setProduct({ ...product, name: e.target.value })
            }
          />

          <input
            style={styles.input}
            type="number"
            placeholder="Price *"
            value={product.price}
            onChange={(e) =>
              setProduct({ ...product, price: e.target.value })
            }
          />

          <select
            style={styles.input}
            value={product.category}
            onChange={(e) =>
              setProduct({ ...product, category: e.target.value })
            }
          >
            <option value="">Select Category *</option>
            <option value="electronics">Electronics</option>
            <option value="beauty">Beauty</option>
            <option value="books">Books</option>
            <option value="home-kitchen">Home & Kitchen</option>
            <option value="toys">Toys</option>
            <option value="fitness">Fitness</option>
          </select>

          <input
            style={styles.input}
            placeholder="Sub Category"
            value={product.subCategory}
            onChange={(e) =>
              setProduct({
                ...product,
                subCategory: e.target.value,
              })
            }
          />

          {/* ===== IMAGES ===== */}
          <h4>Images</h4>
          {product.images.map((img, i) => (
            <div key={i} style={{ marginBottom: 10 }}>
              <input
                style={styles.input}
                placeholder={`Image URL ${i + 1}`}
                value={img}
                onChange={(e) =>
                  updateImage(i, e.target.value)
                }
              />
              {img && (
                <img
                  src={img}
                  alt="preview"
                  style={styles.preview}
                />
              )}
            </div>
          ))}

          <button style={styles.linkBtn} onClick={addImage}>
            ➕ Add Image
          </button>

          <button
            style={styles.primaryBtn}
            onClick={saveProduct}
          >
            {editingId ? "Update Product" : "Save Product"}
          </button>
        </div>

        {/* ===== PRODUCT LIST ===== */}
        <div style={styles.card}>
          <h3>Products ({products.length})</h3>

          {products.length === 0 && (
            <p>No products added yet</p>
          )}

          {products.map((p) => (
            <div key={p.id} style={styles.row}>
              <img
                src={
                  p.images?.[0] ||
                  p.image ||
                  "https://via.placeholder.com/60"
                }
                alt={p.name}
                style={styles.thumb}
              />

              <div style={{ flex: 1 }}>
                <b>{p.name}</b>
                <div style={styles.meta}>
                  ₹{p.price} • {p.category}
                </div>
              </div>

              <div style={styles.actions}>
                <button onClick={() => editProduct(p)}>
                  Edit
                </button>
                <button
                  style={{ color: "red" }}
                  onClick={() => deleteProduct(p.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        style={styles.backBtn}
        onClick={() => navigate("/")}
      >
        ⬅ Back to Store
      </button>
    </div>
  );
}

export default AdminDashboard;

/* ================= STYLES ================= */
const styles = {
  page: {
    padding: 40,
    background: "#f4f6f8",
    minHeight: "100vh",
  },
  title: { marginBottom: 30 },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 30,
    alignItems: "start",
  },
  card: {
    background: "#fff",
    padding: 24,
    borderRadius: 14,
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  },
  input: {
    width: "100%",
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    border: "1px solid #ccc",
  },
  primaryBtn: {
    width: "100%",
    padding: 12,
    borderRadius: 10,
    border: "none",
    background: "#febd69",
    fontWeight: "bold",
    cursor: "pointer",
  },
  linkBtn: {
    marginBottom: 15,
    background: "transparent",
    border: "none",
    color: "#0073e6",
    cursor: "pointer",
  },
  row: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    padding: "10px 0",
    borderBottom: "1px solid #eee",
  },
  thumb: {
    width: 60,
    height: 60,
    objectFit: "cover",
    borderRadius: 8,
  },
  preview: {
    width: 100,
    marginTop: 6,
    borderRadius: 8,
  },
  meta: {
    fontSize: 13,
    opacity: 0.7,
  },
  actions: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  backBtn: {
    marginTop: 30,
  },
};
