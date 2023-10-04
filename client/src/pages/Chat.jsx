import { useContext, useState } from "react";
import { styles } from "../styles";
import { ChatContext } from "../context/ChatContext";
import UserChat from "../components/userChat";
import { AuthContext } from "../context/AuthContext";
import { edit_icon, emoji_icon, send_icon } from "../assets";
import { motion } from "framer-motion";
import PotentialChats from "../components/PotentialChats";
import ClipLoader from "react-spinners/ClipLoader";

const Chat = () => {
  const { user } = useContext(AuthContext);
  const [showUsersList, setShowUsersList] = useState(false);
  const { userChats, isUserChatsLoading, userChatsError } =
    useContext(ChatContext);
  const { users, setUsers } = useState();

  return (
    <div
      className={`min-h-screen ${styles.padding} flex justify-center xl:mt-36 lg:mt-12 relative text-[15px] text-white`}
    >
      {showUsersList && (
        <PotentialChats setShowUsersList={setShowUsersList} users={users} />
      )}
      <div className="w-[90%] flex flex-row gap-3">
        <div className="w-[30%] h-[700px]">
          <div className="w-full h-[5%]">
            <motion.button
              className="ml-4"
              whileTap={{ y: 3 }}
              onClick={() => setShowUsersList(true)}
            >
              <img src={edit_icon} alt="frame" className="w-[25px] h-[25px]" />
            </motion.button>
          </div>
          <div className="overflow-y-scroll w-full h-[95%]">
            {isUserChatsLoading && <ClipLoader color="#000000" size={30} />}
            {userChats?.map((chat, index) => (
              <div key={index}>
                <UserChat chat={chat} user={user} />
              </div>
            ))}
          </div>
        </div>

        <div className="w-[69%] bg-white/5 h-[700px] rounded-[15px] rounded-l-none flex-col items-center justify-center">
          <div className="h-[5%] border-white/10 border-b-2 flex justify-center items-center">
            <p>Christian</p>
          </div>
          <div className="h-[95%]">
            <div className="h-[93%]"></div>
            <div className="flex flex-row items-center justify-center gap-4">
              <input
                type="text"
                placeholder="Type a message"
                className="text-[13px] py-2 w-[75%] rounded-[20px] px-6 bg-white/10"
              />
              <motion.button whileTap={{ y: 3 }}>
                {" "}
                <img
                  src={emoji_icon}
                  alt="frame"
                  className="w-[23px] h-[23px]"
                />
              </motion.button>

              <motion.button whileTap={{ y: 3 }}>
                <img
                  src={send_icon}
                  alt="frame"
                  className="w-[23px] h-[23px]"
                />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
