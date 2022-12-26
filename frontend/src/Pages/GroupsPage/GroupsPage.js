//Styles
import "./GroupsPage.css";
//Components
import Group from "../../components/Group/Group";
import CreateGroup from "../../components/CreateGroup/CreateGroup";
import FindGroup from "../../components/FindGroup/FindGroup";
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
    const fetchGroupsData = async () => {
      let response = await axios.get("http://127.0.0.1:8000/api/groups/", {
        headers: { Authorization: "Bearer " + token },
      });
      setGroupsData(response.data);
      getCurrentDate();
      setCurrentDateGroups(
        response.data.filter((group) => {
          return group.date === currentDate;
        })
      );
    };
    fetchGroupsData();
  }, []);

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
        <div>
          <CreateGroup />
          {groupsData.length !== 0 ? (
            groupsData.map((group, index) => {
              return (
                <Group key={index} group={group} groupNumber={index + 1} />
              );
            })
          ) : (
            <p>No active groups</p>
          )}
        </div>
      ) : (
        <div>
          {currentDateGroups.map((group, index) => {
            return <Group key={index} group={group} groupNumber={index + 1} />;
          })}
        </div>
      )}
    </div>
  );
};

export default GroupsPage;
