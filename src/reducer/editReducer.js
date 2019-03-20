const initialState = {};

const editReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECTED_CHILD":
      return action.payload;
    case "EDIT_CHILD":
      const editedChildren = state.map(child => {
        if (child.id === action.payload.id) {
          return { ...child, ...action.payload };
        } else {
          return child;
        }
      });
      return editedChildren;
    default:
      return state;
  }
};

export default editReducer;
