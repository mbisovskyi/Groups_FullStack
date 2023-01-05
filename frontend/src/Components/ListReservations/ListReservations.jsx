//Styling
import "./ListReservations.css";
//Components
import DisplayReservation from "../DisplayReservation/DisplayReservation";

const ListReservations = ({ reservations }) => {
  return (
    <div className="listreservations-container">
      {reservations.map((reservation, index) => {
        return (
          <div key={index}>
            {<DisplayReservation reservation={reservation} />}
          </div>
        );
      })}
    </div>
  );
};

export default ListReservations;
