const initialState = {
    user: null,
    isLoading: false,
    error: null
};

function userReducer(state = initialState, action) {
  let user;
  switch (action.type) {
    case 'FETCH_USER':
      return { ...state, user: 'anonymous'};
    case 'FETCH_USER_PENDING':
      return { ...state, isLoading: true };
    case 'FETCH_USER_FULFILLED':
      user = action.payload.data;
      return { ...state, isLoading: false, user };
    case 'FETCH_USER_REJECTED':
      return { ...state, isLoading: false, error: `${action.payload.message}` };
    default:
      return state;
  }
}

export default userReducer;
