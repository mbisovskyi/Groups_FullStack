//Styling
import "./NewGroup.css";
//Hooks
import { useState, useEffect } from "react";
import useGroups from "../../hooks/useGroups";
import useAuth from "../../hooks/useAuth";

const NewGroup = () => {
  //Custom Hooks
  const { newGroup } = useGroups();
  const [user, token] = useAuth();
  //HTML Elements
  const [modalFormHtml, setModalFormHtml] = useState();
  const [newGroupBtn, setNewGroupBtn] = useState();
  //Form Variables
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [date, setDate] = useState("");
  const [maxValue, setMaxValue] = useState("");

  useEffect(() => {
    setModalFormHtml(document.querySelector(".modal-form-container"));
    setNewGroupBtn(document.getElementById("new-group-btn"));
  }, []);

  //Function to toggle display prop of modal-form-container and text of #new-group-btn
  function toggleDisplayModalForm() {
    if (modalFormHtml.classList.contains("hidden")) {
      modalFormHtml.classList.remove("hidden");
      newGroupBtn.innerHTML = "Close";
    } else {
      modalFormHtml.classList.add("hidden");
      newGroupBtn.innerHTML = "New Group";
    }
  }

  //Function to handle submit of a new group form
  function handleSubmitForm() {
    let newGroupBody = {
      start_time: startTime,
      end_time: endTime,
      date: date,
      max_value: maxValue,
    };
    newGroup(newGroupBody, token);
  }

  return (
    <main className="newgroup-container">
      <button id="new-group-btn" onClick={toggleDisplayModalForm}>
        New Group
      </button>
      <section className="modal-form-container hidden">
        <form onSubmit={handleSubmitForm}>
          <label value={startTime}>Start time: </label>
          <input
            required
            type="time"
            onChange={(event) => setStartTime(event.target.value)}
          />
          <label value={endTime}>End time: </label>
          <input
            required
            type="time"
            onChange={(event) => setEndTime(event.target.value)}
          />
          <label value={date}>Date: </label>
          <input
            required
            type="date"
            onChange={(event) => setDate(event.target.value)}
          />
          <label value={maxValue}>Max peaces: </label>
          <input
            required
            type="number"
            onChange={(event) => setMaxValue(event.target.value)}
          />
          <button type="submit">Create</button>
        </form>
      </section>
    </main>
  );
};

export default NewGroup;
