import instance from "./data";

export const getAllData = () => {
  return async (dispatch) => {
    await instance.get("/api/users/list/all-data").then((response) => {
      dispatch({
        type: "GET_ALL_DATA",
        data: response.data,
      });
    });
  };
};

export const getData = (params) => {
  return async (dispatch) => {
    await instance.get("/api/users/list/data", params).then((response) => {
      dispatch({
        type: "GET_DATA",
        data: response.data.users,
      });
    });
  };
};

export const getUser = (id) => {
  return async (dispatch) => {
    await instance
      .get("/api/users/user", {
        id,
      })
      .then((response) => {
        dispatch({
          type: "GET_USER",
          selectedUser: response.data.user,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const addUser = (user) => {
  return (dispatch, getState) => {
    instance
      .post("/apps/users/add-user", user)
      .then((response) => {
        dispatch({
          type: "ADD_USER",
          user,
        });
      })
      .then(() => {
        dispatch(getData(getState().contact.params));
        dispatch(getAllData());
      })
      .catch((err) => console.log(err));
  };
};

export const deleteUser = (id) => {
  return (dispatch, getState) => {
    instance
      .delete("/apps/users/delete", {
        id,
      })
      .then(() => {
        dispatch({
          type: "DELETE_USER",
        });
      })
      .then(() => {
        dispatch(getData(getState().contact.params));
        dispatch(getAllData());
      });
  };
};