//Styles
import "./Group.css";
//Hooks
import useAuth from "../../hooks/useAuth";
import { useState, useEffect } from "react";
//Utils
import axios from "axios";
//Components
import GroupRow from "../GroupRow/GroupRow";

const Group = ({ group }) => {
  const [user, token] = useAuth();
  const [toggleGroupStatusBtnText, setToggleGroupStatusBtnText] = useState("");
  const [groupStatusText, setGroupStatusText] = useState("");
  const [groupLength, setGroupLength] = useState(0);

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

  async function toggleGroupStatus() {
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
    <div className="group-container" style={{ marginTop: "1rem" }}>
      {group ? (
        <div>
          {user.is_owner ? (
            <div>
              <div>
                <p className="mb-1rem group-top-container">
                  {group.is_active ? (
                    <span className="status-green text-white inline-block">
                      {groupStatusText}
                    </span>
                  ) : (
                    <span className="status-red text-white inline-block">
                      {groupStatusText}
                    </span>
                  )}
                  <span className="group-date block">{group.date}</span>
                  <span className="inline-block">
                    {groupLength} / {group.max_rows}
                  </span>
                </p>
              </div>
              <div className="group-info-container">
                <h2>
                  {group.start_time} - {group.end_time}
                </h2>
                <div className="group-cotrollers">
                  <div className="left-controller">
                    <button
                      className="toggle-group-status"
                      onClick={toggleActiveGroupStatus}
                    >
                      {toggleGroupStatusBtnText}
                    </button>
                  </div>
                  <div className="right-controller">
                    <button onClick={removeGroup}>Remove</button>
                  </div>
                </div>
              </div>
              <GroupRow groupId={group.id} setGroupLength={setGroupLength} />
            </div>
          ) : (
            <div>
              {group.is_active ? (
                <div className="group-info-container">
                  <div>
                    <p className="mb-1rem group-top-container">
                      <span className="status-green text-white inline-block">
                        {groupStatusText}
                      </span>
                      <span className="group-date block">{group.date}</span>
                      <span className="inline-block">
                        {groupLength} / {group.max_rows}
                      </span>
                    </p>
                  </div>
                  <h2>
                    {group.start_time} - {group.end_time}
                  </h2>
                </div>
              ) : (
                <p>No groups found!</p>
              )}
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Group;
