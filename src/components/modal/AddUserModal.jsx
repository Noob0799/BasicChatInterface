import { useContext } from "react";
import ReactDOM from "react-dom";
import { ChatContext } from "../../contexts/ChatContext";

const AddUserModal = ({ children }) => {
  const { state, dispatch } = useContext(ChatContext);
  const handleOutsideModalClick = (e) => {
    if (e.target.classList.contains("add-user-modal-container")) {
      dispatch({
        type: "TOGGLE_ADD_NEW_USER_MODAL",
      });
    }
  };
  if (!state.isAddUserModalOpen) return null;
  return ReactDOM.createPortal(
    <div className="add-user-modal-container" onClick={handleOutsideModalClick}>
      {children}
    </div>,
    document.body
  );
};

export default AddUserModal;
