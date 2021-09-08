import Message from "../message/Message";
import "./messenger.css";

const ChatContainer = () => {
  return (
    <div className="chatBox">
      <div className="chatBoxWrapper">
        <div className="chatBoxTop">
          <Message />
          <Message own={true} />
          <Message />
          <Message own={true} />
          <Message />
          <Message own={true} />
          <Message own={true} />
        </div>
        <div className="chatBoxBottom">
          <textarea
            className="chatMessageInput"
            placeholder="write something..."
          ></textarea>
          <button className="chatSubmitButton">Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
