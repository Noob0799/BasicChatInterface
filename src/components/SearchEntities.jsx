import { useEffect, useState, useContext } from "react";
import { ChatContext } from "../contexts/ChatContext";
import UserCard from "./UserCard";

const SearchEntities = () => {
  const [searchStr, setSearchStr] = useState("");
  const { state, dispatch } = useContext(ChatContext);
  useEffect(() => {
    dispatch({
      type: "SEARCH_ENTITY",
      payload: {
        searchStr: searchStr,
      },
    });
  }, [searchStr]);
  const handleSearchKey = (e) => {
    setSearchStr(e.target.value);
  };
  const handleClearSearch = () => {
    setSearchStr("");
  }
  return (
    <>
      <div className="search-container">
        <div className="search-box">
          <input type="text" onChange={handleSearchKey} value={searchStr} />
        </div>
        <div className="search-results">
          {state.matchedUsers?.map((user) => (
            <UserCard key={user.id} {...user} clearSearch={handleClearSearch} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchEntities;
