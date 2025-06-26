import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeChat, sendMessage } from "../redux/slices/chatsSlice";
import MessageCard from "./MessageCard";

const ChatInfo = () => {
  const dispatch = useDispatch();
  const { chatInfo, userSession } = useSelector((state) => state.chats);
  const inputRef = useRef();
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  }, [chatInfo?.entityId]);
  useEffect(() => {
    const messsagesList = chatInfo?.messages;
    if (messsagesList?.length) {
      const latestMessageId = messsagesList[messsagesList.length - 1].id;
      document
        .getElementById(`message-card-${latestMessageId}`)
        .scrollIntoView();
    }
    inputRef.current?.focus();
  }, [chatInfo?.messages]);
  const handleInputMessage = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      handleSendMessage();
    } else {
      inputRef.current.value = e.target.value;
    }
  };
  const handleSendMessage = () => {
    if (inputRef.current.value.length) {
      dispatch(sendMessage({ message: inputRef.current.value }));
      inputRef.current.value = "";
    }
  };
  const handleDeleteChat = () => {
    dispatch(removeChat());
  };
  return (
    <section className="chat-info-container">
      {chatInfo ? (
        <>
          <header>
            <div className="img-container">
              <img
                src={chatInfo.img}
                alt={chatInfo.name}
                height="100"
                width="100"
              />
            </div>
            <div className="chat-name">
              {chatInfo.name}{" "}
              {userSession.id === chatInfo.entityId ? " (You)" : ""}
            </div>
            {chatInfo.id && (
              <div className="delete-chat-btn-container">
                <button onClick={handleDeleteChat}>Delete</button>
              </div>
            )}
          </header>
          <main>
            {chatInfo.messages?.map((message) => (
              <MessageCard
                key={message.id}
                messageId={message.id}
                content={message.content}
                timeStamp={message.timeStamp}
                sentBy={
                  message.userId === userSession.id ? "You" : message.sentBy
                }
                userId={message.userId}
                img={
                  message.userId === userSession.id
                    ? userSession.img
                    : chatInfo.img
                }
              />
            ))}
          </main>
          <footer>
            <input
              type="text"
              placeholder="Type a message"
              ref={inputRef}
              onKeyUp={handleInputMessage}
              defaultValue=""
            ></input>
            <button onClick={handleSendMessage}>Send</button>
          </footer>
        </>
      ) : (
        <div className="chat-info-fallback-container">
          <div>Click on a chat to see your recent messages</div>
        </div>
      )}
    </section>
  );
};

export default ChatInfo;
