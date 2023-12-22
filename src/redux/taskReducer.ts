import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Task } from '../interfaces/Task'

export interface TaskState {
  tasks: Array<Task>
}

const initialState: TaskState = {
  tasks: [],
}

export const TasksSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    initialSetTasks: (store, { payload }: PayloadAction<[]>) => {
      store.tasks = payload
    },
    addTasks: (store, { payload }: PayloadAction<[]>) => {
      store.tasks = [...store.tasks, ...payload]

    },
  },
})

export const { initialSetTasks, addTasks } = TasksSlice.actions

export default TasksSlice.reducer