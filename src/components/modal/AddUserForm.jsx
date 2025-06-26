import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  toggleAddNewUserModal,
  addNewUser,
} from "../../redux/slices/chatsSlice";

const AddUserForm = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    inputRef.current.value = "";
    inputRef.current.focus();
  }, []);
  const handleUserNameInput = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      handleSaveModal();
    } else {
      inputRef.current.value = e.target.value;
    }
  };
  const handleCancelModal = () => {
    dispatch(toggleAddNewUserModal());
  };
  const handleSaveModal = () => {
    if (inputRef.current.value.length) {
      dispatch(addNewUser({ name: inputRef.current.value }));
      inputRef.current.value = "";
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
          ref={inputRef}
          onKeyUp={handleUserNameInput}
          defaultValue=""
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
