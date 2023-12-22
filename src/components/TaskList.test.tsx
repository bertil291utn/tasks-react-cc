import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import TasksScreen from '../layouts/TasksScreen';
import { addTasks } from '../redux/taskReducer';


describe('TasksScreen Component', () => {
  test('renders tasks list from Redux store', () => {
    store.dispatch(addTasks({ id: 1, description: 'Tarea 1' }))

    render(
      <Provider store={store}>
        <Router>
          <TasksScreen />
        </Router>
      </Provider>
    );

    expect(screen.getByText('Tarea 1')).toBeInTheDocument();
  });
})







// test('Devuelve un listado de las tareas guardadas en redux', () => {
//   const INITIAL_STATE = { id: 1, description: "Tarea 1" }
//   const resp = reducer(TaskInitialState, addTasks(INITIAL_STATE));
//   expect(resp.tasks).toEqual([INITIAL_STATE])
// })