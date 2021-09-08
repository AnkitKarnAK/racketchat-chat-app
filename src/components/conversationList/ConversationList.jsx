import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/auth-context";
import "./conversationList.css";
import axios from "axios";

const Conversation = ({ conversation }) => {
  const { user: currentUser } = useAuthContext();
  const [conversationUser, setConversationUser] = useState(null);

  useEffect(() => {
    const friendId = conversation.members.find(
      (member) => member !== currentUser._id
    );

    const getUser = async () => {
      try {
        const res = await axios(
          "https://racketapi.ankitkarn.repl.co/users?userId=" + friendId
        );
        setConversationUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <>
      <div className="conversation">
        <img
          className="conversationImg"
          src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="conversation"
        />
        <span className="conversationName">{conversationUser.username}</span>
      </div>
    </>
  );
};

const ConversationList = ({ conversations }) => {
  return (
    <>
      <div className="conversationList">
        <div className="conversationList_header">
          <p className="conversationList_header_title">Conversations</p>
        </div>
        <div className="conversation_wrapper">
          {conversations.map((conversation) => (
            <Conversation conversation={conversation} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ConversationList;