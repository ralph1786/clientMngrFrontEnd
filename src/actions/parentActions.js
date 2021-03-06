import { toast } from "react-toastify";

const loadParent = parents => ({
  type: "LOAD_PARENTS",
  payload: parents
});

const registerParent = parentObj => ({
  type: "REGISTER_PARENT",
  payload: parentObj
});

export const allParents = () => {
  return dispatch => {
    return fetch("http://localhost:80/api/v1/parents")
      .then(res => res.json())
      .then(res => {
        dispatch(loadParent(res));
      });
  };
};

export const createParent = parentObj => {
  return dispatch => {
    return fetch("http://localhost:80/api/v1/parents", {
      method: "POST",
      body: JSON.stringify({ parent: parentObj }),
      headers: {
        "Content-Type": "application/json",
        accepts: "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.jwt === undefined) {
          localStorage.clear();
          toast.error("Registration Unsuccessful", {
            position: toast.POSITION.BOTTOM_CENTER
          });
        } else {
          dispatch(registerParent(res));
          toast.success(
            `${res.parent.name} registration was successful, please login.`,
            {
              position: toast.POSITION.BOTTOM_CENTER
            }
          );
        }
      })
      .catch(err => console.log(err));
  };
};
