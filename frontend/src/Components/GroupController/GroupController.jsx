//Styles
import "./GroupController.css";
//Custom Hooks
import useGroups from "../../hooks/useGroups";
//Hooks
import { useState } from "react";

const GroupController = ({ data }) => {
  //Custom Hooks Variables
  const { patchGroupData } = useGroups();
  //State Variables
  const [status] = useState(data.group.is_active);

  return (
    <div className="groupcontroller-container">
      <button
        id="toggle-group-status-btn"
        onClick={() => {
          patchGroupData(data.group.id, { is_active: !status });
          window.location.reload();
        }}
      >
        {status ? (
          <span style={{ color: "red" }}>Close</span>
        ) : (
          <span style={{ color: "green" }}>Open</span>
        )}
      </button>
      <button
        id="delete-group-btn"
        onClick={() => {
          patchGroupData(data.group.id, { is_active: false, is_deleted: true });
          window.location.reload();
        }}
      >
        X
      </button>
    </div>
  );
};

export default GroupController;
