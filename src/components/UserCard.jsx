import { useDispatch, useSelector } from "react-redux";
import { showChatInfo } from "../redux/slices/chatsSlice";

const UserCard = ({ id, name, img, clearSearch }) => {
  const dispatch = useDispatch();
  const { userSession } = useSelector((state) => state.chats);
  const handleUserClick = () => {
    dispatch(
      showChatInfo({
        chatObj: {
          entityId: id,
          entityType: "USER",
          name: name,
          img: img,
          latestMessageTimeStamp: "",
          messages: [],
        },
        source: "SEARCH",
      })
    );
    clearSearch();
  };
  return (
    <div className="user-card-container" onClick={handleUserClick}>
      <div className="img-container">
        <img src={img} alt={name} />
      </div>
      <div className="user-name">
        {name} {id === userSession.id ? "(You)" : ""}
      </div>
    </div>
  );
};

export default UserCard;
