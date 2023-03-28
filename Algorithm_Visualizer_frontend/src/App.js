import "./App.css";
import Panel from "./Components/Screens/Panel/Panel";
import {
  Route,
  BrowserRouter as Router,
  Navigate,
  Routes,
} from "react-router-dom";
// import Main from "./component/Main";
import Signup from "./component/Signup";
import Login from "./component/Login";
import EmailVerify from "./component/EmailVerify";

function App() {
  const user = localStorage.getItem("token");

  return (
    <div className="App">
      <Router>
        <Routes>
          {user && <Route path="/" exact element={<Panel />} />}
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/" exact element={<Navigate replace to="/login" />} />
          <Route path="/panel" exact element={<Panel/>} />
          <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
        </Routes>
      </Router>
      {/* <h1>Algorithm Visualizer</h1>
      <Panel/> */}
      {/* <Canvas/> */}
    </div>
  );
}

export default App;
