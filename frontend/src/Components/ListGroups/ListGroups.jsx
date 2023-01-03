//Styles
import "./ListGroups.css";
//Custom Hooks
import useGroups from "../../hooks/useGroups";
//Components
import Group from "../Group/Group";

const ListGroups = () => {
  //Custom Hooks Variables
  const { allGroups } = useGroups(); // >>>>> All Groups are located here! <<<<<<<

  return (
    <div className="listgroups-container">
      {allGroups.map((group, index) => {
        return <Group data={{ group, index }} key={index} />;
      })}
    </div>
  );
};

export default ListGroups;
