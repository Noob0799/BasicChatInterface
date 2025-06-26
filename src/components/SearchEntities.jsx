import { useEffect, useState, useContext, useCallback } from "react";
import { ChatContext } from "../contexts/ChatContext";
import UserCard from "./UserCard";
import debounce from "lodash/debounce";

const SearchEntities = () => {
  const [searchStr, setSearchStr] = useState("");
  const { state, dispatch } = useContext(ChatContext);
  const debouncedSearch = useCallback(
    debounce((query) => {
      dispatch({
        type: "SEARCH_ENTITY",
        payload: {
          searchStr: query,
        },
      });
    }, 500),
    []
  );
  useEffect(() => {
    debouncedSearch(searchStr);
    return () => {
      debouncedSearch.cancel();
    };
  }, [searchStr, debouncedSearch]);
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
