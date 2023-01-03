import { useContext } from "react";
import GroupsContext from "../context/GroupsContext";

const useGroups = () => {
  const { allGroups, newGroup, getAllGroups, getActiveGroups, patchGroupData } =
    useContext(GroupsContext);
  return {
    allGroups,
    newGroup,
    getAllGroups,
    getActiveGroups,
    patchGroupData,
  };
};

export default useGroups;
