const initialState = [];

const parentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_PARENTS":
      return action.payload;
    default:
      return state;
  }
};

export default parentReducer;
