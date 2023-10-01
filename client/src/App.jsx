import { Routes, Route, Navigate } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavBar from "./components/navBar";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="bg-black">
      <div className="x l:max-w-[1600px] mx-auto">
        {user? <NavBar /> : null}
        <Routes>
          <Route path="/" element={user ? <Chat/> : <Login/>} />
          <Route path="/Login" element={user ? <Chat/> : <Login/>} />
          <Route path="/Register" element={user ? <Chat/> : <Register/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
