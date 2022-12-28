import { useContext } from "react";
import GroupsContext from "../context/GroupsContext";

const useGroups = () => {
  const { groups, usersGroups, getGroupsData, getActiveGroups, removeGroup } =
    useContext(GroupsContext);
  return [groups, usersGroups, getGroupsData, getActiveGroups, removeGroup];
};

export default useGroups;
