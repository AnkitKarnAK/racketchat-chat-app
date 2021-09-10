import "./chatOnline.css";
import { useState, useEffect } from "react";
import axios from "axios";

const ChatOnline = ({ allUsers, currentId, socketUsers, setCurrentChat }) => {
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [offlineUsers, setOfflineUsers] = useState([]);

  useEffect(() => {
    setOnlineUsers(
      allUsers
        .filter((allUser) => socketUsers.some((u) => u._id === allUser._id))
        .filter((u) => u._id !== currentId)
    );
    setOfflineUsers(
      allUsers
        .filter((allUser) => socketUsers.some((u) => u._id !== allUser._id))
        .filter((u) => u._id !== currentId)
    );
  }, [allUsers, currentId, socketUsers]);

  const conversationHandler = async (user) => {
    try {
      const res = await axios.get(
        `https://racketapi.ankitkarn.repl.co/conversations/find/${currentId}/${user._id}`
      );
      setCurrentChat(res.data);
    } catch (err) {}
  };

  return (
    <div className="chatOnlineContainer">
      <div className="chatOnlineHeader">Online Users:</div>
      {onlineUsers?.map((onlineUser) => (
        <div
          className="chatOnlineFriend"
          key={onlineUser._id}
          onClick={() => conversationHandler(onlineUser)}
        >
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="friend"
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">{onlineUser.username}</span>
        </div>
      ))}
      <div className="chatOfflineHeader">Offline Users:</div>
      {offlineUsers?.map((offlineUser) => (
        <div
          className="chatOfflineFriend"
          key={offlineUser._id}
          onClick={() => conversationHandler(offlineUser)}
        >
          <div className="chatOfflineImgContainer">
            <img
              className="chatOfflineImg"
              src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="friend"
            />
          </div>
          <span className="chatOfflineName">{offlineUser.username}</span>
        </div>
      ))}
    </div>
  );
};

export default ChatOnline;
