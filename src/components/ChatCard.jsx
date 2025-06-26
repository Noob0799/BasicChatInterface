import { useContext } from "react";
import { ChatContext } from "../contexts/ChatContext";
import { formatTimeStampForDate, formatTimeStampForTime } from "../Utilities";

const ChatCard = (chatObj) => {
  const { state, dispatch } = useContext(ChatContext);
  const handleChatCardClick = () => {
    dispatch({
      type: "SHOW_CHAT_INFO",
      payload: {
        chatObj: chatObj,
      },
      source: "CHAT",
    });
  };
  return (
    <div
      className={`chat-card ${
        state.chatInfo?.id === chatObj.id ? "selected" : ""
      }`}
      onClick={handleChatCardClick}
    >
      <div className="img-container">
        <img src={chatObj.img} alt={chatObj.name} />
      </div>
      <div className="chat-name">{chatObj.name}</div>
      <div className="chat-time">
        <div>{formatTimeStampForTime(chatObj.latestMessageTimeStamp)}</div>
        <div>{formatTimeStampForDate(chatObj.latestMessageTimeStamp)}</div>
      </div>
    </div>
  );
};

export default ChatCard;
