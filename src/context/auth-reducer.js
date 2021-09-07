const authReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "FETCH_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "FETCH_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};

export default authReducer;
