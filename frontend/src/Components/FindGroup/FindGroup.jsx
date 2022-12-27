//Styles
import "./FindGroup.css";

const FindGroup = (props) => {
  function handleGroupFinder(event) {
    let date = event.target.value;
    try {
      let foundGroups = props.groupsData.filter((group) => {
        console.log(group.date);
        return group.date === date;
      });
      if (foundGroups.length > 0) {
        props.setFoundGroups(foundGroups);
        props.setFoundGroupsError(null);
      } else {
        props.setFoundGroupsError("No groups found!");
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="findgroups-container">
      <h3>Find group</h3>
      <label value="date"></label>
      <input
        type="date"
        defaultValue={props.currentDate}
        onChange={(event) => handleGroupFinder(event)}
      />
    </div>
  );
};

export default FindGroup;
