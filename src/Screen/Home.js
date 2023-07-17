import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';
import { createSelector } from 'reselect';
import fetchUser from '../Redux/Action';

const userSelector = (state) => state.user;
const errorSelector = (state) => state.error;

const memoizedUserSelector = createSelector(
  userSelector,
  (user) => user
);

const memoizedErrorSelector = createSelector(
  errorSelector,
  (error) => error
);

function Home() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(memoizedUserSelector);
  const error = useSelector(memoizedErrorSelector);

  const delayedFetchUser = debounce((username) => {
    dispatch(fetchUser(username));
  }, 1500);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setUsername(value);
    delayedFetchUser(value);
  };

  return (
    <div>
      <input type="text" value={username} onChange={handleInputChange} />
      <button type="button">Submit</button>
      {error && <div>{error}</div>}
      {user && (
        <div>
          <h1>{user.name}</h1>
          <p>Company: {user.company}</p>
          <p>Email: {user.email}</p>
          <img src={`https://www.gravatar.com/avatar/${user.gravatar_id}`} alt="Gravatar" />
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
        </div>
      )}
    </div>
  );
}

export default Home;
