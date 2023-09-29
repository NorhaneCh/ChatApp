import { Routes, Route, Navigate } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavBar from "./components/navBar";
function App() {
  return (
    <div className="bg-black">
    <div className="x l:max-w-[1600px] mx-auto">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
