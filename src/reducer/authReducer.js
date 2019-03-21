const initialState = {
  provider: {},
  parent: {}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_PROVIDER":
      return { ...state, provider: action.payload };
    case "LOGIN_PARENT":
      return { ...state, parent: action.payload };
    case "LOGOUT_PARENT":
      localStorage.removeItem("token");
      return { ...state, parent: {} };
    case "LOGOUT_PROVIDER":
      localStorage.removeItem("token");
      return { ...state, provider: {} };
    default:
      return state;
  }
};

export default authReducer;
