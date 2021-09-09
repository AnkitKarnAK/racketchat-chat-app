import axios from "axios";
import { useAuthContext } from "../../context/auth-context";
import Message from "../message/Message";
import "./messenger.css";
import { useState } from "react";

const ChatContainer = ({ currentChat, messages, setMessages }) => {
  const { user } = useAuthContext();
  const [newMessage, setNewMessage] = useState("");

  const messageSendHandler = async (e) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    try {
      const res = await axios.post(
        "https://racketapi.ankitkarn.repl.co/messages",
        message
      );
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="chatBox">
      <div className="chatBoxWrapper">
        {currentChat ? (
          <>
            <div className="chatBoxTop">
              {messages.map((message) => (
                <Message
                  message={message}
                  own={message.sender === user._id}
                  key={message._id}
                />
              ))}
            </div>
            <div className="chatBoxBottom">
              <textarea
                className="chatMessageInput"
                placeholder="write something..."
                onChange={(e) => setNewMessage(e.target.value)}
                value={newMessage}
              ></textarea>
              <button className="chatSubmitButton" onClick={messageSendHandler}>
                Send
              </button>
            </div>
          </>
        ) : (
          <span className="noConversationText">
            Open a conversation to start a chat
          </span>
        )}
      </div>
    </div>
  );
};

export default ChatContainer;
