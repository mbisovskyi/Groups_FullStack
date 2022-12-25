//Styles
import "./GroupsPage.css";
//Components
import Group from "../../Components/Group/Group";
//Hooks
import { useState } from "react";
//Utils
import arrayMethods from "../../Utils/arrayMethods";

const GroupsPage = () => {
  const groupsTimes = [
    "8:00am - 11:00am",
    "11:00am - 3:00pm",
    "3:00pm - 6:00pm",
    "6:00pm - 9:00pm",
  ];
  const [groupNumbers] = useState(
    arrayMethods.arrayRange(1, groupsTimes.length, 1)
  );

  return (
    <div className="groupspage-container">
      {groupNumbers.map((index) => {
        return <Group key={index} time={groupsTimes[index - 1]} />;
      })}
    </div>
  );
};

export default GroupsPage;
