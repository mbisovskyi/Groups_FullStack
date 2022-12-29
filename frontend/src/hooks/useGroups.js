import { useContext } from "react";
import GroupsContext from "../context/GroupsContext";

const useGroups = () => {
  const {
    groups,
    usersGroups,
    getGroupsData,
    getActiveGroups,
    removeGroup,
    toggleGroupStatus,
  } = useContext(GroupsContext);
  return {
    groups,
    usersGroups,
    getGroupsData,
    getActiveGroups,
    removeGroup,
    toggleGroupStatus,
  };
};

export default useGroups;
