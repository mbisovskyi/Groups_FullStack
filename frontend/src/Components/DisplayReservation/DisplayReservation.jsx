//Styles
import "./DisplayReservation.css";
//Custom Hooks
import useAuth from "../../hooks/useAuth";
//Utils
import axios from "axios";

const DisplayReservation = ({ reservation }) => {
  //Custom Hooks Variables
  const [user, token] = useAuth();

  //Sends DELETE request to remove a reservation from the database!
  async function handleReservationRemoval() {
    await axios.delete(
      `http://127.0.0.1:8000/api/rows/delete_row/${reservation.id}/`,
      { headers: { Authorization: "Bearer " + token } }
    );
    window.location.reload();
  }

  return (
    <div className="displayreservation-container">
      <div className="reservation-top-info-container">
        <p style={{ textAlign: "center" }}>
          {reservation.first_name} {reservation.last_name} - {reservation.phone}
        </p>
        {reservation.user_id === user.id ? (
          <div className="reservation-controllers">
            <svg
              height="20px"
              width="20px"
              version="1.1"
              id="reservation-update-btn"
              viewBox="0 0 32 32"
              fill="rgba(0, 77, 115, 1)"
            >
              <g>
                <g id="spin">
                  <g>
                    <path
                      d="M25.883,6.086l-2.82,2.832C24.953,10.809,26,13.324,26,16c0,5.516-4.484,10-10,10v-2l-4,4l4,4v-2
               c7.719,0,14-6.281,14-14C30,12.254,28.539,8.734,25.883,6.086z"
                    />
                    <path
                      d="M20,4l-4-4v2C8.281,2,2,8.281,2,16c0,3.746,1.461,7.266,4.117,9.914l2.82-2.832
               C7.047,21.191,6,18.676,6,16c0-5.516,4.484-10,10-10v2L20,4z"
                    />
                  </g>
                </g>
              </g>
            </svg>
            <button
              id="removeReservationBtn"
              onClick={handleReservationRemoval}
            >
              X
            </button>
          </div>
        ) : null}
      </div>

      <div className="products-reservation-container">
        <p>Lambs: {reservation.lambs_quantity} </p>
        <p>Pigs: {reservation.pigs_quantity}</p>
        <p>Bread: {reservation.bread_quantity}</p>
      </div>
    </div>
  );
};

export default DisplayReservation;
