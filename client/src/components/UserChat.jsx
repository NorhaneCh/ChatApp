import { useFetchRecipentUser } from "../hooks/useFetchRecipent";
import { user_icon } from "../assets";

const UserChat = ({ chat, user }) => {
  const { recipientUser } = useFetchRecipentUser(chat, user);
  return (
    <button className="relative w-full flex flex-row py-3 border-b-2 border-white/10 px-3 text-[15px] items-center  hover:bg-white/5">
      <div className="absolute bg-green-500 p-1 rounded-full top-1 right-1"></div>
      <img src={user_icon} alt="frame" className="w-[25px] h-[25px]" />
      <div className="flex flex-col ml-4 items-start">
        <p className="font-medium">{recipientUser?.name}</p>
        <p className="font-regular text-[13px] text-white/40">text message</p>
      </div>
      <div className="flex flex-col ml-auto items-end text-[13px]">
        <p className="font-regular text-white/40">01/10/2023</p>
        <p className="font-regular text-black bg-yellow-color rounded-full px-2">
          2
        </p>
      </div>
    </button>
  );
};

export default UserChat;
