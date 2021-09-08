import "./conversationList.css";

const ConversationPreview = () => {
  return (
    <>
      <div
        className={
          false
            ? "channel-preview__wrapper__selected"
            : "channel-preview__wrapper"
        }
      >
        <div className="channel-preview__item single">
          <p>user a</p>
        </div>
      </div>
    </>
  );
};

const ConversationList = () => {
  return (
    <>
      <div className="team-channel-list">
        <div className="team-channel-list__header">
          <p className="team-channel-list__header__title">Direct Messages</p>
        </div>
        <ConversationPreview />
      </div>
    </>
  );
};

export default ConversationList;
