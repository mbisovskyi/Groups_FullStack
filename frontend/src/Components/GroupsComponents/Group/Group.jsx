//Styles
import "./Group.css";
//Hooks
import { useState, useEffect } from "react";
//Components
import GroupRowsList from "../GroupRowsList/GroupRowsList";
import useAuth from "../../../hooks/useAuth";
import useGroups from "../../../hooks/useGroups";

const Group = ({ group }) => {
  const [user, token] = useAuth();
  const { removeGroup, toggleGroupStatus } = useGroups();
  const [rowsQuantity, setRowsQuantity] = useState(0);

  useEffect(() => {}, [group.is_active]);

  return (
    <div className="group-container">
      <div className="group-top-container">
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
          {rowsQuantity} / {group.max_rows}
        </div>
        {user.is_owner ? (
          <div className="group-controllers">
            <button
              onClick={() => {
                toggleGroupStatus(token, group);
              }}
            >
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
      </div>
      <GroupRowsList groupId={group.id} setRowsQuantity={setRowsQuantity} />
    </div>
  );
};

export default Group;
