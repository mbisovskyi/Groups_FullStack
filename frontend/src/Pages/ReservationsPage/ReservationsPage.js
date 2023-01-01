//Styling
import "./ReservationsPage.css";
//Components
import NewGroup from "../../components/NewGroup/NewGroup";
//Hooks
import useAuth from "../../hooks/useAuth";

const ReservationsPage = () => {
  //Custom Hooks
  const [user, token] = useAuth();

  return (
    <div className="reservationspage-container">
      <h2>Reservations Page</h2>
      {user.is_owner ? <NewGroup /> : null}
    </div>
  );
};

export default ReservationsPage;
