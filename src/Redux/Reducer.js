const initialState = {
    user: null,
    loading: false,
    error: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_USER_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'FETCH_USER_SUCCESS':
        if (state.user && state.user.id === action.payload.id) {
          // Data already exists, no need to update the state
          return state;
        }
        return {
          ...state,
          loading: false,
          user: action.payload,
        };
      case 'FETCH_USER_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  