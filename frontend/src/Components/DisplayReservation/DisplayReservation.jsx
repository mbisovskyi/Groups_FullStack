//Styles
import "./DisplayReservation.css";

const DisplayReservation = ({ reservation }) => {
  return (
    <div className="displayreservation-container">
      <p style={{ textAlign: "center" }}>
        {reservation.first_name} {reservation.last_name} - {reservation.phone}
      </p>
      <div className="products-reservation-container">
        <p>Lambs: {reservation.lambs_quantity} </p>
        <p>Pigs: {reservation.pigs_quantity}</p>
        <p>Bread: {reservation.bread_quantity}</p>
      </div>
    </div>
  );
};

export default DisplayReservation;
