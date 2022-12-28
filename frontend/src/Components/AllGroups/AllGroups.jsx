//Styles
import "./AllGroups.css";
//Components
import Group from "../../components/Group/Group";
import CreateGroup from "../../components/CreateGroup/CreateGroup";

const AllGroups = ({ groupsData }) => {
  return (
    <div className="allgroups-container">
      <CreateGroup />
      <div className="groups-container">
        {groupsData.length !== 0 ? (
          groupsData.map((group, index) => {
            return <Group key={index} group={group} groupNumber={index + 1} />;
          })
        ) : (
          <p style={{ color: "red" }}>No active groups!</p>
        )}
      </div>
    </div>
  );
};

export default AllGroups;
