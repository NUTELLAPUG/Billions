// userActions.jsx

export const SET_USER_DATA = "SET_USER_DATA";

export const setUserData = (userData) => {
  return {
    type: SET_USER_DATA,
    payload: userData,
  };
};