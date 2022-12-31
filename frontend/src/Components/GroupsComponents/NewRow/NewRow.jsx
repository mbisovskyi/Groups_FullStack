//Styles
import "./NewRow.css";
//Hooks
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
//Utills
import axios from "axios";

const NewRow = ({ groupId }) => {
  const [user, token] = useAuth();
  const [phoneNum, setPhoneNum] = useState(" ");

  async function handleClick() {
    let newRow = {
      first_name: user.first_name,
      last_name: user.last_name,
      phone: phoneNum,
    };
    await axios.post(
      `http://127.0.0.1:8000/api/rows/${groupId}/users/${user.id}/`,
      newRow,
      { headers: { Authorization: "Bearer " + token } }
    );
    window.location.reload();
  }

  return (
    <div className="newrow-container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        name="add user form container"
      >
        <label value={phoneNum}>Your phone number: </label>
        <input
          style={{ width: "20%", margin: "0 1rem" }}
          onChange={(event) => setPhoneNum(event.target.value)}
        />
        <button onClick={handleClick}>Make Reservation</button>
      </div>
    </div>
  );
};

export default NewRow;
