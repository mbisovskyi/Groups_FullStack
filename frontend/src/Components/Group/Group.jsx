//Styles
import "./Group.css";
//Custom Hooks
import useAuth from "../../hooks/useAuth";
import useGroups from "../../hooks/useGroups";

const Group = ({ data }) => {
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
    <div className="group-container">
      <header>
        <p id="group-date">{data.group.date}</p>
      </header>
      <section name="Group Top Info Section">
        <div className="group-status-container">
          {data.group.is_active ? (
            <span style={{ color: "green" }}>Opened</span>
          ) : (
            <span style={{ color: "red" }}>Closed</span>
          )}
        </div>
        <div className="group-time-container">
          <span>
            {data.group.start_time} - {data.group.end_time}
          </span>
        </div>
        <div className="peaces-counter-container">
          <span>
            {data.group.current_value} / {data.group.max_value}
          </span>
        </div>
        <div className="group-controllers-container">
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
      </section>
      <main name="Group Data Section">Group Data Here</main>
      <footer name="Group Footer">Footer</footer>
    </div>
  );
};

export default Group;
