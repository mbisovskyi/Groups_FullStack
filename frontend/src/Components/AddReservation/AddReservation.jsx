//Styling
import "./AddReservation.css";
//Custom Hooks
import useGroups from "../../hooks/useGroups";
//Hooks
import { useState } from "react";
//Utils
import formatString from "../../utils/formatString";

const AddReservation = ({ data }) => {
  //Custom Hooks Variables
  const { postNewReservation } = useGroups();
  //State Variables
  const [phoneNum, setPhoneNum] = useState("");
  const [lambQuantity, setLambQuantity] = useState(0);
  const [pigsQuantity, setPigsQuantity] = useState(0);
  const [breadQuantity, setBreadQuantity] = useState(0);

  // Sends a POST request to add a new reservation to the database
  function handleMakeReservationClick() {
    if (lambQuantity === 0 && pigsQuantity === 0 && breadQuantity === 0) {
      alert(
        "List of products is empty. To make reservation - please add product!"
      );
    } else {
      let thisPhoneNum = formatString.formatOfCellPhoneNumber(phoneNum);
      postNewReservation(
        data.group.id,
        thisPhoneNum,
        lambQuantity,
        pigsQuantity,
        breadQuantity
      );
      window.location.reload();
    }
  }

  return (
    <div className="addreservation-container">
      <div className="flex-center-evenly">
        <label value={phoneNum}>Phone: </label>
        <input
          required
          type="text"
          onChange={(event) => setPhoneNum(event.target.value)}
        />
      </div>
      <div className="flex-center-evenly">
        <label value={lambQuantity}>Lambs: </label>
        <select onChange={(event) => setLambQuantity(event.target.value)}>
          <option value={0}>None</option>
          <option value={0.5}>1/2</option>
          <option value={1}>1</option>
          <option value={1.5}>1 1/2</option>
          <option value={2}>2</option>
        </select>
      </div>
      <div className="flex-center-evenly" style={{ width: "10%" }}>
        <label value={pigsQuantity}>Pigs: </label>
        <input
          type="number"
          max={2}
          min={0}
          onChange={(event) => setPigsQuantity(event.target.value)}
        />
      </div>
      <div className="flex-center-evenly" style={{ width: "12%" }}>
        <label value={breadQuantity}>Bread: </label>
        <input
          type="number"
          min={0}
          onChange={(event) => setBreadQuantity(event.target.value)}
        />
      </div>
      <button id="make-reservation-btn" onClick={handleMakeReservationClick}>
        Make reservation
      </button>
    </div>
  );
};

export default AddReservation;
