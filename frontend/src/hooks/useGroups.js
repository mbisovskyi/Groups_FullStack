import { useContext } from "react";
import GroupsContext from "../context/GroupsContext";

const useGroups = () => {
  const {
    allGroups,
    newGroup,
    getAllGroups,
    getActiveGroups,
    updateGroupData,
    removeGroup,
    toggleGroupStatus,
  } = useContext(GroupsContext);
  return {
    allGroups,
    newGroup,
    getAllGroups,
    getActiveGroups,
    updateGroupData,
    removeGroup,
    toggleGroupStatus,
  };
};

export default useGroups;
