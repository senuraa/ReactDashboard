export const Types = {
  GET_USERS_REQUEST: "get_users_request",
  GET_USERS_SUCCESS: "get_users_success",
};

export const getUsers = () => ({
  type: Types.GET_USERS_REQUEST,
});

export const getUsersSuccess = ({ data }) => ({
  type: Types.GET_USERS_SUCCESS,
  payload: { data },
});
