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
  };
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-box"
          placeholder="Search or start a new chat"
          onChange={handleSearchKey}
          value={searchStr}
        />
        {state.matchedUsers?.length ? (
          <div className="search-results">
            {state.matchedUsers?.map((user) => (
              <UserCard
                key={user.id}
                {...user}
                clearSearch={handleClearSearch}
              />
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SearchEntities;
