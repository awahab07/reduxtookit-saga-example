import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IUser from '../../../models/user/User';

export const userSliceName = 'user';

interface IUserState {
  user: IUser | null;
  loading: boolean;
  error?: string | null;
}

const initialState: IUserState = {
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: userSliceName,
  initialState,
  reducers: {
    getUser: (state: IUserState): void => {
      state.loading = true;
      state.error = null;
    },
    getUserSuccess: (state: IUserState, action: PayloadAction<{ user: IUser }>): void => {
      const { user } = action.payload;
      state.user = user;
      state.loading = false;
      state.error = null;
    },
    getUserFailure: (state: IUserState, action: PayloadAction<string>): void => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const {
  getUser,
  getUserSuccess,
  getUserFailure
} = userSlice.actions;

export default userSlice.reducer;
