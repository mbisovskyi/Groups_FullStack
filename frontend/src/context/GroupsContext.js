import { createContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";

const GroupsContext = createContext();

export default GroupsContext;

export const GroupsProvider = ({ children }) => {
  //State variables
  const [user, token] = useAuth();
  const [allGroups, setAllGroups] = useState([]);

  //Fetch data after each render of the application
  useEffect(() => {
    getAllGroups();
  }, []);

  /**
   * Sends a POST request to add a new group to the database
   * @param {{}} body - object with key/value pairs
   * @param {string} token - user token*/
  async function newGroup(body, token) {
    await axios.post(`http://127.0.0.1:8000/api/groups/`, body, {
      headers: { Authorization: "Bearer " + token },
    });
  }

  
  /**
   * Sends a GET request to receive all groups from the database.
   * @returns Promise
   * @note using a setter (setAllGroups) to catch data in the state variable (allGroups).
   * */
  async function getAllGroups() {
    let response = await axios.get("http://127.0.0.1:8000/api/groups/", {
      headers: { Authorization: "Bearer " + token },
    });
    setAllGroups(response.data);
  }

  async function getActiveGroups(token) {
    let response = await axios.get("http://127.0.0.1:8000/api/groups/active/", {
      headers: { Authorization: "Bearer " + token },
    });
    console.log(`From groups context: ${response.data.length} active groups`);
  }

  /**Sends a PATCH request to update a group data with an object { } passed in through parameters
   * @param {int} groupId - Group id to integrate in the url path.
   * @param {{}} object - object { } - type of Group
   * @note PATCH request allows to update just a single property
   */
  async function patchGroupData(groupId, object) {
    await axios.patch(`http://127.0.0.1:8000/api/groups/${groupId}`, object, {
      headers: { Authorization: "Bearer " + token },
    });
  }


  /** Sends a POST request to add a new reservation with values passed in through parameters.
   * @param {int} groupId - Group id to integrate in the url path.
   * @param {string} phone - Phone number.
   * @param {decimal} lambs - Quantity of lambs (default 0).
   * @param {int} pigs - Quantity of pigs (default 0).
   * @param {int} bread - Quantity of bread (default 0).
   */
  async function postNewReservation(
    groupId,
    phone,
    lambs = 0,
    pigs = 0,
    bread = 0
  ) {
    let object = {
      first_name: user.first_name,
      last_name: user.last_name,
      phone: phone,
      bread_quantity: bread,
      lambs_quantity: lambs,
      pigs_quantity: pigs,
    };
    await axios.post(
      `http://127.0.0.1:8000/api/rows/${groupId}/users/${user.id}/`,
      object,
      {
        headers: { Authorization: "Bearer " + token },
      }
    );
  }

  const contextData = {
    allGroups,
    newGroup,
    getAllGroups,
    getActiveGroups,
    patchGroupData,
    postNewReservation,
  };

  return (
    <GroupsContext.Provider value={contextData}>
      {children}
    </GroupsContext.Provider>
  );
};
