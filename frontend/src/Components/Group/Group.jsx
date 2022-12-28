//Styles
import "./Group.css";
//Hooks
import useAuth from "../../hooks/useAuth";
import { useState, useEffect } from "react";
//Utils
import axios from "axios";
//Components
import GroupRow from "../GroupRow/GroupRow";

const Group = ({ group, groupNumber, setFoundGroupsError }) => {
  const [user, token] = useAuth();
  const [toggleGroupStatusBtnText, setToggleGroupStatusBtnText] = useState("");
  const [groupStatusText, setGroupStatusText] = useState("");

  useEffect(() => {
    checkActiveGroupStatus();
  }, []);

  async function removeGroup() {
    let body = {
      is_deleted: true,
      is_active: false,
    };
    await axios.patch(`http://127.0.0.1:8000/api/groups/${group.id}`, body, {
      headers: { Authorization: "Bearer " + token },
    });
    window.location.reload();
  }

  async function toggleActiveGroupStatus() {
    let activeBool = group.is_active;
    if (activeBool === true) {
      activeBool = false;
      setToggleGroupStatusBtnText("Activate");
    } else {
      activeBool = true;
      setToggleGroupStatusBtnText("Deactivate");
    }
    let body = {
      is_active: activeBool,
    };
    await axios.patch(`http://127.0.0.1:8000/api/groups/${group.id}`, body, {
      headers: { Authorization: "Bearer " + token },
    });
    window.location.reload();
  }

  function checkActiveGroupStatus() {
    if (group.is_active) {
      setGroupStatusText("Active");
      setToggleGroupStatusBtnText("Deactivate");
    } else {
      setGroupStatusText("Closed");
      setToggleGroupStatusBtnText("Activate");
    }
  }

  return (
    <div className="group-container">
      {group ? (
        <div>
          {user.is_owner ? (
            <div>
              <p>{groupStatusText}</p>
              <span>Scheduled on {group.date}</span>
              <h2>
                {groupNumber}. {group.start_time} - {group.end_time}
              </h2>
              <span>Group limit is {group.max_rows}</span>
              <button onClick={removeGroup}>Remove</button>
              <button
                className="toggle-group-status"
                onClick={toggleActiveGroupStatus}
              >
                {toggleGroupStatusBtnText}
              </button>
            </div>
          ) : (
            <div>
              {group.is_active ? (
                <div>
                  <p>{groupStatusText}</p>
                  <span>Scheduled on {group.date}</span>
                  <h2>
                    {groupNumber}. {group.start_time} - {group.end_time}
                  </h2>
                  <span>Group limit is {group.max_rows}</span>
                </div>
              ) : (
                <p>No groups found!</p>
              )}
            </div>
          )}
          <GroupRow groupId={group.id} />
        </div>
      ) : null}
    </div>
  );
};

export default Group;
