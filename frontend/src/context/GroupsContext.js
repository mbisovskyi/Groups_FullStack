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
   * Sends a GET request to receive all groups from the database and uses setter to catch data in the state variable*/
  async function getAllGroups() {
    let response = await axios.get("http://127.0.0.1:8000/api/groups/", {
      headers: { Authorization: "Bearer " + token },
    });
    setAllGroups(response.data);
  }

  async function removeGroup(token, groupId) {
    let body = {
      is_deleted: true,
      is_active: false,
    };
    await axios.patch(`http://127.0.0.1:8000/api/groups/${groupId}`, body, {
      headers: { Authorization: "Bearer " + token },
    });
    window.location.reload();
  }

  async function getActiveGroups(token) {
    let response = await axios.get("http://127.0.0.1:8000/api/groups/active/", {
      headers: { Authorization: "Bearer " + token },
    });
    console.log(`From groups context: ${response.data.length} active groups`);
  }

  /**
   * Sends a PATCH request to update a single group property "is_active" with value being sent through parameters
   * @param {int} groupId - Group id to integrate in the url path.
   * @param {boolean} status - Boolean value to assign to a Group property "is_active".
   */
  async function toggleGroupStatus(groupId, status) {
    let body = {
      is_active: status,
    };
    await axios.patch(`http://127.0.0.1:8000/api/groups/${groupId}`, body, {
      headers: { Authorization: "Bearer " + token },
    });
  }

  async function updateGroupData(token, groupId, body) {
    await axios.patch(`http://127.0.0.1:8000/api/groups/${groupId}`, body, {
      headers: { Authorization: "Bearer " + token },
    });
  }

  const contextData = {
    allGroups,
    newGroup,
    getAllGroups,
    getActiveGroups,
    updateGroupData,
    removeGroup,
    toggleGroupStatus,
  };

  return (
    <GroupsContext.Provider value={contextData}>
      {children}
    </GroupsContext.Provider>
  );
};
