import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChats } from "../redux/slices/chatsSlice";
import SearchEntities from "./SearchEntities";
import ChatCard from "./ChatCard.jsx";

const ChatsList = () => {
  const dispatch = useDispatch();
  const { chatsList } = useSelector((state) => state.chats);
  useEffect(() => {
    fetchChats();
  }, []);
  const fetchChats = () => {
    dispatch(getChats());
  };
  return (
    <section className="chats-list-container">
      <header>Basic Chat Interface</header>
      <SearchEntities />
      <main className="chats-container">
        {chatsList?.map((chat) => (
          <ChatCard key={chat.id} {...chat} />
        ))}
      </main>
    </section>
  );
};

export default ChatsList;
