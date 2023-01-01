import { createContext } from "react";
import { useState } from "react";
import axios from "axios";

const GroupsContext = createContext();

export default GroupsContext;

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [usersGroups, setUsersGroups] = useState([]);

  /**
   * Sends a POST request to add a new group to the database
   * @param body - object with key/value pairs
   * @param token - user token*/
  async function newGroup(body, token) {
    await axios.post(`http://127.0.0.1:8000/api/groups/`, body, {
      headers: { Authorization: "Bearer " + token },
    });
  }

  async function getGroupsData(token) {
    let response = await axios.get("http://127.0.0.1:8000/api/groups/", {
      headers: { Authorization: "Bearer " + token },
    });
    setGroups(response.data);
    console.log(`From groups context: ${response.data.length} groups`);
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
    setUsersGroups(response.data);
    console.log(`From groups context: ${response.data.length} active groups`);
  }

  async function toggleGroupStatus(token, group, body) {
    await axios.patch(`http://127.0.0.1:8000/api/groups/${group.id}`, body, {
      headers: { Authorization: "Bearer " + token },
    });
    window.location.reload();
  }

  async function updateGroupData(token, groupId, body) {
    await axios.patch(`http://127.0.0.1:8000/api/groups/${groupId}`, body, {
      headers: { Authorization: "Bearer " + token },
    });
  }

  const contextData = {
    groups,
    usersGroups,
    newGroup,
    getGroupsData,
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
