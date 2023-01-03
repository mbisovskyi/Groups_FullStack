//Styling
import "./ReservationsPage.css";
//Components
import NewGroup from "../../components/NewGroup/NewGroup";
import ListGroups from "../../components/ListGroups/ListGroups";
//Hooks
import useAuth from "../../hooks/useAuth";

const ReservationsPage = () => {
  //Custom Hooks
  const [user, token] = useAuth();

  return (
    <div className="reservationspage-container">
      {user.is_owner ? <NewGroup /> : null}
      <ListGroups />
    </div>
  );
};

export default ReservationsPage;
