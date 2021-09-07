import ConversationContainer from "./ConversationContainer";
import ConversationListContainer from "./ConversationListContainer";
import "./messenger.css";

const Messenger = () => {
  return (
    <div className="messengerWrapper">
      <ConversationListContainer />
      <ConversationContainer />
    </div>
  );
};

export default Messenger;
