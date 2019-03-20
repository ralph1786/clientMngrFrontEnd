const addProvider = providerObj => ({
  type: "LOGIN_PROVIDER",
  payload: providerObj
});

export const removeProvider = providerObj => ({
  type: "LOGOUT_PROVIDER",
  payload: providerObj
});

export const loginProvider = providerObj => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/login", {
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
