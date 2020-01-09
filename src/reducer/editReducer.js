const initialState = {
  childToEdit: {}
};

const editReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECTED_CHILD":
      return { ...state, childToEdit: { ...action.payload } };
    // case "EDIT_CHILD":
    //   const editedChildren =
    //     state.id === action.payload.id
    //       ? { ...state, ...action.payload }
    //       : state;
    //   return editedChildren;
    default:
      return state;
  }
};

export default editReducer;
