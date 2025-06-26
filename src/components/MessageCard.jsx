import { useContext } from "react";
import { ChatContext } from "../contexts/ChatContext";
import { formatTimeStampForDate, formatTimeStampForTime } from "../Utilities";

const MessageCard = ({ messageId, content, sentBy, userId, timeStamp, img }) => {
  const { state } = useContext(ChatContext);
  return (
    <div
      id={`message-card-${messageId}`}
      className="message-card"
      style={{
        alignSelf: userId === state.userSession.id ? "flex-end" : "flex-start",
      }}
    >
      <div className="user-info">
        <div>{sentBy}</div>
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
