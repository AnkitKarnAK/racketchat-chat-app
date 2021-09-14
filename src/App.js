import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Messenger from "./components/messenger/Messenger";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <PrivateRoute path="/" element={<Messenger />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <PrivateRoute path="/messenger" element={<Messenger />} />
      </Routes>
    </div>
  );
}

export default App;
