import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskReducer'
import listReducer from './listReducer'

export const store = configureStore({
  reducer: {
    task: taskReducer,
    list: listReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch