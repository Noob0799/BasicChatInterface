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
  return (
    <section className="chat-info-container">
      {state.chatInfo ? (
        <>
          <header>{state.chatInfo.name}</header>
          <div>
            {state.chatInfo.messages?.map((message, idx) => (
              <MessageCard key={idx} {...message} />
            ))}
          </div>
          <footer>
            <textarea
              placeholder="Type a message"
              onChange={handleInputMessage}
              value={newMsg}
            ></textarea>
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
