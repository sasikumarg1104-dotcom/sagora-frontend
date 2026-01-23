import { useState } from "react";

function Admin({ setProducts }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const add = () => {
    setProducts((p) => [
      ...p,
      { id: Date.now(), name, price, rating: 4, category: "electronics" },
    ]);
  };

  return (
    <div style={{ padding: 40 }}>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
      <button onClick={add}>Add Product</button>
    </div>
  );
}

export default Admin;
