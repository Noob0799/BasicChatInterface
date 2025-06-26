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
    if (searchStr) {
      debouncedSearch(searchStr);
    } else {
      dispatch({
        type: "CLEAR_SEARCH_SUGGESTIONS",
      });
    }
    return () => {
      debouncedSearch.cancel();
    };
  }, [searchStr, debouncedSearch]);
  const handleSearchKey = (e) => {
    setSearchStr(e.target.value);
  };
  const handleClearSearch = () => {
    setSearchStr("");
    dispatch({
      type: "CLEAR_SEARCH_SUGGESTIONS",
    });
  };
  const handleAddNewUser = () => {
    dispatch({
      type: "TOGGLE_ADD_NEW_USER_MODAL",
    });
  }
  return (
    <>
      <div className="search-container">
        <div className="search-box-container">
          <input
            type="text"
            className="search-box"
            placeholder="Search for a contact to start a chat"
            onChange={handleSearchKey}
            value={searchStr}
          />
          <button className="add-user-btn" onClick={handleAddNewUser}>Add</button>
        </div>

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
