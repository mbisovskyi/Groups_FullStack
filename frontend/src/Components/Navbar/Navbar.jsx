import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <p className="logo">
          Balkan
          <span className="logo-second-word">Market</span>
        </p>
      </div>
      {user ? (
        <div style={{ fontSize: "1.2rem", color: "#004d73" }}>
          Welcome
          <span id="username">{user.username}</span>
        </div>
      ) : null}
      {user ? (
        <div className="navbar-items-container">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/reservations")}>
            Reservations
          </button>
          <button onClick={logoutUser}>Logout</button>
        </div>
      ) : (
        <div className="log-ger-btns-container">
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/register")}>Register</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
