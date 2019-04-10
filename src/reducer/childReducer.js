const initialState = {
  children: []
};

const childReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_CHILDREN":
      return {
        ...state,
        children: action.payload
      };
    case "CREATE_CHILD":
      return {
        ...state,
        children: [...state.children, action.payload]
      };
    case "REMOVE_CHILD":
      return {
        children: state.children.filter(child => child.id !== action.payload)
      };
    default:
      return state;
  }
};

export default childReducer;
