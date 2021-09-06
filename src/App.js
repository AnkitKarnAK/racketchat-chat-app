import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Profile from "./components/profile/Profile";
import Messenger from "./components/messenger/Messenger";
import { useAuthContext } from "./context/auth-context";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route
          path="/login"
          element={user ? <Navigate replace to="/messenger" /> : <Login />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate replace to="/messenger" /> : <Signup />}
        />
        <Route
          path="/messenger"
          element={!user ? <Navigate replace to="/login" /> : <Messenger />}
        />
      </Routes>
    </div>
  );
}

export default App;
