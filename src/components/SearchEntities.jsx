import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchEntity,
  clearSearchSuggestions,
  toggleAddNewUserModal,
} from "../redux/slices/chatsSlice";
import UserCard from "./UserCard";
import debounce from "lodash/debounce";

const SearchEntities = () => {
  const [searchStr, setSearchStr] = useState("");
  const dispatch = useDispatch();
  const { matchedUsers } = useSelector((state) => state.chats);
  const debouncedSearch = useCallback(
    debounce((query) => {
      dispatch(searchEntity({ query: query }));
    }, 500),
    []
  );
  useEffect(() => {
    if (searchStr) {
      debouncedSearch(searchStr);
    } else {
      dispatch(clearSearchSuggestions());
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
    dispatch(clearSearchSuggestions());
  };
  const handleAddNewUser = () => {
    dispatch(toggleAddNewUserModal());
  };
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
          <button className="add-user-btn" onClick={handleAddNewUser}>
            Add
          </button>
        </div>

        {matchedUsers?.length ? (
          <div className="search-results">
            {matchedUsers?.map((user) => (
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
