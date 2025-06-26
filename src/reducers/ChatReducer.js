import chats from "../data/Chats.json";
import users from "../data/Users.json";

const modifyChatsList = (chatsList, chatInfo, isDelete) => {
  const chatId = chatInfo.id;
  const filteredChatList = chatsList.filter((chat) => chat.id !== chatId);
  if (!isDelete) {
    filteredChatList.unshift(chatInfo);
  }
  return filteredChatList;
};

const ChatReducer = (state, action) => {
  let newChatsList = [];
  const chatInfo = JSON.parse(JSON.stringify(state.chatInfo));
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
      let chatObj = action.payload.chatObj,
        tempObj;
      if (action.payload.source === "SEARCH") {
        tempObj = state.chatsList.find(
          (chat) => chat.entityId === chatObj.entityId
        );
        chatObj = tempObj ? tempObj : chatObj;
      }
      return {
        ...state,
        chatInfo: chatObj,
      };
    case "SEND_MESSAGE":
      const timeNow = new Date().getTime();
      if (!chatInfo.hasOwnProperty("id")) {
        chatInfo.id = timeNow;
      }
      chatInfo.latestMessageTimeStamp = timeNow;
      chatInfo.messages.push({
        content: action.payload.message,
        sentBy: "Sayantan Roy",
        userId: state.userSession.id,
        timeStamp: timeNow,
      });
      newChatsList = modifyChatsList([...state.chatsList], chatInfo, false);
      return {
        ...state,
        chatsList: newChatsList,
        chatInfo: chatInfo,
      };
    case "SEARCH_ENTITY":
      const searchStr = action.payload.searchStr;
      let matchedUsers = [];
      if (searchStr.length) {
        matchedUsers = users.filter((user) => {
          return user.name.toLowerCase().includes(searchStr.toLowerCase());
        });
      }
      return { ...state, matchedUsers: matchedUsers };
    case "REMOVE_CHAT":
      newChatsList = modifyChatsList([...state.chatsList], chatInfo, true);
      return {
        ...state,
        chatsList: newChatsList,
        chatInfo: null,
      };
    default:
      ``;
      return { ...state };
  }
};

export default ChatReducer;
