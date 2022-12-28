//Styles
import "./HomePage.css";
//Hooks
import useGroups from "../../hooks/useGroups";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";
//Components
import Group from "../../components/GroupsComponents/Group/Group";

const HomePage = () => {
  const [user, token] = useAuth();
  const [groups, usersGroups, getGroupsData, getActiveGroups, removeGroup] =
    useGroups();

  useEffect(() => {
    getGroupsData(token);
    getActiveGroups(token);
  }, []);

  return (
    <div className="homepage-container">
      {user.is_owner ? (
        <div>
          {groups.map((group, index) => {
            return (
              <div key={index} className="group-container">
                <Group group={group} removeGroup={removeGroup} />
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          {usersGroups.length > 0 ? (
            <div>
              {usersGroups.map((group, index) => {
                return (
                  <div key={index}>
                    <Group group={group} />
                  </div>
                );
              })}
            </div>
          ) : (
            <p>No active groups</p>
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;
