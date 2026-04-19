import React, { useEffect, useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "./index.css";

const Layout = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/signin");
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <Link to="/" className="brand-wrap" style={{ textDecoration: "none" }}>
            <span className="brand-logo">🍳</span>
            <div>
              <h2 className="brand-name">Pantry Chef Master</h2>
              <p className="brand-text">
                Recipes based on what you already have
              </p>
            </div>
          </Link>

          <div className="topbar-auth">
            {user ? (
              <>
                <button
                  className="account-btn"
                  onClick={() => navigate("/account")}
                  title={user.name}
                >
                  {user.name ? user.name.charAt(0).toUpperCase() : "A"}
                </button>

                <button className="signin-btn" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/signin" className="signin-btn">
                  Sign in
                </Link>
                <Link to="/signup" className="signup-btn">
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="page-body">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;