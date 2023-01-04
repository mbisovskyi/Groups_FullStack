//Styles
import "./Group.css";
//Utils
import axios from "axios";
//Custom Hooks
import useAuth from "../../hooks/useAuth";
//Components
import GroupController from "../GroupController/GroupController";
import AddReservation from "../AddReservation/AddReservation";
import ListReservations from "../ListReservations/ListReservations";
import { useState, useEffect } from "react";

const Group = ({ data }) => {
  //Custom Hooks Variables
  const [user, token] = useAuth();
  //State Variables
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    getGroupReservations();
  }, []);

  //Sends a GET request to get all the reservations belong to its group and catches it in the state variable "reservations".
  async function getGroupReservations() {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/rows/${data.group.id}/`,
      { headers: { Authorization: "Bearer " + token } }
    );
    setReservations(response.data);
  }

  return (
    <div className="group-container">
      <header>
        <p id="group-date">
          <span id="group-number">{data.index + 1}.</span>
          {data.group.date}
        </p>
      </header>
      <section name="Group Top Info Section">
        <div className="group-status-container">
          {data.group.is_active ? (
            <span style={{ color: "green" }}>Opened</span>
          ) : (
            <span style={{ color: "red" }}>Closed</span>
          )}
        </div>
        <div className="group-time-container">
          <span>
            {data.group.start_time} - {data.group.end_time}
          </span>
        </div>
        <div className="peaces-counter-container">
          <span>
            {data.group.current_value} / {data.group.max_value}
          </span>
        </div>
        {user.is_owner ? <GroupController data={data} /> : null}
      </section>
      <main name="Group Data Section">
        {!user.is_owner ? <AddReservation data={data} /> : null}
        {user.is_owner ? (
          <ListReservations reservations={reservations} />
        ) : (
          <ListReservations />
        )}
      </main>
      <footer name="Group Footer">Footer</footer>
    </div>
  );
};

export default Group;
