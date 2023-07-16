import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchGithubUser,
  selectUserData,
  getUserStatus,
} from "../features/userSlice";

const List = ({ searchTerm }) => {
  const userData = useSelector(selectUserData);
  const status = useSelector(getUserStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchTerm) {
      dispatch(fetchGithubUser(searchTerm));
    }
  }, [dispatch, searchTerm]);

  if (status === "loading") {
    return <p>Loading user data...</p>;
  }

  return (
    <div className="App">
      <h1>Github User Data:</h1>

      <div>
        {userData && (
          <>
            <p>Name: {userData.name}</p>
            <p>Company: {userData.company}</p>
            <p>Email: {userData.email}</p>

            <p>Followers: {userData.followers}</p>
            <p>Following: {userData.following}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default List;
