import { toast } from "react-toastify";

const loadChildren = children => ({
  type: "LOAD_CHILDREN",
  payload: children
});

export const createChild = childObj => ({
  type: "CREATE_CHILD",
  payload: childObj
});

const removeChild = id => ({
  type: "REMOVE_CHILD",
  payload: id
});

export const allChildren = () => {
  return dispatch => {
    return fetch("http://localhost:80/api/v1/children")
      .then(res => res.json())
      .then(res => dispatch(loadChildren(res)))
      .catch(err => console.log(err));
  };
};

// export const newChild = childInfo => {
//   console.log(childInfo);
//   return dispatch => {
//     return fetch("http://localhost:80/api/v1/children", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       },
//       body: JSON.stringify(childInfo)
//     })
//       .then(res => res.json())
//       .then(res => {
//         console.log(res);
//         dispatch(createChild(res));
//       })
//       .catch(err => console.log(err));
//   };
// };

export const deleteChild = id => {
  return dispatch => {
    return fetch(`http://localhost:80/api/v1/children/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        dispatch(removeChild(res.id));
        toast.error("Child Deleted!", {
          position: toast.POSITION.BOTTOM_CENTER
        });
      })
      .catch(err => console.log(err));
  };
};
