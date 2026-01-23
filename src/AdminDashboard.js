import { useState, useEffect } from "react";
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

  /* ================= DATA ================= */
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  const [product, setProduct] = useState(emptyProduct);
  const [editingId, setEditingId] = useState(null);

  /* ================= LOAD DATA ================= */
  useEffect(() => {
    setProducts(
      JSON.parse(localStorage.getItem("sagora_products")) || []
    );

    setOrders(
      JSON.parse(localStorage.getItem("sagora_orders")) || []
    );
  }, []);

  /* ================= STATS ================= */
  const totalSales = orders.reduce(
    (sum, o) => sum + o.total,
    0
  );

  const deliveredOrders = orders.filter(
    (o) => o.status === "Delivered"
  ).length;

  /* ================= SAVE / UPDATE PRODUCT ================= */
  const saveProduct = () => {
    if (!product.name || !product.price || !product.category) {
      alert("Fill all required fields");
      return;
    }

    const prepared = {
      ...product,
      price: Number(product.price),
      rating: Number(product.rating),
      images: product.images.filter((i) => i.trim() !== ""),
    };

    let updated;

    if (editingId) {
      updated = products.map((p) =>
        p.id === editingId ? { ...prepared, id: editingId } : p
      );
    } else {
      updated = [...products, { ...prepared, id: Date.now() }];
    }

    setProducts(updated);
    localStorage.setItem("sagora_products", JSON.stringify(updated));

    setProduct(emptyProduct);
    setEditingId(null);
  };

  /* ================= EDIT ================= */
  const editProduct = (p) => {
    setEditingId(p.id);
    setProduct({
      name: p.name,
      price: p.price,
      category: p.category,
      subCategory: p.subCategory || "",
      images: p.images?.length ? p.images : [""],
      rating: String(p.rating),
      stock: p.stock || "in",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ================= DELETE ================= */
  const deleteProduct = (id) => {
    if (!window.confirm("Delete product?")) return;

    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
    localStorage.setItem("sagora_products", JSON.stringify(updated));
  };

  /* ================= IMAGE ================= */
  const updateImage = (i, v) => {
    const imgs = [...product.images];
    imgs[i] = v;
    setProduct({ ...product, images: imgs });
  };

  const addImage = () =>
    setProduct({ ...product, images: [...product.images, ""] });

  /* ================= UI ================= */
  return (
    <div style={styles.page}>
      <h1>Admin Dashboard</h1>

      {/* ================= STATS ================= */}
      <div style={styles.stats}>
        <div style={styles.statCard}>
          <h3>{products.length}</h3>
          <p>Products</p>
        </div>

        <div style={styles.statCard}>
          <h3>{orders.length}</h3>
          <p>Total Orders</p>
        </div>

        <div style={styles.statCard}>
          <h3>{deliveredOrders}</h3>
          <p>Delivered</p>
        </div>

        <div style={styles.statCard}>
          <h3>₹{totalSales}</h3>
          <p>Total Sales</p>
        </div>
      </div>

      <button
        style={styles.ordersBtn}
        onClick={() => navigate("/admin/orders")}
      >
        📦 View Orders
      </button>

      {/* ================= GRID ================= */}
      <div style={styles.grid}>
        {/* ===== ADD / EDIT ===== */}
        <div style={styles.card}>
          <h3>{editingId ? "Edit Product" : "Add Product"}</h3>

          <input
            style={styles.input}
            placeholder="Product Name"
            value={product.name}
            onChange={(e) =>
              setProduct({ ...product, name: e.target.value })
            }
          />

          <input
            style={styles.input}
            type="number"
            placeholder="Price"
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
            <option value="">Category</option>
            <option value="electronics">Electronics</option>
            <option value="beauty">Beauty</option>
            <option value="books">Books</option>
            <option value="home-kitchen">Home & Kitchen</option>
            <option value="toys">Toys</option>
            <option value="fitness">Fitness</option>
          </select>

          <h4>Images</h4>
          {product.images.map((img, i) => (
            <input
              key={i}
              style={styles.input}
              placeholder={`Image ${i + 1}`}
              value={img}
              onChange={(e) => updateImage(i, e.target.value)}
            />
          ))}

          <button style={styles.linkBtn} onClick={addImage}>
            ➕ Add Image
          </button>

          <button style={styles.primaryBtn} onClick={saveProduct}>
            {editingId ? "Update Product" : "Save Product"}
          </button>
        </div>

        {/* ===== PRODUCTS ===== */}
        <div style={styles.card}>
          <h3>Products</h3>

          {products.map((p) => (
            <div key={p.id} style={styles.row}>
              <img
                src={p.images?.[0]}
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
                <button onClick={() => editProduct(p)}>Edit</button>
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
  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: 20,
    marginBottom: 30,
  },
  statCard: {
    background: "#fff",
    padding: 20,
    borderRadius: 14,
    textAlign: "center",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
  },
  ordersBtn: {
    marginBottom: 30,
    padding: "10px 16px",
    borderRadius: 10,
    border: "none",
    background: "#131921",
    color: "#fff",
    cursor: "pointer",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 30,
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
  meta: {
    fontSize: 13,
    opacity: 0.7,
  },
  actions: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
};
