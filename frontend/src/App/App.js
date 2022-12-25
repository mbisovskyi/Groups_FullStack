//Importing Router DOM
import { Route, Routes } from "react-router-dom";
//Styles
import "../App/App.css";
//Pages
import HomePage from "../Pages/HomePage/HomePage";
import GroupsPage from "../Pages/GroupsPage/GroupsPage";
//Components
import Navbar from "../Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/groups" element={<GroupsPage></GroupsPage>} />
      </Routes>
    </div>
  );
}

export default App;
