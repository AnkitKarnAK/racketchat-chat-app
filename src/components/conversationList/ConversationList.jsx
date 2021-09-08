import "./conversationList.css";

const Conversation = () => {
  return (
    <>
      <div className="conversation">
        <img
          className="conversationImg"
          src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="conversation"
        />
        <span className="conversationName">User account 2</span>
      </div>
    </>
  );
};

const ConversationList = () => {
  return (
    <>
      <div className="conversationList">
        <div className="conversationList_header">
          <p className="conversationList_header_title">Conversations</p>
        </div>
        <div className="conversation_wrapper">
          <Conversation />
          <Conversation />
          <Conversation />
        </div>
      </div>
    </>
  );
};

export default ConversationList;
