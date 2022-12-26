//Styles
import "./GroupsPage.css";
//Components
import Group from "../../components/Group/Group";
import CreateGroup from "../../components/CreateGroup/CreateGroup";
//Hooks
import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
//Utils
import axios from "axios";

const GroupsPage = () => {
  const [user, token] = useAuth();
  const [groupsData, setGroupsData] = useState([]);

  useEffect(() => {
    const fetchGroupsData = async () => {
      let response = await axios.get("http://127.0.0.1:8000/api/groups/", {
        headers: { Authorization: "Bearer " + token },
      });
      setGroupsData(response.data);
    };
    fetchGroupsData();
  }, []);

  return (
    <div className="groupspage-container">
      {user.is_owner ? <CreateGroup /> : null}
      {groupsData
        ? groupsData.map((group, index) => {
            return <Group key={index} group={group} groupNumber={index + 1} />;
          })
        : null}
    </div>
  );
};

export default GroupsPage;
