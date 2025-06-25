import { useState, useContext, useEffect } from "react";
import { ChatContext } from "../contexts/ChatContext";
import MessageCard from "./MessageCard";

const ChatInfo = () => {
  const { state, dispatch } = useContext(ChatContext);
  const [newMsg, setNewMsg] = useState("");
  const handleInputMessage = (e) => {
    setNewMsg(e.target.value);
  };
  const handleSendMessage = () => {
    if (newMsg.length) {
      dispatch({
        type: "SEND_MESSAGE",
        payload: {
          message: newMsg,
        },
      });
      setNewMsg("");
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
            <img
              src={state.chatInfo.img}
              alt={state.chatInfo.name}
              height="100"
              width="100"
            />
            <div>{state.chatInfo.name}</div>
            {state.chatInfo.id && <div onClick={handleDeleteChat}>Delete</div>}
          </header>
          <div>
            {state.chatInfo.messages?.map((message, idx) => (
              <MessageCard
                key={idx}
                content={message.content}
                timeStamp={message.timeStamp}
                sentBy={
                  message.userId === state.userSession.id
                    ? "You"
                    : message.sentBy
                }
                img={
                  message.userId === state.userSession.id
                    ? state.userSession.img
                    : state.chatInfo.img
                }
              />
            ))}
          </div>
          <footer>
            <input
              type="text"
              placeholder="Type a message"
              onChange={handleInputMessage}
              value={newMsg}
            ></input>
            <button onClick={handleSendMessage}>Send</button>
          </footer>
        </>
      ) : (
        <div>Click on a chat to see your recent messages</div>
      )}
    </section>
  );
};

export default ChatInfo;
