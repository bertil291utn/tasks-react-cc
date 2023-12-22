import { RootState } from './store';

export const tasksSelector = (state: RootState) => state.task.tasks;
