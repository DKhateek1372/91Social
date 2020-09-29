
import { all, call } from 'redux-saga/effects';

import { spaceXSagas } from './home/sagas';

export default function* rootSaga() {
  yield all([
    call(spaceXSagas),
  ]);
}

