import { render, screen, fireEvent, waitFor, getByTestId } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import TasksScreen from '../layouts/TasksScreen';
import taskReducer, { addTasks } from '../redux/taskReducer';
import configureStore from 'redux-mock-store';


const mockStore = configureStore();
const _store = mockStore({ task: { tasks: [] } });

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

  test('adds new task to Redux store on button click', async () => {



    render(
      <Provider store={_store as any}>
        <Router>
          <TasksScreen />
        </Router>
      </Provider>
    )

    fireEvent.click(screen.getByText('agregar nuevo task'));
    await waitFor(() => {
      expect(screen.getByText('Agregar Nuevo Task')).toBeInTheDocument();
    });
    const inputElement = screen.getByTestId('task-description');
    fireEvent.change(inputElement, { target: { value: 'New Task Description' } });

    fireEvent.click(screen.getByText('Agregar Task'));

    await waitFor(() => {
      expect(_store.getActions()).toEqual([{ type: 'task/addTasks', payload: { id: 1, description: 'New Task Description' } }]);
    });


  });
})






