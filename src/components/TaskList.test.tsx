import reducer, { addTasks, TaskInitialState } from '../redux/taskReducer'

test('Devuelve un listado de las tareas guardadas en redux', () => {
  const INITIAL_STATE = { id: 1, description: "Tarea 1" }
  const resp = reducer(TaskInitialState, addTasks(INITIAL_STATE));
  expect(resp.tasks).toEqual([INITIAL_STATE])
})