import { useState, useContext, useEffect, useRef } from "react";
import { ChatContext } from "../contexts/ChatContext";
import MessageCard from "./MessageCard";

const ChatInfo = () => {
  const { state, dispatch } = useContext(ChatContext);
  const inputRef = useRef();
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }, [state.chatInfo?.entityId]);
  useEffect(() => {
    const messsagesList = state.chatInfo?.messages;
    if (messsagesList?.length) {
      const latestMessageId = messsagesList[messsagesList.length - 1].id;
      document
        .getElementById(`message-card-${latestMessageId}`)
        .scrollIntoView();
    }
  }, [state.chatInfo?.messages]);
  const handleInputMessage = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      handleSendMessage();
    } else {
      inputRef.current.value = e.target.value;
    }
  };
  const handleSendMessage = () => {
    if (inputRef.current.value.length) {
      dispatch({
        type: "SEND_MESSAGE",
        payload: {
          message: inputRef.current.value,
        },
      });
      inputRef.current.value = "";
    }
  };
  const handleDeleteChat = () => {
    dispatch({
      type: "REMOVE_CHAT",
    });
  };
  return (
    <section className="chat-info-container">
      {state.chatInfo ? (
        <>
          <header>
            <div className="img-container">
              <img
                src={state.chatInfo.img}
                alt={state.chatInfo.name}
                height="100"
                width="100"
              />
            </div>
            <div className="chat-name">
              {state.chatInfo.name}{" "}
              {state.userSession.id === state.chatInfo.entityId ? " (You)" : ""}
            </div>
            {state.chatInfo.id && (
              <button className="delete-chat-btn" onClick={handleDeleteChat}>
                Delete
              </button>
            )}
          </header>
          <main>
            {state.chatInfo.messages?.map((message) => (
              <MessageCard
                key={message.id}
                messageId={message.id}
                content={message.content}
                timeStamp={message.timeStamp}
                sentBy={
                  message.userId === state.userSession.id
                    ? "You"
                    : message.sentBy
                }
                userId={message.userId}
                img={
                  message.userId === state.userSession.id
                    ? state.userSession.img
                    : state.chatInfo.img
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
