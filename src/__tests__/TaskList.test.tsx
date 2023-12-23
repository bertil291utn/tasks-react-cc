import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import TasksScreen from '../layouts/TasksScreen';
import TaskForm from '../components/TaskForm';
import Home from '../layouts/Home';
import  { addTasks } from '../redux/taskReducer';
import { createStore, resetStore } from '../utils/MStore';



describe('Tasks', () => {

  let _store:any;

  beforeEach(() => {
    _store = createStore();
    resetStore(_store); 
  });


  it('renders tasks list from Redux store', () => {
    _store.dispatch(addTasks({id:1,description:"Tarea 1"}))

    render(
      <Provider store={_store}>
        <Router>
          <TasksScreen />
        </Router>
      </Provider>
    );

    expect(screen.getByText('Tarea 1')).toBeInTheDocument();
  });



  it('adds new task to Redux store on button click', async () => {
    render(
      <Provider store={_store }>
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
      expect(_store.getState().task.tasks).toEqual(
        [{ id: 1, description: 'New Task Description' }]
      );});

  });

  it('does not allow creating a task if the input field is empty', () => {

    const { getByText } = render(
      <Provider store={_store}>
        <Router>
          <TaskForm onRequestClose={() => { }} />
        </Router>
      </Provider>
    );

    fireEvent.click(getByText('Agregar Task'));

    expect(getByText('no puede anadir una tarea vacia')).toBeInTheDocument();

  });


  it('adds new task to Redux store and shows it after navigating back', async () => {
   
    render(
      <Provider store={_store}>
        <Router initialEntries={['/tasks']} initialIndex={0}>
          <Routes>

            <Route path="/tasks" element={<TasksScreen />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </Provider>
    );

    fireEvent.click(screen.getByText('agregar nuevo task'));
    await waitFor(() => {
      expect(screen.getByText('Agregar Nuevo Task')).toBeInTheDocument();
    });

    const inputElement = screen.getByTestId('task-description');
    fireEvent.change(inputElement, { target: { value: 'New Task Description' } });
    fireEvent.click(screen.getByText('Agregar Task'));

    await waitFor(() => {
      expect(_store.getState().task.tasks).toEqual(
        [{ id: 1, description: 'New Task Description' }]
      );
    });
    
    fireEvent.click(screen.getByText('Volver a la pantalla principal'));
    
    fireEvent.click(screen.getByTestId('ir-tasks'));
    
    await waitFor(() => {
    expect(screen.getByText('New Task Description')).toBeInTheDocument();
    })
  });


})






