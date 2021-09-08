import ChatContainer from "./ChatContainer";
import ChatOnline from "../chatOnline/ChatOnline";
import ConversationListContainer from "./ConversationListContainer";
import "./messenger.css";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/auth-context";
import axios from "axios";

const Messenger = () => {
  const [conversations, setConversations] = useState([]);
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

  return (
    <div className="messengerWrapper">
      <ConversationListContainer conversations={conversations} />
      <ChatContainer />
      <div className="chatOnline">
        <div className="chatOnlineWrapper">
          <ChatOnline />
        </div>
      </div>
    </div>
  );
};

export default Messenger;
