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
  const [userReservations, setUserReservations] = useState([]);
  const [groupTime, setGroupTime] = useState("");

  useEffect(() => {
    getGroupReservations();
    getUserReservations();
    setGroupTime(civilGroupTime(data.group.start_time, data.group.end_time));
  }, []);

  //Sends a GET request to get all the reservations belong to its group and catches it in the state variable "reservations".
  async function getGroupReservations() {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/rows/${data.group.id}/`,
      { headers: { Authorization: "Bearer " + token } }
    );
    setReservations(response.data);
  }

  //Sends GET request to get all user's reservations belong to its group and catches it it the state cariable "userReservations".
  async function getUserReservations() {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/rows/${data.group.id}/users/${user.id}/`,
      { headers: { Authorization: "Bearer " + token } }
    );
    setUserReservations(response.data);
  }

  /**
   *Takes Start Time and End Time strings to combine them and return a Civil Time string
   * @param {string} startTime - string value of a time;
   * @param {string} endTime - string value of a time;
   * @returns {string} Formatted time string from 24 Hours Time to Civil Time.
   */
  function civilGroupTime(startTime, endTime) {
    let [startHours, startMinutes] = startTime.split(":");
    let [endHours, endMinutes] = endTime.split(":");
    let startTimeExtension = " am";
    let endTimeExtension = " am";

    //Parsing to Integer to be able to compare to a number
    startHours = parseInt(startHours);
    endHours = parseInt(endHours);

    //Conditional statement: if Hour is after noon - assigns extension "pm" and decrements 12 hours.
    if (startHours > 12) {
      startHours -= 12;
      startTimeExtension = " pm";
    }
    if (endHours > 12) {
      endHours -= 12;
      endTimeExtension = " pm";
    }

    //Interpolating values into a string and returning it from a function
    let formattedTimeString = `${startHours}:${startMinutes}${startTimeExtension} - ${endHours}:${endMinutes}${endTimeExtension}`;
    return formattedTimeString;
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
          <span>{groupTime}</span>
        </div>
        <div className="peaces-counter-container">
          <span>
            {data.group.current_value} / {data.group.max_value}
          </span>
        </div>
        {user.is_owner ? <GroupController data={data} /> : null}
      </section>
      <main name="Group Data Section">
        {!user.is_owner ? (
          <div>
            <AddReservation data={data} />
            <ListReservations reservations={userReservations} />
          </div>
        ) : (
          <ListReservations reservations={reservations} />
        )}
      </main>
      {user.is_owner ? <footer name="Group Footer">Footer</footer> : null}
    </div>
  );
};

export default Group;
