//Hooks
import { useState } from "react";
//Components
import GroupRowsList from "../GroupRowsList/GroupRowsList";
import useAuth from "../../../hooks/useAuth";

const Group = ({ group, removeGroup }) => {
  const [user, token] = useAuth();
  const [rowsQuantity, setRowsQuantity] = useState(0);

  return (
    <div>
      <div className="group-top-container">
        <div className="group-status-container">
          {group.is_active ? (
            <span style={{ color: "green" }}>Active</span>
          ) : (
            <span style={{ color: "red" }}>Closed</span>
          )}
        </div>
        <div className="group-date-container">{group.date}</div>
        <div>
          {rowsQuantity} / {group.max_rows}
        </div>
        {user.is_owner ? (
          <div className="group-controllers">
            <button>Toggle status</button>
            <button
              onClick={() => {
                removeGroup(token, group.id);
              }}
            >
              Remove
            </button>
          </div>
        ) : null}
      </div>
      <GroupRowsList groupId={group.id} setRowsQuantity={setRowsQuantity} />
    </div>
  );
};

export default Group;
