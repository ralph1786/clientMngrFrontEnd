const initialState = {};

const editReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECTED_CHILD":
      return action.payload;
    case "EDIT_CHILD":
      const editedChildren =
        state.id === action.payload.id
          ? { ...state, ...action.payload }
          : state;
      return editedChildren;
    default:
      return state;
  }
};

export default editReducer;
