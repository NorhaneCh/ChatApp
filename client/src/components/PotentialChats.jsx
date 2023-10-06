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
  const { potentialChats, createChat, onLineUsers } = useContext(ChatContext);
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
          className="bg-dark-blue text-white h-[60%] w-[300px] rounded-md flex flex-col"
        >
          <p className="text-[15px] py-3 border-b border-white/10 w-full text-center">
            New chat
          </p>
          <div className="w-full h-full overflow-y-scroll">
            {potentialChats &&
              potentialChats.map((chatUser, index) => (
                <button
                  key={index}
                  className="relative w-full flex flex-row gap-4 pl-6 py-2 border-b border-white/10 px-3 text-[15px] items-center  hover:bg-white/5"
                  onClick={() => {
                    handleClickUser(chatUser);
                  }}
                >
                  <div
                    className={`bg-green-500 p-1 rounded-full ${
                      onLineUsers.some((u) => u?.userId === chatUser._id)
                        ? ""
                        : "invisible"
                    }`}
                  ></div>

                  <img
                    src={friend_icon}
                    alt="frame"
                    className="w-[30px] h-[30px]"
                  />
                  <p className="text-[14px]">{chatUser.name}</p>
                </button>
              ))}

            {potentialChats < 1 && (
              <p className="text-center mt-20">No other users</p>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PotentialChats;
