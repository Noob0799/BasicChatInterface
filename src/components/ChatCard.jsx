import { useContext } from "react";
import { ChatContext } from "../contexts/ChatContext";
import { formatTimeStamp } from "../Utilities";

const ChatCard = (chatObj) => {
  const { dispatch } = useContext(ChatContext);
  const handleChatCardClick = () => {
    dispatch({
      type: "SHOW_CHAT_INFO",
      payload: {
        chatObj: chatObj,
      },
    });
  };
  return (
    <div className="chat-card" onClick={handleChatCardClick}>
      <div><img src={chatObj.img} alt={chatObj.name} height="100" width="100" /></div>
      <div>{chatObj.name}</div>
      <div>{formatTimeStamp(chatObj.latestMessageTimeStamp)}</div>
    </div>
  );
};

export default ChatCard;
