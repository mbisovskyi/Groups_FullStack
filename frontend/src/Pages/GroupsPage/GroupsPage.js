//Styles
import "./GroupsPage.css";
//Components
import Group from "../../components/Group/Group";
import CreateGroup from "../../components/CreateGroup/CreateGroup";
import AllGroups from "../../components/AllGroups/AllGroups";
import TodayGroups from "../../components/TodayGroups/TodayGroups";
//Hooks
import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
//Utils
import axios from "axios";

const GroupsPage = () => {
  const [user, token] = useAuth();
  const [groupsData, setGroupsData] = useState([]);
  const [currentDateGroups, setCurrentDateGroups] = useState([]);
  const [currentDate] = useState(getCurrentDate());

  useEffect(() => {
    //>>>>>>>>>>>>>>>> Section to run all functions to fill out all state variables <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    const fetchData = async () => {
      let response = await axios.get("http://127.0.0.1:8000/api/groups/", {
        headers: { Authorization: "Bearer " + token },
      });

      //>>>>>>>>>> Setting up all state variables <<<<<<<<<<<<<<<<<<<<<<<
      setGroupsData(response.data);
      getCurrentDate();
      setCurrentDateGroups(
        response.data.filter((group) => {
          return group.date === currentDate;
        })
      );
    };

    // >>>>> Run fetching data function <<<<
    fetchData();
  }, []);

  /** Gets and formatting a current date. Returns stringify */
  function getCurrentDate() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    month += 1;
    let day = date.getDate();
    let formattedDay = "";
    day < 10 ? (formattedDay = `0${day}`) : (formattedDay = day);
    let formattedDate = `${year}-${month}-${formattedDay}`;
    return formattedDate;
  }

  return (
    <div className="groupspage-container">
      {user.is_owner ? (
        <AllGroups groupsData={groupsData} />
      ) : (
        <TodayGroups groupsData={currentDateGroups} />
      )}
    </div>
  );
};

export default GroupsPage;
