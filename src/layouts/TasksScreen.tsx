import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const TasksScreen: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div>
      <button onClick={openModal}>agregar nuevo task</button>
      <TaskList />
      <Link to="/">Volver a la pantalla principal</Link>
      <TaskForm
        isOpen={isModalOpen}
        onRequestClose={closeModal} />
    </div>
  );
};

export default TasksScreen;
