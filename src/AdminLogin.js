import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const login = () => {
    if (password === "admin123") {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin");
    } else {
      alert("Wrong admin password");
    }
  };

  return (
    <div style={styles.box}>
      <h2>Admin Login</h2>

      <input
        type="password"
        placeholder="Admin Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />

      <button className="btn-primary" onClick={login}>
        Login
      </button>
    </div>
  );
}

export default AdminLogin;

const styles = {
  box: {
    maxWidth: "360px",
    margin: "80px auto",
    padding: "30px",
    background: "#fff",
    borderRadius: "14px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "14px",
    borderRadius: "10px",
    border: "1px solid #ccc",
  },
};
