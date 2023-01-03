//Styles
import "./GroupController.css";
//Custom Hooks
import useAuth from "../../hooks/useAuth";
import useGroups from "../../hooks/useGroups";

const GroupController = ({ data }) => {
  //Custom Hooks Variables
  const [user, token] = useAuth();
  const { toggleGroupStatus } = useGroups();

  //Functions
  /**Handles click on group status toggle button
   * @param booleanValue - current group status (Boolean)
   */
  function handleGroupStatusToggler(booleanValue) {
    if (booleanValue) {
      booleanValue = false;
    } else {
      booleanValue = true;
    }
    toggleGroupStatus(data.group.id, booleanValue);
    window.location.reload();
  }

  return (
    <div className="groupcontroller-container">
      <button
        id="toggle-group-status-btn"
        onClick={() => {
          handleGroupStatusToggler(data.group.is_active);
        }}
      >
        {data.group.is_active ? (
          <span style={{ color: "red" }}>Close</span>
        ) : (
          <span style={{ color: "green" }}>Open</span>
        )}
      </button>
      <button id="delete-group-btn">X</button>
    </div>
  );
};

export default GroupController;
