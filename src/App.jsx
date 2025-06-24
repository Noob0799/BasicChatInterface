import { ChatContextProvider } from "./contexts/ChatContext.jsx";
import ChatsList from "./components/ChatsList.jsx";
import ChatInfo from "./components/ChatInfo.jsx";

function App() {
  return (
    <div className="main-container">
      <ChatContextProvider>
        <ChatsList />
        <ChatInfo />
      </ChatContextProvider>
    </div>
  );
}

export default App;
