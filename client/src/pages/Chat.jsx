import { styles } from "../styles";

const Chat = () => {
  return (
    <div
      className={`h-screen ${styles.padding} flex items-center justify-center`}
    >
      <div className="w-[80%] min-h-[90%] z-10 glass-box rounded-[20px]"></div>
    </div>
  );
};

export default Chat;
