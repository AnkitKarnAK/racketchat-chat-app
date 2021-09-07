import "./conversationSearch.css";
import { SearchIcon } from "../../assets/SearchIcon";

const ConversationSearch = () => {
  return (
    <div className="conversationSearch_container">
      <div className="conversationSearch_input_wrapper">
        <div className="conversationSearch_input_icon">
          <SearchIcon />
        </div>
        <input
          className="conversationSearch_input_text"
          placeholder="Search"
          type="text"
        />
      </div>
    </div>
  );
};

export default ConversationSearch;
