//Styles
import "./AllGroups.css";
//Components
import Group from "../../components/Group/Group";
import CreateGroup from "../../components/CreateGroup/CreateGroup";

const AllGroups = ({ groupsData }) => {
  return (
    <div className="allgroups-container">
      <CreateGroup />
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

export default AllGroups;
