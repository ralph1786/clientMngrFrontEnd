const initialState = [];

const childReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_CHILDREN":
      return action.payload;
    case "CREATE_CHILD":
      return [...state, action.payload];
    case "REMOVE_CHILD":
      return state.filter(child => child.id !== action.payload);
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

export default childReducer;

// const initialState = {
//   children: [],
//   searchTerm: "",
//   filtered: []
// };

// const childReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "LOAD_CHILDREN":
//       return { ...state, children: action.payload };
//     case "CREATE_CHILD":
//       return {...state};
//     default:
//       return state;
//   }
// };

// export default childReducer;
