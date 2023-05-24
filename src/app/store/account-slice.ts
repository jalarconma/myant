import { createSlice } from '@reduxjs/toolkit'
import { Account } from '../../core/models/Account';

export interface AccountState {
  data: Account[];
  loading: boolean;
  errorMsg: string;
}

const initialState: AccountState = {
  data: [],
  loading: false,
  errorMsg: ''
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAccounts(state, { payload }) {
      state.data = payload;
    }
  },
})

export const { setAccounts } = accountSlice.actions

export default accountSlice.reducer