//Styles
import "./GroupRow.css";
//Hooks
import useAuth from "../../hooks/useAuth";
import { useState, useEffect } from "react";
//Utills
import axios from "axios";

const GroupRow = ({ groupId }) => {
  const [user, token] = useAuth();
  const [rowsData, setRowsData] = useState([]);

  useEffect(() => {
    const fetchRowsData = async () => {
      let response = await axios.get(
        `http://127.0.0.1:8000/api/rows/${groupId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setRowsData(response.data);
    };
    fetchRowsData();
  }, []);

  return <div className="grouprow-container"></div>;
};

export default GroupRow;
