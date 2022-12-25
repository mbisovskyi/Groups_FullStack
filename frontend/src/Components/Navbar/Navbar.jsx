//Styles
import "./Navbar.css";
//Hooks
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="navbar-container">
      <div className="navbar">
        <span className="navbar-item" onClick={() => navigate("/")}>
          Home
        </span>
        <span className="navbar-item" onClick={() => navigate("/groups")}>
          Groups
        </span>
      </div>
    </header>
  );
};

export default Navbar;
