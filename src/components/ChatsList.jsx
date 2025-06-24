import { useEffect, useContext } from "react";
import { ChatContext } from "../contexts/ChatContext";
import SearchEntities from "./SearchEntities";
import ChatCard from "./ChatCard.jsx";

const ChatsList = () => {
  const { state, dispatch } = useContext(ChatContext);
  useEffect(() => {
    fetchChats();
  }, []);
  const fetchChats = () => {
    dispatch({
      type: "GET_CHATS",
    });
  };
  return (
    <section className="chats-list-container">
      <header>Basic Chat Interface</header>
      <SearchEntities />
      <div className="chats-container">
        {state.chatsList?.map((chat) => (
          <ChatCard key={chat.id} {...chat} />
        ))}
      </div>
    </section>
  );
};

export default ChatsList;
