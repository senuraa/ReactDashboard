import { Types } from "../actions/users";

const INIT_STATE = {
  data: [],
};
export default function data(state = INIT_STATE, action) {
  switch (action.type) {
    case Types.GET_USERS_REQUEST: {
      return { ...state, isLoading: true, isFailed: false };
    }
    case Types.GET_USERS_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
        isFailed: false,
      };
    }
    case Types.GET_USERS_ERROR: {
      return {
        ...state,
        isLoading: false,
        isFailed: true,
      };
    }
    case Types.DELETE_USER_REQUEST: {
      return {
        ...state,
        data: state.data.filter((record) => record._id !== action.payload.id),
      };
    }
    default:
      return state;
  }
}
