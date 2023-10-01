import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { styles } from "../styles";
import { logout_icon, user_icon } from "../assets";
import { motion } from "framer-motion";

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
        <div className="flex flex-row items-end gap-2">
          <img className="w-[25px] h-[25px]" src={user_icon} alt="frame" />
          <p className="text-[16px] font-medium">{user.name.toUpperCase()}</p>
        </div>
        <motion.button
        whileHover={{backgroundColor : '#DED35E'}}
        whileTap={{y : 5}}
          className="flex flex-row gap-1 justify-center items-center text-dark-blue bg-light-green-color px-4 py-1 rounded-[10px]"
          onClick={logoutUser}
        >
          <img className="w-[20px] h-[20px]" src={logout_icon} alt="frame" />
          <p className="text-[16px] font-medium">Logout</p>
        </motion.button>
      </div>
    </div>
  );
};

export default NavBar;
