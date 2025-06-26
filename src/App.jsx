import ChatsList from "./components/ChatsList.jsx";
import ChatInfo from "./components/ChatInfo.jsx";
import AddUserModal from "./components/modal/AddUserModal.jsx";
import AddUserForm from "./components/modal/AddUserForm.jsx";

function App() {
  return (
    <div className="main-container">
      <ChatsList />
      <ChatInfo />
      <AddUserModal>
        <AddUserForm />
      </AddUserModal>
    </div>
  );
}

export default App;
