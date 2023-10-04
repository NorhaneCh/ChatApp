import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useContext } from "react";
import { friend_icon } from "../assets";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";

const PotentialChats = ({ setShowUsersList, users }) => {
  const { user } = useContext(AuthContext);
  let ref = useRef();
  const handleClickUser = (selected_user) => {
    setShowUsersList(false);
    createChat(user._id, selected_user._id);
  };
  useEffect(() => {
    console.log(users);
    let handler = (e) => {
      if (!ref.current.contains(e.target)) {
        setShowUsersList(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
  const { potentialChats, createChat } = useContext(ChatContext);
  console.log(potentialChats);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="backdrop flex items-center justify-center"
      >
        <div
          ref={ref}
          className="bg-dark-blue text-white h-[60%] w-[230px] rounded-[10px] flex flex-col overflow-y-scroll"
        >
          {potentialChats &&
            potentialChats.map((chat) => (
              <button
                className="relative w-full flex flex-row gap-4 pl-6 py-3 border-b border-white/10 px-3 text-[15px] items-center  hover:bg-white/5"
                onClick={() => {
                  handleClickUser(chat);
                }}
              >
                <div className="bg-green-500 p-1 rounded-full"></div>
                <img
                  src={friend_icon}
                  alt="frame"
                  className="w-[40px] h-[40px]"
                />
                <p>{chat.name}</p>
              </button>
            ))}
          {potentialChats < 1 && <p className="text-center mt-20">No other users</p>}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PotentialChats;
