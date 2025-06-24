const MessageCard = ({ content, sentBy, timeStamp }) => {
  return (
    <div className="message-card">
      <div>{content}</div>
      <div>{timeStamp}</div>
    </div>
  );
};

export default MessageCard;
