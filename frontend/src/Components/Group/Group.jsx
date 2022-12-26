//Styles
import "./Group.css";
//Hooks
import useAuth from "../../hooks/useAuth";
//Utils
import axios from "axios";

const Group = ({ group, groupNumber }) => {
  const [user, token] = useAuth();

  async function removeGroup() {
    await axios.delete(`http://127.0.0.1:8000/api/groups/${group.id}`, {
      headers: { Authorization: "Bearer " + token },
    });
    window.location.reload();
  }

  return (
    <div className="group-container">
      {group ? (
        <div>
          <h2>
            {groupNumber}. {group.start_time} - {group.end_time}
          </h2>
          <span>Group limit is {group.max_rows}</span>
          {user.is_owner ? <button onClick={removeGroup}>Remove</button> : null}
        </div>
      ) : null}
    </div>
  );
};

export default Group;
