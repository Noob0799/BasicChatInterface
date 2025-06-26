import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleAddNewUserModal } from "../../redux/slices/chatsSlice";

const AddUserModal = ({ children }) => {
  const dispatch = useDispatch();
  const { isAddUserModalOpen } = useSelector((state) => state.chats);
  const handleOutsideModalClick = (e) => {
    if (e.target.classList.contains("add-user-modal-container")) {
      dispatch(toggleAddNewUserModal());
    }
  };
  if (!isAddUserModalOpen) return null;
  return ReactDOM.createPortal(
    <div className="add-user-modal-container" onClick={handleOutsideModalClick}>
      {children}
    </div>,
    document.body
  );
};

export default AddUserModal;
