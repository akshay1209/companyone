import axios from 'axios';

const fetchUser = (username) => async (dispatch) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    const user = response.data;
    
    // Check if the user exists
    if (!user || user.message === 'Not Found') {
      throw new Error('User not found');
    }

    dispatch({ type: 'FETCH_USER_SUCCESS', payload: user });
  } catch (error) {
    dispatch({ type: 'FETCH_USER_ERROR', payload: error.message });
  }
};

export default fetchUser;
