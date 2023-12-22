import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTasks } from '../redux/taskReducer';
import { useSelector } from 'react-redux';
import { tasksSelector } from '../redux/selectors';

const TaskForm: React.FC = () => {
  const tasks = useSelector(tasksSelector);
  const [newTask, setNewTask] = useState<string>('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      dispatch(addTasks({ id: tasks.length + 1, description: newTask }));
      setNewTask('');
    }
  };

  return (
    <div>
      <h2>Agregar Nuevo Task</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Ingrese la descripción del task"
      />
      <button onClick={handleAddTask}>Agregar Task</button>
    </div>
  );
};

export default TaskForm;
