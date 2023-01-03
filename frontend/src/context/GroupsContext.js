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

  /**
   * Sends a PATCH request to update a group data with an object { } passed in through parameters
   * @param {int} groupId - Group id to integrate in the url path.
   * @param {{}} object - object { } - type of Group
   * @note PATCH request allows to update just a single property
   */
  async function patchGroupData(groupId, object) {
    await axios.patch(`http://127.0.0.1:8000/api/groups/${groupId}`, object, {
      headers: { Authorization: "Bearer " + token },
    });
  }

  const contextData = {
    allGroups,
    newGroup,
    getAllGroups,
    getActiveGroups,
    patchGroupData,
  };

  return (
    <GroupsContext.Provider value={contextData}>
      {children}
    </GroupsContext.Provider>
  );
};
