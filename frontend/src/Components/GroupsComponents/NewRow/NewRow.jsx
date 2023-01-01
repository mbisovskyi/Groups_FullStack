//Styles
import "./NewRow.css";
//Hooks
import useAuth from "../../../hooks/useAuth";
import { useState, useEffect } from "react";
import useGroups from "../../../hooks/useGroups";
//Utills
import axios from "axios";

const NewRow = ({ group }) => {
  const [user, token] = useAuth();
  const { updateGroupData } = useGroups();
  const [phoneNum, setPhoneNum] = useState(null);
  const [lambQuantity, setLambQuantity] = useState(0);
  const [pigsQuantity, setPigsQuantity] = useState(0);
  const [breadQuantity, setBreadQuantity] = useState(0);

  useEffect(() => {}, []);

  async function handleClick(e) {
    let newRow = {
      first_name: user.first_name,
      last_name: user.last_name,
      phone: phoneNum,
      lambs_quantity: lambQuantity,
      pigs_quantity: pigsQuantity,
      bread_quantity: breadQuantity,
    };
    await axios.post(
      `http://127.0.0.1:8000/api/rows/${group.id}/users/${user.id}/`,
      newRow,
      { headers: { Authorization: "Bearer " + token } }
    );

    let newCurrentValue = {
      current_value:
        parseFloat(group.current_value) +
        parseFloat(lambQuantity) +
        parseFloat(pigsQuantity),
    };
    updateGroupData(token, group.id, newCurrentValue);
  }

  return (
    <div className="newrow-container">
      <form
        onSubmit={handleClick}
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
        name="add user form container"
      >
        <div>
          <label value={phoneNum}>Phone: </label>
          <input
            required
            style={{ width: "60%", margin: "0 1rem" }}
            onChange={(event) => setPhoneNum(event.target.value)}
          />
        </div>
        <div style={{ width: "10%", margin: "0 1rem" }}>
          <label value={lambQuantity}>Lamb: </label>
          <select onChange={(event) => setLambQuantity(event.target.value)}>
            <option value={0}>None</option>
            <option value={0.5}>0.5</option>
            <option value={1}>1</option>
            <option value={1.5}>1.5</option>
            <option value={2}>2</option>
          </select>
        </div>
        <div>
          <label value={pigsQuantity}>Pigs: </label>
          <input
            onLoadStart={0}
            style={{ width: "30%" }}
            type="number"
            onChange={(event) => setPigsQuantity(event.target.value)}
          ></input>
        </div>
        <div>
          <label value={breadQuantity}>Bread: </label>
          <input
            style={{ width: "30%" }}
            type="number"
            onChange={(event) => setBreadQuantity(event.target.value)}
          ></input>
        </div>
        <button type="submit">Order</button>
      </form>
    </div>
  );
};

export default NewRow;
