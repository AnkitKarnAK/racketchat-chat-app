import "./chatOnline.css";

const ChatOnline = () => {
  return (
    <div className="chatOnlineContainer">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            className="chatOnlineImg"
            src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="friend"
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">Admin AK</span>
      </div>
    </div>
  );
};

export default ChatOnline;
