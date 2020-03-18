import { Action } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as userApi from '../../../api/user-api';
import { getData } from './common';
import { getUserSuccess, getUserFailure } from './user';

function* fetchUser(action: Action) {
  try {
    if (getData.match(action)) {
      const userId = action.payload;

      const fetchedUser = yield call(userApi.getUser, userId);
      yield put(getUserSuccess({user: fetchedUser}));
    }
  } catch (e) {
    yield put(getUserFailure(e.message));
  }
}

function* userSaga() {
  yield takeLatest(getData.type, fetchUser);
}

export default userSaga;
