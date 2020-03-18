import { all, fork } from 'redux-saga/effects';
import userSaga from '../components/User/state/sagas';

export const rootSaga = function* root(): Generator {
  yield all([fork(userSaga)]);
};
