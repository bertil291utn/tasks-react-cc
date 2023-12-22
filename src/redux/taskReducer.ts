import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Task } from '../interfaces/Task'

export interface TaskState {
  tasks: Array<Task>
}

export const TaskInitialState: TaskState = {
  tasks: [],
}

export const TasksSlice = createSlice({
  name: 'task',
  initialState: TaskInitialState,
  reducers: {
    initialSetTasks: (store, { payload }: PayloadAction<[]>) => {
      store.tasks = payload
    },
    addTasks: (store, { payload }: PayloadAction<Task>) => {
      store.tasks = [...store.tasks, payload]

    },
  },
})

export const { initialSetTasks, addTasks } = TasksSlice.actions

export default TasksSlice.reducer