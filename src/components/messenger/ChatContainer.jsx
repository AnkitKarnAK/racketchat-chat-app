import axios from "axios";
import { useAuthContext } from "../../context/auth-context";
import Message from "../message/Message";
import "./messenger.css";
import { useRef, useState, useEffect } from "react";

const ChatContainer = ({
  currentChat,
  messages,
  setMessages,
  allUsers,
  socket,
}) => {
  const { user, setToggleContainer } = useAuthContext();
  const [newMessage, setNewMessage] = useState("");

  const scrollRef = useRef();

  const receiverId = currentChat?.members.find((member) => member !== user._id);

  const currentChatUser = allUsers.find((user) => user._id === receiverId);

  const messageSendHandler = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessage,
    });

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
    <div
      className="chatBox"
      onClick={() => {
        setToggleContainer(false);
      }}
    >
      <div className="chatBoxHeader">{currentChatUser?.username}</div>
      <div className="chatBoxWrapper">
        {currentChat ? (
          <>
            <div className="chatBoxTop">
              {messages.map((message) => (
                <div ref={scrollRef} key={message._id}>
                  <Message
                    message={message}
                    own={message.sender === user._id}
                    key={message._id}
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
