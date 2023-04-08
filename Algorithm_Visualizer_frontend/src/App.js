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
//import Home from './component/Home
import NavBar from "./component/Home/NavBar";
import HomeScreen from "./component/Home/HomeScreen";
// import Main from './component/Main'
import Signup from "./component/Signup";
import Login from "./component/Login";
import EmailVerify from "./component/EmailVerify";
// import LinkedList from "./Components/LinkedList/LinkedList";

function App() {
  const user = localStorage.getItem("currentUser");
  return (
    <Router>
      <NavBar />
      <Routes>
        {user && <Route path="/panel" exact element={<Panel />} />}
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path = "/home" exact element={<HomeScreen />} />
        <Route path="/" exact element={<Navigate replace to="/home" />} />
        <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
      </Routes>
    </Router>
  );
}

export default App;
