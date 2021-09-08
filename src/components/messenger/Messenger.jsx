import ChatContainer from "./ChatContainer";
import ChatOnline from "../chatOnline/ChatOnline";
import ConversationListContainer from "./ConversationListContainer";
import "./messenger.css";

const Messenger = () => {
  return (
    <div className="messengerWrapper">
      <ConversationListContainer />
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
