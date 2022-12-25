//Styles
import "./Group.css";
//Hooks
import { useState } from "react";
//Utils
import arrayMethods from "../../Utils/arrayMethods";

const Group = ({ time }) => {
  const [groupData, setGroupData] = useState([]);
  const rowsQuantity = arrayMethods.arrayRange(1, groupData.length, 1);
  const maxRows = 10;

  function addRow() {
    setGroupData(arrayMethods.arrayRange(0, groupData.length, 1));
  }

  function removeRow() {
    let newArray = groupData.splice(1, groupData.length - 1);
    setGroupData(newArray);
  }

  return (
    <div className="group-container">
      <h2>{time}</h2>
      <p style={{ textAlign: "center" }}>
        {groupData.length} / {maxRows}
      </p>
      {groupData.length < maxRows ? (
        <button id="addRowBtn" onClick={addRow}>
          Add
        </button>
      ) : (
        <div>
          <button id="addRowBtn" style={{ display: "none" }} disabled></button>
          <p style={{ textAlign: "center" }}>Maximum is reached!</p>
        </div>
      )}
      {groupData.length === 0 ? (
        <p style={{ textAlign: "center" }}>Be first!</p>
      ) : null}
      {rowsQuantity.map((rowNum, index) => {
        return (
          <div key={index} className="row">
            <p>
              {rowNum}
              <button onClick={removeRow}>Remove</button>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Group;
