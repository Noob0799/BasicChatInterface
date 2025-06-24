import chats from "../data/Chats.json";

const ChatReducer = (state, action) => {
  switch (action.type) {
    case "GET_CHATS":
      const sortedChats = chats.sort(
        (c1, c2) => c2.latestMessageTimeStamp - c1.latestMessageTimeStamp
      );
      return {
        ...state,
        chatsList: sortedChats,
      };
    case "SHOW_CHAT_INFO":
      return {
        ...state,
        chatInfo: action.payload?.chatObj ? action.payload?.chatObj : null,
      };
    case "SEND_MESSAGE":
      const chatInfo = JSON.parse(JSON.stringify(state.chatInfo));
      chatInfo.messages.push({
        content: action.payload.message,
        sentBy: "Sayantan Roy",
        timeStamp: new Date().getTime(),
      });
      return {
        ...state,
        chatInfo: chatInfo,
      };
    case "REMOVE_CHAT":
      return {};
    default:
      return { ...state };
  }
};

export default ChatReducer;
