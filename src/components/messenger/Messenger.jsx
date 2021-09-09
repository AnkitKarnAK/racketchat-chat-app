import ChatContainer from "./ChatContainer";
import ChatOnline from "../chatOnline/ChatOnline";
import ConversationListContainer from "./ConversationListContainer";
import "./messenger.css";
import { useEffect, useRef, useState } from "react";
import { useAuthContext } from "../../context/auth-context";
import axios from "axios";
import { io } from "socket.io-client";

const Messenger = () => {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [socketUsers, setSocketUsers] = useState([]);
  const socket = useRef();
  const { user } = useAuthContext();

  useEffect(() => {
    socket.current = io("https://racketapi.ankitkarn.repl.co");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      setSocketUsers(
        allUsers.filter((allUser) =>
          users.some((u) => u.userId === allUser._id)
        )
      );
    });
  }, [user._id, allUsers]);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const res = await axios.get(
          "https://racketapi.ankitkarn.repl.co/users/all"
        );
        setAllUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllUsers();
  }, [user._id]);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const response = await axios.get(
          `https://racketapi.ankitkarn.repl.co/conversations/` + user._id
        );
        setConversations(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchConversations();
  }, [user._id]);

  useEffect(() => {
    const getMessages = async () => {
      setMessages([]);
      try {
        const res = await axios.get(
          "https://racketapi.ankitkarn.repl.co/messages/" + currentChat?._id
        );
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  return (
    <div className="messengerWrapper">
      <ConversationListContainer
        conversations={conversations}
        setCurrentChat={setCurrentChat}
      />
      <ChatContainer
        currentChat={currentChat}
        messages={messages}
        setMessages={setMessages}
        socket={socket}
      />
      <div className="chatOnline">
        <div className="chatOnlineWrapper">
          <ChatOnline
            allUsers={allUsers}
            socketUsers={socketUsers}
            setCurrentChat={setCurrentChat}
          />
        </div>
      </div>
    </div>
  );
};

export default Messenger;
