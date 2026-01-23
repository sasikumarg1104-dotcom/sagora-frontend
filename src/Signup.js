import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const signup = () => {
    if (!email) return alert("Enter email");
    localStorage.setItem("sagora_user", email);
    navigate("/");
  };

  return (
    <div className="page">
      <h2>Sign Up</h2>

      <input
        className="input"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className="btn-primary" onClick={signup}>
        Create Account
      </button>
    </div>
  );
}

export default Signup;
