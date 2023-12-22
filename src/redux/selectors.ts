import { RootState } from './store';

export const tasksSelector = (state: RootState) => state.task.tasks;
export const listSelector = (state: RootState) => state.list.lists;
export const isLoadingListSelector = (state: RootState) => state.list.isLoading;
