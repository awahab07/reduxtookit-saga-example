import { combineReducers, createAction, PayloadAction } from '@reduxjs/toolkit';

import userReducer from '../components/User/state/user';
import commentsReducer from '../components/User/state/user-comments';

const rootReducer = combineReducers({
  user: userReducer,
  comments: commentsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
