import React from 'react';
import { Link } from 'react-router-dom';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const TasksScreen: React.FC = () => {
  return (
    <div>
      <h1>Pantalla de Tasks</h1>
      <TaskList />
      <TaskForm />
      <Link to="/">Volver a la pantalla principal</Link>
    </div>
  );
};

export default TasksScreen;
