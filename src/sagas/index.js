import { all } from "redux-saga/effects";
import UserSagas from "./userSagas";

// combine all sagas
export default function* rootSaga() {
  yield all([...UserSagas]);
}
