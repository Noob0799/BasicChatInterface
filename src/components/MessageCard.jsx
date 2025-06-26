import { useSelector } from "react-redux";
import { formatTimeStampForDate, formatTimeStampForTime } from "../Utilities";

const MessageCard = ({ messageId, content, sentBy, userId, timeStamp, img }) => {
  const { userSession } = useSelector((state) => state.chats);
  return (
    <div
      id={`message-card-${messageId}`}
      className="message-card"
      style={{
        alignSelf: userId === userSession.id ? "flex-end" : "flex-start",
      }}
    >
      <div className="user-info">
        <div className="message-sender">{sentBy}</div>
        <div className="message-time">
          <div>{formatTimeStampForTime(timeStamp)}</div>
          <div>{formatTimeStampForDate(timeStamp)}</div>
        </div>
      </div>
      <div className="message-content">{content}</div>
    </div>
  );
};

export default MessageCard;
