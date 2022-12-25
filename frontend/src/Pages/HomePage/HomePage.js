//Styles
import "./HomePage.css";
//Hooks
import useAuth from "../../hooks/useAuth";

const HomePage = () => {
  const [user, token] = useAuth();

  return <div className="homepage-container">HomePage</div>;
};

export default HomePage;
