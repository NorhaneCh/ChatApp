import { useContext } from "react";
import { styles } from "../styles";
import { ChatContext } from "../context/ChatContext";
import UserChat from "../components/userChat";
import { AuthContext } from "../context/AuthContext";

const Chat = () => {
  const { user } = useContext(AuthContext);
  const { userChats, isUserChatsLoading, userChatsError } =
    useContext(ChatContext);
  return (
    <div
      className={`min-h-screen ${styles.padding} flex items-center justify-center relative text-[15px] text-white`}
    >
      <div className="w-[90%] flex flex-row gap-3">
        <div className="w-[30%] h-[700px]">
          {isUserChatsLoading && <p>Loading chats . . .</p>}
          {userChats?.map((chat, index) => (
            <div key={index}>
              <UserChat chat={chat} user={user} />
            </div>
          ))}
        </div>

        <div className="w-[69%] bg-white/5 h-[700px] rounded-[15px] rounded-l-none flex-col items-center justify-center">
          <div className="h-[5%] border-white/10 border-b-2 flex justify-center items-center">
            <p>Christian</p>
          </div>
          <div className="h-[95%]">
            <div className="h-[93%]"></div>
            <div className="flex flex-row items-center justify-center">
              <input
                type="text"
                placeholder="Type a message"
                className="text-[13px] py-2 w-[75%] rounded-[20px] px-6 bg-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
