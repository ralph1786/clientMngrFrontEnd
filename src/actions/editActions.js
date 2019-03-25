export const selectedChild = childObj => ({
  type: "SELECTED_CHILD",
  payload: childObj
});

const editChild = childObj => ({
  type: "EDIT_CHILD",
  payload: childObj
});

export const updateChild = childObj => {
  console.log(childObj);
  return dispatch => {
    return fetch(`http://localhost:80/api/v1/children/${childObj.id}`, {
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
