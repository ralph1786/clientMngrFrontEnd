const loadParent = parents => ({
  type: "LOAD_PARENTS",
  payload: parents
});

export const allParents = () => {
  return dispatch => {
    return fetch("http://localhost:80/api/v1/parents")
      .then(res => res.json())
      .then(res => {
        console.log(res);
        dispatch(loadParent(res));
      });
  };
};
