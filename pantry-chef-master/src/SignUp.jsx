import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

const API_URL =
  process.env.REACT_APP_API_URL || "https://pantry-chef-api.onrender.com";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const isJson = res.headers.get("content-type")?.includes("application/json");
      const data = isJson ? await res.json() : null;

      if (!res.ok) {
        setError(data?.message || "Signup failed");
        return;
      }

      alert("Signup successful!");
      navigate("/signin");
    } catch (err) {
      setError("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
  <section className="auth-page">
  <div className="auth-card">
    <h1 className="auth-title">Create account</h1>
    <p className="auth-subtitle">Start saving and discovering recipes</p>

    <form className="auth-form" onSubmit={handleSubmit}>
      <label className="auth-label">Full name</label>
      <input
        type="text"
        name="name"
        className="auth-input"
        placeholder="Enter your name"
        value={formData.ne}
        onChange={handleChange}
        required
      />

      <label className="auth-label">Email</label>
      <input
        type="email"
        name="email"
        className="auth-input"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label className="auth-label">Password</label>
      <input
        type="password"
        name="password"
        className="auth-input"
        placeholder="Create a password"
        value={formData.password}
        onChange={handleChange}
        required
      />

          {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

          <button type="submit" className="auth-primary-btn" disabled={loading}>
            {loading ? "Signing up..." : "Sign up"}
          </button>
        </form>

        <p className="auth-switch-text">
          Already have an account?{" "}
          <Link to="/signin" className="auth-link">
            Sign in
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;