import { useContext, useState } from "react";
import { styles } from "../styles";
import { ChatContext } from "../context/ChatContext";
import UserChat from "../components/UserChat";
import { AuthContext } from "../context/AuthContext";
import { edit_icon } from "../assets";
import { motion } from "framer-motion";
import PotentialChats from "../components/PotentialChats";
import ClipLoader from "react-spinners/ClipLoader";
import ChatBox from "../components/ChatBox";

const Chat = () => {
  const { user } = useContext(AuthContext);
  const [showUsersList, setShowUsersList] = useState(false);
  const { userChats, isUserChatsLoading, updateCurrentChat } =
    useContext(ChatContext);
  const [users, setUsers] = useState();

  return (
    <div
      className={`min-h-screen ${styles.padding} flex justify-center xl:mt-36 relative text-[15px] text-white`}
    >
      {showUsersList && (
        <PotentialChats setShowUsersList={setShowUsersList} users={users} />
      )}
      <div className="w-[90%] flex flex-row gap-3 justify-center items-center">
        <div className="w-[30%] h-[700px] ">
          <div className="h-[5%]">
            {userChats < 1 ? null : (
              <motion.button
                className="ml-10 flex flex-row gap-4 items-center justify-center hover:text-light-green-color"
                onClick={() => setShowUsersList(true)}
              >
                <img
                  src={edit_icon}
                  alt="frame"
                  className="w-[20px] h-[20px]"
                />
                <p className="sm:hidden lg:flex xl:flex xs:hidden">New chat</p>
              </motion.button>
            )}
          </div>
          <div className="overflow-y-scroll h-[95%] sm:visible lg:visible xl:visible xs:invisible">
            {isUserChatsLoading && <ClipLoader color="#000000" size={30} />}
            {userChats?.map((chat, index) => (
              <div key={index} onClick={() => updateCurrentChat(chat)}>
                <UserChat chat={chat} user={user} />
              </div>
            ))}
          </div>
        </div>
        <div className="w-[70%]">
          <ChatBox setShowUsersList={setShowUsersList} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
