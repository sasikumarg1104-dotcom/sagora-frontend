import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!email || !password) {
      alert("Fill all fields");
      return;
    }

    /* ===== ADMIN LOGIN (HIDDEN LOGIC) ===== */
    if (email === "admin@sagora.in" && password === "admin123") {
      const adminUser = { email, role: "admin" };
      localStorage.setItem("sagora_user", JSON.stringify(adminUser));
      setUser(adminUser);
      navigate("/");
      return;
    }

    if (isSignup) {
      const newUser = { email, password, role: "user" };
      localStorage.setItem("sagora_user", JSON.stringify(newUser));
      alert("Account created successfully!");
      setIsSignup(false);
    } else {
      const saved = JSON.parse(localStorage.getItem("sagora_user"));
      if (saved?.email === email && saved?.password === password) {
        setUser(saved);
        navigate("/");
      } else {
        alert("Invalid credentials");
      }
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2>{isSignup ? "Create Account" : "Login"}</h2>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button className="btn-primary" onClick={handleSubmit}>
          {isSignup ? "Create Account" : "Login"}
        </button>

        <p
          style={styles.toggle}
          onClick={() => setIsSignup(!isSignup)}
        >
          {isSignup ? "Already have an account? Login" : "Create new account"}
        </p>
      </div>
    </div>
  );
}

export default Login;

const styles = {
  page: {
    minHeight: "calc(100vh - 64px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "340px",
    padding: "30px",
    background: "#fff",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "10px",
    border: "1px solid #ccc",
  },
  toggle: {
    marginTop: "14px",
    cursor: "pointer",
    color: "#007185",
  },
};
