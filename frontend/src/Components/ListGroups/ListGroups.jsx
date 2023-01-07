//Styles
import "./ListGroups.css";
//Custom Hooks
import useGroups from "../../hooks/useGroups";
import useAuth from "../../hooks/useAuth";
//Components
import Group from "../Group/Group";

const ListGroups = () => {
  //Custom Hooks Variables
  const { allGroups, activeGroups } = useGroups();
  const [user, token] = useAuth();

  return (
    <div className="listgroups-container">
      {user.is_owner ? (
        <div>
          {allGroups.map((group, index) => {
            return <Group data={{ group, index }} key={index} />;
          })}
        </div>
      ) : (
        <div>
          {activeGroups.map((group, index) => {
            return <Group data={{ group, index }} key={index} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ListGroups;
