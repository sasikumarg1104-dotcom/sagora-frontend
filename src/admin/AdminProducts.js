import { useState } from "react";

function AdminProducts() {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("admin_products")) || []
  );

  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
  });

  const saveProduct = () => {
    if (!form.name || !form.price) return;

    const newProduct = {
      ...form,
      id: Date.now(),
      price: Number(form.price),
      stock: Number(form.stock),
    };

    const updated = [...products, newProduct];
    setProducts(updated);
    localStorage.setItem("admin_products", JSON.stringify(updated));

    setForm({ name: "", price: "", stock: "", category: "" });
  };

  const deleteProduct = (id) => {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
    localStorage.setItem("admin_products", JSON.stringify(updated));
  };

  return (
    <div>
      <h2>Products</h2>

      <div style={styles.form}>
        <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Price" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
        <input placeholder="Stock" value={form.stock} onChange={(e) => setForm({ ...form, stock: e.target.value })} />
        <input placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
        <button className="btn-primary" onClick={saveProduct}>Add Product</button>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>₹ Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>{p.stock}</td>
              <td>
                <button style={styles.delete} onClick={() => deleteProduct(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminProducts;

const styles = {
  form: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "10px",
    marginBottom: "20px",
  },
  table: {
    width: "100%",
    background: "#fff",
    borderCollapse: "collapse",
  },
  delete: {
    background: "red",
    color: "#fff",
    border: "none",
    padding: "6px 10px",
    borderRadius: "6px",
  },
};
