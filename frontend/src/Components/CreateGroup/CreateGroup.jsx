import "./CreateGroup.css";
//Hooks
import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
//Utils
import axios from "axios";

const CreateGroup = () => {
  const [user, token] = useAuth();
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [maxRows, setMaxRows] = useState(5);
  const [modalFormElement, setModalFormElement] = useState();

  useEffect(() => {
    setModalFormElement(document.querySelector(".modal-form-container"));
  }, []);

  function toggleModalForm() {
    modalFormElement.classList.contains("hidden")
      ? modalFormElement.classList.remove("hidden")
      : modalFormElement.classList.add("hidden");
  }

  async function handleSubmitForm(e) {
    toggleModalForm();
    let newGroup = {
      user_id: user.id,
      start_time: startTime,
      end_time: endTime,
      max_rows: maxRows,
    };
    let response = await axios.post(
      "http://127.0.0.1:8000/api/groups/",
      newGroup,
      {
        headers: { Authorization: "Bearer " + token },
      }
    );
    console.log(response.status);
  }

  return (
    <div className="creategroup-container">
      <div className="modal-form-container hidden">
        <div>
          <button className="close-modal-form" onClick={toggleModalForm}>
            Close
          </button>
        </div>
        <div>
          <form onSubmit={handleSubmitForm}>
            <label value={startTime}>Start time: </label>
            <input
              type="time"
              required
              onChange={(event) => setStartTime(event.target.value)}
            ></input>
            <label value={endTime}>End time: </label>
            <input
              type="time"
              required
              onChange={(event) => setEndTime(event.target.value)}
            ></input>
            <label value={maxRows}>Maximum rows: </label>
            <input
              type="number"
              defaultValue={5}
              onChange={(event) => setMaxRows(event.target.value)}
            ></input>
            <button type="submit">Create</button>
          </form>
        </div>
      </div>
      <button onClick={toggleModalForm}>New Group</button>
    </div>
  );
};

export default CreateGroup;
