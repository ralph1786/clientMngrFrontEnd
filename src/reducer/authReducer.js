const initialState = {
  provider: {}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_PROVIDER":
      return { ...state, provider: action.payload };
    case "LOGOUT_PROVIDER":
      localStorage.removeItem("token");
      return { ...state, provider: {} };
    default:
      return state;
  }
};

export default authReducer;
