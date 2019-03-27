import { toast } from "react-toastify";
const initialState = {
  provider: {},
  parent: {}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_PROVIDER":
      return { ...state, provider: action.payload };
    case "SET_PROVIDER":
      return { ...state, provider: action.payload };
    case "LOGIN_PARENT":
      return { ...state, parent: action.payload };
    case "LOGOUT_PARENT":
      localStorage.removeItem("token");
      toast.success("Goodbye!!!", {
        position: toast.POSITION.BOTTOM_CENTER
      });
      return { ...state, parent: {} };
    case "LOGOUT_PROVIDER":
      localStorage.removeItem("token");
      toast.success("Goodbye!!!", {
        position: toast.POSITION.BOTTOM_CENTER
      });
      return { ...state, provider: {} };
    default:
      return state;
  }
};

export default authReducer;
