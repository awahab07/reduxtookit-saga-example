import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IUserComment from '../../../models/user/UserComment';

export const commentsSliceName = 'comments';

interface ICommentsState {
  comments: IUserComment[];
  loading: boolean;
  error?: string | null;
}

interface ICommentsLoaded {
  comments: IUserComment[];
}

const initialState: ICommentsState = {
  comments: [],
  loading: false,
  error: null,
};

const commentsSlice = createSlice({
  name: commentsSliceName,
  initialState,
  reducers: {
    getComments(state: ICommentsState): void {
      state.loading = true;
      state.error = null;
    },
    getCommentsSuccess(state: ICommentsState, action: PayloadAction<ICommentsLoaded>): void {
      const { comments } = action.payload;
      state.comments = comments;
      state.loading = false;
      state.error = null;
    },
    getCommentsFailure(state: ICommentsState, action: PayloadAction<string>): void {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getComments,
  getCommentsSuccess,
  getCommentsFailure,
} = commentsSlice.actions;

export default commentsSlice.reducer;
