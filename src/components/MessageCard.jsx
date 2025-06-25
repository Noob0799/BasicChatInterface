const MessageCard = ({ content, sentBy, timeStamp, img }) => {
  return (
    <div className="message-card">
      <div><img src={img} alt={sentBy} height="100" width="100" /></div>
      <div>{sentBy}</div>
      <div>{content}</div>
      <div>{timeStamp}</div>
    </div>
  );
};

export default MessageCard;
