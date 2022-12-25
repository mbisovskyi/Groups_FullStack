import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navbar-container">
      {user ? (
        <div className="navbar-items-container">
          <button className="navbar-item" onClick={() => navigate("/")}>
            Home
          </button>
          <button className="navbar-item" onClick={() => navigate("/groups")}>
            Groups
          </button>
        </div>
      ) : null}
      <div className="login-reg-btns-container">
        {user ? (
          <button onClick={logoutUser}>Logout</button>
        ) : (
          <div style={{ display: "flex" }}>
            <button onClick={() => navigate("/login")}>Login</button>
            <button onClick={() => navigate("/register")}>Register</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
