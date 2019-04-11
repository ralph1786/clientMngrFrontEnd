const initialState = [];

const parentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_PARENTS":
      return action.payload;
    case "REGISTER_PARENT":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default parentReducer;
