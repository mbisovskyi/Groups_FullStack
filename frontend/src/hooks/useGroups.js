import { useContext } from "react";
import GroupsContext from "../context/GroupsContext";

const useGroups = () => {
  const {
    groups,
    usersGroups,
    newGroup,
    getGroupsData,
    getActiveGroups,
    updateGroupData,
    removeGroup,
    toggleGroupStatus,
  } = useContext(GroupsContext);
  return {
    groups,
    usersGroups,
    newGroup,
    getGroupsData,
    getActiveGroups,
    updateGroupData,
    removeGroup,
    toggleGroupStatus,
  };
};

export default useGroups;
