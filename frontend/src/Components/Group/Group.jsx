//Styles
import "./Group.css";

const Group = ({ group, groupNumber }) => {
  return (
    <div className="group-container">
      {group ? (
        <div>
          <h2>
            {groupNumber}. {group.start_time} - {group.end_time}
          </h2>
          <span>Group limit is {group.max_rows}</span>
        </div>
      ) : null}
    </div>
  );
};

export default Group;
