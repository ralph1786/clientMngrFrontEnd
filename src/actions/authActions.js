const addProvider = providerObj => ({
  type: "LOGIN_PROVIDER",
  payload: providerObj
});

export const addParent = parentObj => ({
  type: "LOGIN_PARENT",
  payload: parentObj
});

export const setProvider = providerObj => ({
  type: "SET_PROVIDER",
  payload: providerObj
});

export const removeParent = parentObj => ({
  type: "LOGOUT_PARENT",
  payload: parentObj
});

export const removeProvider = providerObj => ({
  type: "LOGOUT_PROVIDER",
  payload: providerObj
});

export const loginProvider = providerObj => {
  return dispatch => {
    return fetch("http://localhost:80/api/v1/login", {
      method: "POST",
      body: JSON.stringify({ provider: providerObj }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        // console.log(res);
        localStorage.setItem("token", res.jwt);
        dispatch(addProvider(res.provider));
      })
      .catch(err => console.log(err));
  };
};

export const loginParent = parentObj => {
  return dispatch => {
    return fetch("http://localhost:80/api/v1/parent_login", {
      method: "POST",
      body: JSON.stringify({ parent: parentObj }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        // console.log(res);
        localStorage.setItem("token", res.jwt);
        dispatch(addParent(res.parent));
      })
      .catch(err => console.log(err));
  };
};
