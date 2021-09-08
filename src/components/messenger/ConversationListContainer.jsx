import BadmintonIcon from "../../assets/badminton.png";
import LogoutIcon from "../../assets/logout.png";
import "./messenger.css";
import ConversationSearch from "../conversationSearch/ConversationSearch";
import { useAuthContext } from "../../context/auth-context";
import ConversationList from "../conversationList/ConversationList";
import React, { useState } from "react";

const Sidebar = ({ setToggleContainer }) => {
  const { logoutUser } = useAuthContext();

  return (
    <div className="conversationList_sidebar">
      <div className="conversationList_sidebar_icon">
        <div className="icon_inner">
          <img
            src={BadmintonIcon}
            alt="RacketIcon"
            width="30"
            onClick={() => {
              setToggleContainer((prevState) => !prevState);
              console.log("click on brand");
            }}
          />
        </div>
      </div>
      <div className="conversationList_sidebar_icon">
        <div className="icon_inner">
          <img src={LogoutIcon} alt="Logout" width="30" onClick={logoutUser} />
        </div>
      </div>
    </div>
  );
};

const CompanyHeader = () => (
  <div className="conversationList_header">
    <p className="conversationList_header_text">RacketChat</p>
  </div>
);

const ConversationListContent = () => {
  return (
    <>
      <div className="conversationList_list_wrapper">
        <CompanyHeader />
        <ConversationSearch />
        <ConversationList />
      </div>
    </>
  );
};

const ConversationListContainer = () => {
  const [toggleContainer, setToggleContainer] = useState(false);

  return (
    <>
      <Sidebar setToggleContainer={setToggleContainer} />
      <div className="channel-list__container">
        <ConversationListContent />
      </div>
      <div
        className="channel-list__container-responsive"
        style={{
          left: toggleContainer ? "50px" : "-89%",
          backgroundColor: "#005fff",
        }}
      >
        <ConversationListContent />
      </div>
    </>
  );
};

export default ConversationListContainer;
