import { useContext } from "react";
import GroupsContext from "../context/GroupsContext";

const useGroups = () => {
  const {
    allGroups,
    activeGroups,
    newGroup,
    getAllGroups,
    getActiveGroups,
    patchGroupData,
    postNewReservation,
  } = useContext(GroupsContext);
  return {
    allGroups,
    activeGroups,
    newGroup,
    getAllGroups,
    getActiveGroups,
    patchGroupData,
    postNewReservation,
  };
};

export default useGroups;
