import ChatContainer from "./ChatContainer";
import ChatOnline from "./ChatOnline";
import ConversationListContainer from "./ConversationListContainer";
import "./messenger.css";

const Messenger = () => {
  return (
    <div className="messengerWrapper">
      <ConversationListContainer />
      <ChatContainer />
      <ChatOnline />
    </div>
  );
};

export default Messenger;
