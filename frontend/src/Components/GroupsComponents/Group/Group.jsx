//Styles
import "./Group.css";
//Hooks
import { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import useGroups from "../../../hooks/useGroups";
//Components
import GroupRowsList from "../GroupRowsList/GroupRowsList";
import NewRow from "../NewRow/NewRow";
//Utills
import axios from "axios";

const Group = ({ group }) => {
  const [user, token] = useAuth();
  const { removeGroup, toggleGroupStatus } = useGroups();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    //All rows of the group
    async function getGroupRows() {
      let response = await axios.get(
        `http://127.0.0.1:8000/api/rows/${group.id}`,
        { headers: { Authorization: "Bearer " + token } }
      );
      setRows(response.data);
    }
    getGroupRows();
  }, []);

  function handleClick() {
    let activeBool = group.is_active;
    if (activeBool === true) {
      activeBool = false;
    } else {
      activeBool = true;
    }
    let body = {
      is_active: activeBool,
    };
    toggleGroupStatus(token, group, body);
  }

  return (
    <div className="group-container">
      <header className="group-top-container">
        <div className="group-status-container">
          {group.is_active ? (
            <span className="group-status" style={{ color: "green" }}>
              Open
            </span>
          ) : (
            <span className="group-status" style={{ color: "red" }}>
              Closed
            </span>
          )}
        </div>
        <div className="group-time-container">
          {group.start_time} - {group.end_time}
        </div>
        <div className="rows-counter-container">
          {group.current_value} / {group.max_value}
        </div>
        {user.is_owner ? (
          <div className="group-controllers">
            <button onClick={handleClick}>
              {group.is_active ? (
                <span style={{ color: "red" }}>Close</span>
              ) : (
                <span style={{ color: "green" }}>Open</span>
              )}
            </button>
            <button
              style={{
                padding: "0",
                marginLeft: "1rem",
                color: "rgba(40, 99, 143, 0.9)",
              }}
              onClick={() => {
                removeGroup(token, group.id);
              }}
            >
              x
            </button>
          </div>
        ) : null}
      </header>
      <section>
        {!user.is_owner && !(group.current_value >= group.max_value) ? (
          <NewRow group={group} />
        ) : (
          <div>{user.is_owner ? null : <p className="tag-red">Full</p>}</div>
        )}
      </section>
      <section name="rows data section">
        <GroupRowsList groupId={group.id} rows={rows} />
      </section>
    </div>
  );
};

export default Group;
