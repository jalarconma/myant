import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './user-slice'
import registerReducer from './register-slice';
import accountReducer from './account-slice';


const reducer = combineReducers({
  user: userReducer,
  register: registerReducer,
  account: accountReducer,
})

export const store = configureStore({
  reducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch