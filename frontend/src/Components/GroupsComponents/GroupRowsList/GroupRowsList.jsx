//Styling
import "./GroupRowsList.css";
//Components
import RowData from "../RowData/RowData";
//Hooks
import useAuth from "../../../hooks/useAuth";
import { useState, useEffect } from "react";
//Utills
import axios from "axios";

const GroupRowsList = ({ groupId, rows }) => {
  const [user, token] = useAuth();
  const [userRows, setUserRows] = useState([]);

  useEffect(() => {
    //User's rows only in the group
    async function getUserRows() {
      let response = await axios.get(
        `http://127.0.0.1:8000/api/rows/${groupId}/users/${user.id}/`,
        { headers: { Authorization: "Bearer " + token } }
      );
      setUserRows(response.data);
    }

    if (!user.is_owner) {
      getUserRows();
    }
  }, []);

  return (
    <div className="rows-list-container">
      {rows.length > 0 || userRows.length > 0 ? (
        <div>
          {user.is_owner ? (
            <div name="all rows">
              {rows.map((row, index) => {
                return (
                  <div className="row-border" key={index}>
                    <p>
                      {index + 1}. {row.first_name} {row.last_name}, phone:{" "}
                      {row.phone}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : (
            <div name="user's rows">
              {userRows.map((row, index) => {
                return (
                  <div className="row-border" key={index}>
                    <p>
                      {index + 1}. {row.first_name} {row.last_name}, phone:
                      {row.phone}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        <div>
          {user.is_owner ? (
            <div style={{ textAlign: "center" }}>
              <p className="text-rows-empty">Empty</p>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default GroupRowsList;
