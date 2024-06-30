import { motion } from "framer-motion";
import { emoji_icon, message_icon, more_icon, send_icon } from "../assets";
import { useContext, useEffect, useRef, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import ClipLoader from "react-spinners/ClipLoader";
import { AuthContext } from "../context/AuthContext";
import { useFetchRecipentUser } from "../hooks/useFetchRecipent";
import moment from "moment";
import InputEmoji from "react-input-emoji";
import ChatOptions from "./ChatOptions";
import { useOnKeyPress } from "../hooks/useOnKeyPress";

const ChatBox = ({ setShowUsersList }) => {
  const {
    messages,
    isMessagesLoading,
    messagesError,
    currentChat,
    sendTextMessage,
  } = useContext(ChatContext);
  const { user } = useContext(AuthContext);
  const { recipientUser } = useFetchRecipentUser(currentChat, user);
  const [textMessage, setTextMessage] = useState("");
  const [showChatOptions, setShowChatOptions] = useState(false);
  const scroll = useRef();

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    sendTextMessage(textMessage, user, currentChat, setTextMessage);
  };
  useOnKeyPress(handleSendMessage, "Enter");
  return (
    <div className="bg-white/5 h-[700px] rounded-md rounded-l-none flex-col items-center justify-center text-[13px] w-full">
      {!currentChat ? (
        <div className="flex flex-col items-center justify-center h-full">
          <img src={message_icon} alt="frame" className="w-[100px]" />
          <p className="text-[16px]">Your messages</p>
          <p className="text-[13px] font-extralight text-white/50">
            send private messages to a friend{" "}
          </p>
          <button
            onClick={() => setShowUsersList(true)}
            className="px-2 py-1 mt-2 rounded-xl font-medium hover:bg-yellow-color transition-all duration-500 bg-light-green-color text-dark-blue"
          >
            Send a message
          </button>
        </div>
      ) : (
        <div className="relative h-full">
          {showChatOptions && (
            <ChatOptions setShowChatOptions={setShowChatOptions} />
          )}
          <div className="h-[5%] border-white/10 border-b-2 flex justify-center items-center">
            <p className="text-[14px]">{recipientUser?.name}</p>
            <button
              className="absolute right-2"
              onClick={() => setShowChatOptions(true)}
            >
              <img src={more_icon} alt="frame" className="w-[25px]" />
            </button>
          </div>
          <div className="h-[95%]">
            <div className="h-[91%] overflow-y-scroll">
              {isMessagesLoading ? (
                <div className="flex justify-center mt-44">
                  <ClipLoader color="#ffff" size={50} />
                </div>
              ) : (
                <div className="px-2 py-3">
                  {messages?.map((message, index) => (
                    <div
                      ref={scroll}
                      key={index}
                      className={`px-4 py-2 mt-3 relative rounded-[10px] overflow-hidden max-w-[450px] min-w-[100px] ${
                        message.senderId === user?._id
                          ? "ml-auto bg-white/10 font-light"
                          : " bg-yellow-color text-dark-blue font-medium"
                      }`}
                    >
                      <p>{message.text}</p>
                      <p className="absolute text-[11px] bottom-0 right-1">
                        {moment(message.createdAt).calendar()}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex flex-row items-center justify-center gap-3">
              <div className="w-[80%] text-[11px]">
                <InputEmoji value={textMessage} onChange={setTextMessage} />
              </div>

              <motion.button whileTap={{ y: 3 }}>
                <img
                  src={send_icon}
                  alt="frame"
                  className="w-[23px] h-[23px]"
                  onClick={() =>
                    sendTextMessage(
                      textMessage,
                      user,
                      currentChat,
                      setTextMessage
                    )
                  }
                />
              </motion.button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
