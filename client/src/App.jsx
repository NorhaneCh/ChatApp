import { Routes, Route, Navigate } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavBar from "./components/navBar";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";
function App() {
  const { user } = useContext(AuthContext);
  return (
    <ChatContextProvider user = {user}>
      <div className="bg-dark-blue">
        <div className=" xl:max-w-[1500px] mx-auto">
          {user ? <NavBar /> : null}
          <Routes>
            <Route path="/" element={user ? <Chat /> : <Login />} />
            <Route path="/Login" element={user ? <Chat /> : <Login />} />
            <Route path="/Register" element={user ? <Chat /> : <Register />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </ChatContextProvider>
  );
}

export default App;
