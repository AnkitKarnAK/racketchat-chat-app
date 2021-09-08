import "./conversationList.css";

const ConversationPreview = () => {
  return (
    <>
      <div
        className={
          false
            ? "conversationPreview_wrapper_selected"
            : "conversationPreview_wrapper"
        }
      >
        <div className="conversationPreview_item single">
          <p>user a</p>
        </div>
      </div>
    </>
  );
};

const ConversationList = () => {
  return (
    <>
      <div className="conversationList">
        <div className="conversationList_header">
          <p className="conversationList_header_title">Direct Messages</p>
        </div>
        <ConversationPreview />
      </div>
    </>
  );
};

export default ConversationList;
