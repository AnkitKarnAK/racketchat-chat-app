import BadmintonIcon from "../../assets/badminton.png";
import LogoutIcon from "../../assets/logout.png";
import "./messenger.css";
import ConversationSearch from "../conversationSearch/ConversationSearch";
import { useAuthContext } from "../../context/auth-context";
import ConversationList from "../conversationList/ConversationList";

const Sidebar = () => {
  const { logoutUser, setToggleContainer } = useAuthContext();

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

const ConversationListContent = ({
  conversations,
  currentChat,
  setCurrentChat,
}) => {
  return (
    <>
      <div className="conversationList_list_wrapper">
        <CompanyHeader />
        <ConversationSearch />
        <ConversationList
          conversations={conversations}
          currentChat={currentChat}
          setCurrentChat={setCurrentChat}
        />
      </div>
    </>
  );
};

const ConversationListContainer = ({
  conversations,
  currentChat,
  setCurrentChat,
}) => {
  const { toggleContainer } = useAuthContext();

  return (
    <>
      <Sidebar />
      <div className="conversationList_container">
        <ConversationListContent
          conversations={conversations}
          currentChat={currentChat}
          setCurrentChat={setCurrentChat}
        />
      </div>
      <div
        className="conversationList_container-responsive"
        style={{
          left: toggleContainer ? "60px" : "-89%",
          backgroundColor: "#005fff",
        }}
      >
        <ConversationListContent
          conversations={conversations}
          currentChat={currentChat}
          setCurrentChat={setCurrentChat}
        />
      </div>
    </>
  );
};

export default ConversationListContainer;
