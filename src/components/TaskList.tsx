import { useSelector } from 'react-redux';

import Task from './Task';
import { tasksSelector } from '../redux/selectors';

const TaskList: React.FC = () => {
  const tasks = useSelector(tasksSelector);

  return (
    <div>
      <h2>Lista de Tasks</h2>
      {tasks.map((task) => (
        <Task key={`task-${task.id}`} description={task.description} />
      ))}
    </div>
  );
};

export default TaskList;
