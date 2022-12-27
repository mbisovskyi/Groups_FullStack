//Styles
import "./TodayGroups.css";
//Components
import Group from "../Group/Group";

const TodayGroups = ({ groupsData }) => {
  return (
    <div className="todaygroups-container">
      {groupsData.length !== 0 ? (
        groupsData.map((group, index) => {
          return <Group key={index} group={group} groupNumber={index + 1} />;
        })
      ) : (
        <p>No active groups</p>
      )}
    </div>
  );
};

export default TodayGroups;
