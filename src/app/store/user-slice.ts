import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { User } from '../../core/models/User';
import { AuthUseCases } from '../../core/use-cases/auth.usecases';

export interface UserState {
  data: User | null;
  loading: boolean;
  errorMsg: string;
}

const loginByGoogle = createAsyncThunk(
    'user/auth/google',
    async (payload: null, thunkAPI) => {
    //   const response = await AuthUseCases.()
    //   return response.data
    }
)

const initialState: UserState = {
  data: null,
  loading: false,
  errorMsg: ''
}

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
})

//export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer