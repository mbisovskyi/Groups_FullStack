//Styles
import "./Group.css";
//Custom Hooks
import useAuth from "../../hooks/useAuth";
//Components
import GroupController from "../GroupController/GroupController";

const Group = ({ data }) => {
  //Custom Hooks Variables
  const [user, token] = useAuth();

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
        {user.is_owner ? <GroupController data={data} /> : null}
      </section>
      <main name="Group Data Section">Group Data Here</main>
      <footer name="Group Footer">Footer</footer>
    </div>
  );
};

export default Group;
