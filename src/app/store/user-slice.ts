import { createSlice } from '@reduxjs/toolkit'
import { User } from '../../core/models/User';

export interface UserState {
  data: User | undefined;
  loading: boolean;
  errorMsg: string;
}

const initialState: UserState = {
  data: undefined,
  loading: false,
  errorMsg: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.data = payload;
    }
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer