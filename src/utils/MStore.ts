import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../redux/taskReducer';
import listReducer from '../redux/listReducer';

export const createStore = () => {
  return configureStore({
    reducer: {
      task: taskReducer,
      list: listReducer,
    },
  });
};

export const resetStore = (store: any) => {
  store.dispatch({ type: 'RESET_STORE' });
};

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
