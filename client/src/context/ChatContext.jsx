import { createContext, useCallback, useEffect, useState } from "react";
import {
  getRequest,
  baseUrl,
  postRequest,
  deleteRequest,
} from "../utils/services";
import { io } from "socket.io-client";

export const ChatContext = createContext();
export const ChatContextProvider = ({ children, user }) => {
  const [userChats, setUserChats] = useState(null);
  const [isUserChatsLoading, setIsUserChatsLoading] = useState(false);
  const [userChatsError, setUserChatsError] = useState(null);
  const [potentialChats, setPotentialChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState(null);
  const [isMessagesLoading, setIsMessagesLoading] = useState(false);
  const [messageError, setMessagesError] = useState(null);
  const [sendTextMessageError, setSendTextMessageError] = useState(null);
  const [newMessage, setNewMessage] = useState(null);
  const [socket, setSocket] = useState(null);
  const [onLineUsers, setOnLineUsers] = useState([]);

  // initial socket

  // console.log("online users : ", onLineUsers);
  useEffect(() => {
    const newSocket = io("http://localhost:3000");
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [user]);
  // add online users
  useEffect(() => {
    if (socket === null) return;
    socket.emit("addNewUser", user?._id);
    socket.on("getOnLineUsers", (res) => {
      setOnLineUsers(res);
    });
    return () => {
      socket.off("getOnLineUsers");
    };
  }, [socket]);

  //send message
  useEffect(() => {
    if (socket === null) return;
    const recipientId = currentChat?.members?.find((id) => id !== user._id);
    socket.emit("sendMessage", { ...newMessage, recipientId });
  }, [newMessage]);
  //receive message
  useEffect(() => {
    if (socket === null) return;
    socket.on("getMessage", (res) => {
      if (currentChat?._id !== res.chatId) return;

      setMessages((prev) => [...prev, res]);
    });
    return () => {
      socket.off("getMessage");
    };
  }, [socket, currentChat]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await getRequest(`${baseUrl}/users`);
      if (response.error) {
        console.log("Error fetching users ", response);
      }
      const chats = response.filter((u) => {
        let isChatCreated = false;
        if (user?._id === u?._id) return false;

        if (userChats) {
          isChatCreated = userChats?.some((chat) => {
            return chat.members[0] === u._id || chat.members[1] === u._id;
          });
        }
        return !isChatCreated;
      });
      setPotentialChats(chats);
    };
    getUsers();
  }, [userChats]);

  useEffect(() => {
    const getUserChats = async () => {
      if (user?._id) {
        setIsUserChatsLoading(true);
        const response = await getRequest(`${baseUrl}/chats/${user?._id}`);
        setIsUserChatsLoading(false);
        if (response.error) {
          return setUserChatsError(response);
        }
        setUserChats(response);
      }
    };
    getUserChats();
  }, [user]);
  useEffect(() => {
    const getMessages = async () => {
      setIsMessagesLoading(true);
      setMessagesError(null);
      const response = await getRequest(
        `${baseUrl}/messages/${currentChat?._id}`
      );
      setIsMessagesLoading(false);
      if (response.error) {
        return setMessagesError(response);
      }
      setMessages(response);
    };

    getMessages();
  }, [currentChat]);

  const updateCurrentChat = useCallback((chat) => {
    setCurrentChat(chat);
  }, []);

  const createChat = useCallback(async (firstId, secondId) => {
    const response = await postRequest(
      `${baseUrl}/chats`,
      JSON.stringify({ firstId, secondId })
    );
    if (response.error) {
      return console.log("Error creating chat ", response);
    }
    setCurrentChat(response);
    setUserChats((prev) => [...prev, response]);
  }, []);

  const deleteChat = async (chat, setChatOptions) => {
    const chatId = chat?._id;
    const response = await deleteRequest(`${baseUrl}/chats/delete/${chatId}`);
    if (response.error) {
      return console.log("Error deleating chat ", response);
    }
    setChatOptions(false);
    const updatedChats = userChats.filter((chat) => chat._id !== chatId);
    setUserChats(updatedChats);
    setCurrentChat(null);
  };

  const sendTextMessage = useCallback(
    async (textMessage, sender, currentChat, setTextMessage) => {
      if (!textMessage) return console.log("you must type something ...");
      const response = await postRequest(
        `${baseUrl}/messages`,
        JSON.stringify({
          chatId: currentChat._id,
          senderId: sender._id,
          text: textMessage,
        })
      );
      if (response.error) {
        return console.log("Error creating chat ", response);
      }
      setNewMessage(response);
      setMessages((prev) => [...prev, response]);
      setTextMessage("");
    },
    []
  );

  return (
    <ChatContext.Provider
      value={{
        userChats,
        isUserChatsLoading,
        userChatsError,
        potentialChats,
        createChat,
        updateCurrentChat,
        messages,
        isMessagesLoading,
        messageError,
        currentChat,
        sendTextMessage,
        currentChat,
        deleteChat,
        onLineUsers,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
