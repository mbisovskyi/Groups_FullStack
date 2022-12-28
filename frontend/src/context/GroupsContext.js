import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import dateMethods from "../utils/dateMethods";

const GroupsContext = createContext();

export default GroupsContext;

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [usersGroups, setUsersGroups] = useState([]);

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

  const contextData = {
    groups,
    usersGroups,
    getGroupsData,
    getActiveGroups,
    removeGroup,
  };

  return (
    <GroupsContext.Provider value={contextData}>
      {children}
    </GroupsContext.Provider>
  );
};
