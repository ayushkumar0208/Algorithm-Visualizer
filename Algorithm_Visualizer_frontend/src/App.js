import "./App.css";
import Panel from "./Components/Screens/Panel/Panel";
// import Canvas from './Components/Canvas/Canvas';
// import Stack from './Components/Stack/Stack';
// import Stackstructure from './Components/Stack/Stackstructure';
// import Queuestructure from './Components/Queue/Queuestructure';
import {
  Route,
  Routes,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";
// import Main from './component/Main'
import Signup from "./component/Signup";
import Login from "./component/Login";
import EmailVerify from "./component/EmailVerify";
// import LinkedList from "./Components/LinkedList/LinkedList";

function App() {
  const user = localStorage.getItem("token");
  return (
    <Router>
      <Routes>
        {user && <Route path="/" exact element={<Panel />} />}
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" exact element={<Navigate replace to="/login" />} />
        <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
      </Routes>
    </Router>
  );
}

export default App;
