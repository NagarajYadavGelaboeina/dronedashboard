import { takeEvery, call, put, cancel, all } from "redux-saga/effects";
import API from "../api";
import * as actions from "../actions";

function* watchTempData(action) {
  const { latitude, longitude } = action;
  const { error, data } = yield call(
    API.findTempbydrone,
  );
  if (error) {
    console.log({ error });
    yield put({ type: actions.API_ERROR, code: error.code });
    yield cancel();
    return;
  }
  const tempData = data[0] ? data[0].tempData : ''
  if (!tempData) {
    yield put({ type: actions.API_ERROR });
    yield cancel();
    return;
  }
  yield put({ type: actions.TEMP_DATA_RECEIVED, tempData });
}

function* watchAppLoad() {
  yield all([
    takeEvery(actions.FETCH_TEMP_DATA, watchTempData)
  ]);
}

export default [watchAppLoad];
