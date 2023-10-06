import { useFetchRecipentUser } from "../hooks/useFetchRecipent";
import { friend_icon } from "../assets";
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

const UserChat = ({ chat, user }) => {
  const { recipientUser } = useFetchRecipentUser(chat, user);
  const { onLineUsers } = useContext(ChatContext);
  return (
    <button className="relative w-full flex flex-row py-3 border-b-2 border-white/10 px-3 text-[15px] items-center hover:bg-white/5">
      <div
        className={`absolute bg-green-500 p-1 rounded-full top-7 left-4 ${
          onLineUsers.some((u) => u?.userId === recipientUser?._id)
            ? ""
            : "invisible"
        }`}
      ></div>
      <img src={friend_icon} alt="frame" className="w-[30px] h-[30px] ml-6" />
      <div className="flex flex-col ml-4 items-start">
        <p className="text-[14px]">{recipientUser?.name}</p>
        <p className="font-regular text-[12px] text-white/40">text message</p>
      </div>
      <div className="flex flex-col ml-auto items-end text-[12px] gap-1">
        <p className="text-white/40">01/10/2023</p>
        <p className=" text-black bg-yellow-color rounded-full px-2">2</p>
      </div>
    </button>
  );
};

export default UserChat;
