//Styles
import "./ListGroups.css";
//Custom Hooks
import useAuth from "../../hooks/useAuth";
import useGroups from "../../hooks/useGroups";
//Hooks
import { useState, useEffect } from "react";

const ListGroups = () => {
  //Custom Hooks Variables
  const [user, token] = useAuth();
  const { allGroups } = useGroups(); // >>>>> All Groups are located here! <<<<<<<
  //State Variables

  return (
    <div className="listgroups-container">
      <h3>ListGroups component</h3>
    </div>
  );
};

export default ListGroups;
