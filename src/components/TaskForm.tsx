import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTasks } from '../redux/taskReducer';
import { useSelector } from 'react-redux';
import { tasksSelector } from '../redux/selectors';


interface TaskFormProps {
  onRequestClose: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onRequestClose }) => {
  const [message, setMessage] = useState('');
  const tasks = useSelector(tasksSelector);
  const [newTask, setNewTask] = useState<string>('');
  const dispatch = useDispatch();

  const handleAddTask = (e: any) => {
    e.preventDefault()
    if (newTask.trim() === '') {
      setMessage('no puede anadir una tarea vacia')
      return;
    }

    dispatch(addTasks({ id: tasks.length + 1, description: newTask }));
    setNewTask('');
    onRequestClose();

  };

  return (
    <>
      <form onSubmit={handleAddTask}>
        <h2>Agregar Nuevo Task</h2>
        <input
          type="text"
          value={newTask}
          onChange={(e) => {
            setNewTask(e.target.value);
            setMessage('')
          }}
          placeholder="Ingrese la descripción del task"
        />
        <button type="submit">Agregar Task</button>
        <button type="button" onClick={onRequestClose}>Cancelar</button>
      </form>
      {message && (<span>{message}</span>)}
    </>
  );
};

export default TaskForm;
