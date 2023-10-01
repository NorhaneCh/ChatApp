import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { styles } from "../styles";

const NavBar = () => {
  const { user } = useContext(AuthContext);
  const { logoutUser } = useContext(AuthContext);
  return (
    <div className={`top-0 z-20 backdrop-blur sticky py-2`}>
      <div
        className={`app-bar flex flex-row justify-evenly items-center text-white ${styles.paddingX}`}
      >
        <p className="font-bold text-[25px]">
          <span className="text-light-green-color">WESH</span>
          <span className="text-yellow-color"> !</span>
        </p>
        <p>{`Logged in as ${user.name}`}</p>
        <button className="hover:text-light-green-color" onClick={logoutUser}>
          <p>Logout</p>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
