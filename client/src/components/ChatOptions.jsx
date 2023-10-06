import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { ChatContext } from "../context/ChatContext";

const ChatOptions = ({ setShowChatOptions }) => {
  const { deleteChat, currentChat } = useContext(ChatContext);
  let ref = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!ref.current.contains(e.target)) {
        setShowChatOptions(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="options-backdrop flex flex-col border-2 border-white/10 bg-dark-blue items-center justify-center text-[13px] px-3 rounded-md hover:bg-dark-blue/20"
      >
        <button
          className="py-2 text-red-400"
          onClick={() => deleteChat(currentChat, setShowChatOptions)}
        >
          Delete chat
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default ChatOptions;
