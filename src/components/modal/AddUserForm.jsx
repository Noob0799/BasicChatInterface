import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  toggleAddNewUserModal,
  addNewUser,
} from "../../redux/slices/chatsSlice";

const AddUserForm = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const handleUserNameInput = (e) => {
    setUserName(e.target.value);
  };
  const handleCancelModal = () => {
    dispatch(toggleAddNewUserModal());
  };
  const handleSaveModal = () => {
    if (userName) {
      dispatch(addNewUser({ name: userName }));
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
