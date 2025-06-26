import { useContext, useState } from "react";
import { ChatContext } from "../../contexts/ChatContext";

const AddUserForm = () => {
  const [userName, setUserName] = useState("");
  const { dispatch } = useContext(ChatContext);
  const handleUserNameInput = (e) => {
    setUserName(e.target.value);
  };
  const handleCancelModal = () => {
    dispatch({
      type: "TOGGLE_ADD_NEW_USER_MODAL",
    });
  };
  const handleSaveModal = () => {
    if (userName) {
      dispatch({
        type: "ADD_NEW_USER",
        payload: {
          userName: userName,
        },
      });
    }
  };
  return (
    <div className="add-user-modal-body">
      <header>Add New User</header>
      <main>
        <label>User Name: </label>
        <input
          type="text"
          className="user-name-input"
          placeholder="Enter new user name"
          onChange={handleUserNameInput}
          value={userName}
        />
      </main>
      <footer>
        <button onClick={handleCancelModal}>Cancel</button>
        <button onClick={handleSaveModal}>Save</button>
      </footer>
    </div>
  );
};

export default AddUserForm;
