import ChatContainer from "./ChatContainer";
import ChatOnline from "../chatOnline/ChatOnline";
import ConversationListContainer from "./ConversationListContainer";
import "./messenger.css";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/auth-context";
import axios from "axios";

const Messenger = () => {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const { user } = useAuthContext();

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
      />
      <div className="chatOnline">
        <div className="chatOnlineWrapper">
          <ChatOnline />
        </div>
      </div>
    </div>
  );
};

export default Messenger;
