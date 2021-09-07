import BadmintonIcon from "../../assets/badminton.png";
import LogoutIcon from "../../assets/logout.png";
import "./messenger.css";
import ConversationSearch from "../conversationSearch/ConversationSearch";

const Sidebar = () => (
  <div className="conversationList_sidebar">
    <div className="conversationList_sidebar_icon1">
      <div className="icon1_inner">
        <img src={BadmintonIcon} alt="RacketIcon" width="30" />
      </div>
    </div>
    <div className="conversationList_sidebar_icon2">
      <div className="icon1_inner">
        <img src={LogoutIcon} alt="Logout" width="30" />
      </div>
    </div>
  </div>
);

const CompanyHeader = () => (
  <div className="conversationList_header">
    <p className="conversationList_header_text">RacketChat</p>
  </div>
);

const ConversationListContainer = () => {
  return (
    <>
      <Sidebar />
      <div className="conversationList_list_wrapper">
        <CompanyHeader />
        <ConversationSearch />
      </div>
    </>
  );
};

export default ConversationListContainer;
