import { call, all, put, takeLatest } from 'redux-saga/effects';
import api from '../../services/index';

import {
  SpaceXActions
} from './actions';

function* fetchSpaceXHistoryRequest() {
  try {
    const response = yield call(api.spaceXDataHistory);
    yield put(SpaceXActions.fetchSpaceXHistorySuccess(response.data));
  } catch (error) {
    yield put(SpaceXActions.fetchSpaceXHistoryError(error));
  }
};

function* fetchSpaceXPaloadRequest(){
  try {
    const response = yield call(api.spaceXDataPayloads);
    yield put(SpaceXActions.fetchSpaceXPayloadSuccess(response.data));
  } catch (error) {
    yield put(SpaceXActions.fetchSpaceXPayloadError(error));
  }
}

export function* spaceXSagas() {
  yield all([
    yield takeLatest(SpaceXActions.FETCH_SPACE_X_HISTORY_REQUEST, fetchSpaceXHistoryRequest),
    yield takeLatest(SpaceXActions.FETCH_SPACE_X_PAYLOAD_REQUEST, fetchSpaceXPaloadRequest)
 ]);
}