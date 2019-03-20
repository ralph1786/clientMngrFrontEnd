const loadChildren = children => ({
  type: "LOAD_CHILDREN",
  payload: children
});

const createChild = childObj => ({
  type: "CREATE_CHILD",
  payload: childObj
});

const editChild = childObj => ({
  type: "EDIT_CHILD",
  payload: childObj
});

const removeChild = id => ({
  type: "REMOVE_CHILD",
  payload: id
});

export const allChildren = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/children")
      .then(res => res.json())
      .then(res => dispatch(loadChildren(res)))
      .catch(err => console.log(err));
  };
};

export const newChild = childInfo => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/children", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(childInfo)
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        dispatch(createChild(res));
      })
      .catch(err => console.log(err));
  };
};

export const deleteChild = id => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/children/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(res => dispatch(removeChild(res.id)))
      .catch(err => console.log(err));
  };
};

export const updateChild = childObj => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/children/${childObj.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(childObj)
    })
      .then(res => res.json())
      .then(res => dispatch(editChild(res)))
      .catch(err => console.log(err));
  };
};
