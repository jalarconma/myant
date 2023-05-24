import { createSlice } from '@reduxjs/toolkit'
import { Register } from '../../core/models/Register';

export interface RegisterState {
  data: Register[];
  loading: boolean;
  errorMsg: string;
}

const initialState: RegisterState = {
  data: [],
  loading: false,
  errorMsg: ''
}

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setRegisters(state, { payload }) {
      state.data = payload;
    }
  },
})

export const { setRegisters } = registerSlice.actions

export default registerSlice.reducer