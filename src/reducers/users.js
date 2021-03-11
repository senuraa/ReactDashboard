import { Types } from "../actions/users";

const INIT_STATE = {
  users: "Trabeya INIT STATE",
};
export default function data(state = INIT_STATE, action) {
  switch (action.type) {
    case Types.GET_USERS_SUCCESS: {
      console.log("redux -> ", action.payload.data);
      return {
        data: action.payload.data,
      };
    }
    default:
      return state;
  }
}
