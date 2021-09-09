import axios from "axios";
import { useAuthContext } from "../../context/auth-context";
import Message from "../message/Message";
import "./messenger.css";
import { useRef, useState, useEffect } from "react";

const ChatContainer = ({ currentChat, messages, setMessages }) => {
  const { user } = useAuthContext();
  const [newMessage, setNewMessage] = useState("");

  const scrollRef = useRef();

  const messageSendHandler = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;
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

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chatBox">
      <div className="chatBoxWrapper">
        {currentChat ? (
          <>
            <div className="chatBoxTop">
              {messages.map((message) => (
                <div ref={scrollRef} key={message._id}>
                  <Message
                    message={message}
                    own={message.sender === user._id}
                  />
                </div>
              ))}
            </div>
            <div className="chatBoxBottom">
              <form onSubmit={messageSendHandler}>
                <input
                  className="chatMessageInput"
                  placeholder="write something..."
                  onChange={(e) => setNewMessage(e.target.value)}
                  value={newMessage}
                ></input>
                <button className="chatSubmitButton" type="submit">
                  Send
                </button>
              </form>
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
