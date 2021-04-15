export const Types = {
  GET_USERS_REQUEST: "get_users_request",
  GET_USERS_SUCCESS: "get_users_success",
  GET_USERS_ERROR: "get_users_error",
  DELETE_USER_REQUEST: "delete_user_request",
  DELETE_USER_SUCCESS: "delete_user_success",
  DELETE_USER_ERROR: "delete_user_error",
};

export const getUsers = () => ({
  type: Types.GET_USERS_REQUEST,
});

export const getUsersSuccess = ({ data }) => ({
  type: Types.GET_USERS_SUCCESS,
  payload: { data },
});
export const getUsersError = ({ error }) => ({
  type: Types.GET_USERS_ERROR,
  payload: { error },
});

export const deleteUser = (id) => ({
  type: Types.DELETE_USER_REQUEST,
  payload: { id },
});
