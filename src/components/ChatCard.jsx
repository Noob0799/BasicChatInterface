import { useDispatch, useSelector } from "react-redux";
import { showChatInfo } from "../redux/slices/chatsSlice";
import { formatTimeStampForDate, formatTimeStampForTime } from "../Utilities";

const ChatCard = (chatObj) => {
  const dispatch = useDispatch();
  const { chatInfo } = useSelector((state) => state.chats);
  const handleChatCardClick = () => {
    dispatch(showChatInfo({chatObj: chatObj, source: "CHAT"}));
  };
  return (
    <div
      className={`chat-card ${chatInfo?.id === chatObj.id ? "selected" : ""}`}
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
