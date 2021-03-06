import { takeEvery, fork, put, call } from "redux-saga/effects";
import * as actions from "../actions/users";
import * as api from "../api/users";

function* fetchData() {
  try {
    const data = yield call(api.getUsers);
    yield put(actions.getUsersSuccess({ data: data.data }));
  } catch (e) {
    yield put(actions.getUsersError(e));
  }
}

function* watchFetchData() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, fetchData);
}

const UserSagas = [fork(watchFetchData)];
export default UserSagas;
