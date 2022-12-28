//Styling
import "./GroupRowsList.css";
//Components
import RowData from "../RowData/RowData";
//Hooks
import useGroups from "../../../hooks/useGroups";
import useAuth from "../../../hooks/useAuth";
import { useState, useEffect } from "react";
//Utills
import axios from "axios";

const GroupRowsList = ({ groupId, setRowsQuantity }) => {
  const [user, token] = useAuth();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function getGroupRows() {
      let response = await axios.get(
        `http://127.0.0.1:8000/api/rows/${groupId}`,
        { headers: { Authorization: "Bearer " + token } }
      );
      setRows(response.data);
      setRowsQuantity(response.data.length);
    }
    getGroupRows();
  }, []);

  return (
    <div className="rows-list-container">
      {rows.length > 0 ? (
        <div>
          {rows.map((row, index) => {
            if (user.is_owner) {
              return (
                <div key={index}>
                  <RowData row={row} rowNumber={index + 1} />
                </div>
              );
            } else {
              if (row.user_id === user.id) {
                return <RowData key={index} row={row} rowNumber={index + 1} />;
              }
            }
          })}
        </div>
      ) : (
        <div>
            {user.is_owner ? <div>No Data</div> : null}
        </div>
      )}
    </div>
  );
};

export default GroupRowsList;
