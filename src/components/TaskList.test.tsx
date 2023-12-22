import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import TasksScreen from '../layouts/TasksScreen';
import configureStore from 'redux-mock-store';
import TaskForm from './TaskForm';


const mockStore = configureStore();

describe('Tasks', () => {

  let _store: any;

  beforeEach(() => {
    _store = mockStore({
      task: {
        tasks: [],
      },
    });
  });


  it('renders tasks list from Redux store', () => {
    _store = mockStore({
      task: {
        tasks: [{ id: 1, description: 'Tarea 1' }],
      },
    });

    render(
      <Provider store={_store as any}>
        <Router>
          <TasksScreen />
        </Router>
      </Provider>
    );

    expect(screen.getByText('Tarea 1')).toBeInTheDocument();
  });

  it('adds new task to Redux store on button click', async () => {

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

  it('does not allow creating a task if the input field is empty', () => {

    const { getByText } = render(
      <Provider store={_store as any}>
        <Router>
          <TaskForm onRequestClose={() => {}} />
        </Router>
      </Provider>
    );

    fireEvent.click(getByText('Agregar Task'));

    expect(getByText('no puede anadir una tarea vacia')).toBeInTheDocument();

    const actions = _store.getActions();
    expect(actions).toHaveLength(0);
  });
})






