import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTasks } from '../redux/taskReducer';
import { useSelector } from 'react-redux';
import { tasksSelector } from '../redux/selectors';
import Modal from 'react-modal';

Modal.setAppElement('#root');

interface TaskFormProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ isOpen, onRequestClose }) => {
  const tasks = useSelector(tasksSelector);
  const [newTask, setNewTask] = useState<string>('');
  const dispatch = useDispatch();

  const handleAddTask = (e: any) => {
    e.preventDefault()
    if (newTask.trim() !== '') {
      dispatch(addTasks({ id: tasks.length + 1, description: newTask }));
      setNewTask('');
      onRequestClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Crear Nueva Tarea"
    >
      <form onSubmit={handleAddTask}>
        <h2>Agregar Nuevo Task</h2>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Ingrese la descripción del task"
        />
        <button type="submit">Agregar Task</button>
        <button type="button" onClick={onRequestClose}>Cancelar</button>
      </form>
    </Modal>
  );
};

export default TaskForm;
