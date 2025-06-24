import { createContext, useReducer } from "react";
import ChatReducer from "../reducers/ChatReducer";

const initialState = { chatsList: [], chatInfo: null };

export const ChatContext = createContext(initialState);

export const ChatContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ChatReducer, initialState);
  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
