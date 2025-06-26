import { useContext } from "react";
import { ChatContext } from "../contexts/ChatContext";

const UserCard = ({ id, name, img, clearSearch }) => {
  const { state, dispatch } = useContext(ChatContext);
  const handleUserClick = () => {
    dispatch({
      type: "SHOW_CHAT_INFO",
      payload: {
        chatObj: {
          entityId: id,
          entityType: "USER",
          name: name,
          img: img,
          latestMessageTimeStamp: "",
          messages: [],
        },
        source: "SEARCH"
      },
    });
    clearSearch();
  };
  return (
    <div className="user-card-container" onClick={handleUserClick}>
      <div className="img-container">
        <img src={img} alt={name} />
      </div>
      <div>
        {name} {id === state.userSession.id ? "(You)" : ""}
      </div>
    </div>
  );
};

export default UserCard;
